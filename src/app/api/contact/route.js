import { NextResponse } from 'next/server';

// Map category name/type to CRM category ID when numeric ID is missing or invalid
function resolveCategoryId(formData) {
  const numericId = Number(formData.categoryId);
  if (Number.isInteger(numericId) && numericId > 0) {
    return numericId;
  }

  const searchStr = `${formData.itemName || ''} ${formData.selectedItem || ''} ${formData.subject || ''} ${formData.pageType || ''}`.toLowerCase();

  if (searchStr.includes('hrms')) return 1;
  if (searchStr.includes('crm')) return 2;
  if (searchStr.includes('wms') || searchStr.includes('godown')) return 7;
  if (searchStr.includes('woocommerce')) return 8;
  if (searchStr.includes('lodge')) return 11;
  if (searchStr.includes('retail') || searchStr.includes('multi branch')) return 12;
  if (searchStr.includes('document') || searchStr.includes('dms')) return 13;
  if (searchStr.includes('support')) return 29;
  if (searchStr.includes('petro')) return 30;
  if (searchStr.includes('fleet')) return 31;
  if (searchStr.includes('dealer')) return 32;
  if (searchStr.includes('expense')) return 39;
  if (searchStr.includes('dispatcher')) return 40;
  if (searchStr.includes('marine')) return 41;
  if (searchStr.includes('mobile service') || searchStr.includes('mobile care')) return 42;
  if (searchStr.includes('lms')) return 51;
  if (searchStr.includes('data logger')) return 64;
  if (searchStr.includes('pos')) return 73;
  if (searchStr.includes('billsoft') || searchStr.includes('bill soft')) return 77;
  if (searchStr.includes('wordpress')) return 20;
  if (searchStr.includes('ai') || searchStr.includes('ml')) return 18;
  if (searchStr.includes('cloud')) return 16;
  if (searchStr.includes('erp')) return 38;
  if (searchStr.includes('digital marketing')) return 33;

  return 6; // default Website Redesign / General
}

export async function POST(request) {
  try {
    const formData = await request.json();

    // Verify reCAPTCHA token if secret key is configured
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey) {
      const recaptchaToken = formData.recaptchaToken;
      if (!recaptchaToken) {
        console.warn('reCAPTCHA token is missing in the request.');
        return NextResponse.json({ success: false, error: 'reCAPTCHA token missing.' }, { status: 400 });
      }

      try {
        const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`, {
          method: 'POST'
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success || verifyData.score < 0.5) {
          console.warn('reCAPTCHA verification failed or score too low:', verifyData);
          return NextResponse.json({ success: false, error: 'Spam validation failed. Please try again.' }, { status: 400 });
        }
      } catch (err) {
        console.error('reCAPTCHA siteverify call failed:', err);
      }
    }

    console.log('=== CRM API Request Started ===');
    console.log('Received form data:', JSON.stringify(formData, null, 2));

    // Format phone number - strip non-digits and format
    let mobileNumber = '';
    if (formData.phone) {
      // Remove all non-digit characters
      const digitsOnly = formData.phone.replace(/\D/g, '');
      // If we have digits, format it (add +91 if Indian number without country code)
      if (digitsOnly.length > 0) {
        if (digitsOnly.length === 10) {
          // Indian 10-digit number, add country code
          mobileNumber = `+91${digitsOnly}`;
        } else if (formData.phone.startsWith('+')) {
          // Already has country code with +, use as is (stripping spaces/dashes)
          mobileNumber = `+${digitsOnly}`;
        } else if (digitsOnly.length > 10) {
          // Has country code but no +, add one
          mobileNumber = `+${digitsOnly}`;
        } else {
          // Too short or unknown, just send digits with +
          mobileNumber = `+${digitsOnly}`;
        }
      }
    }

    // Map form data to CRM API format
    const crmData = {
      title: formData.subject || 'Contact Form Submission',
      description: `[FORM SOURCE: ${formData.subject || formData.pageType || 'General Inquiry'}]\n\n${formData.message || ''}`,
      organization_name: formData.company || '',
      address: '',
      website: '',
      full_name: formData.name || '',
      email: formData.email || '',
      mobile: mobileNumber,
      categories: resolveCategoryId(formData),
      lead_source: 11
    };

    console.log('Formatted CRM data:', JSON.stringify(crmData, null, 2));
    console.log('Sending request to: https://crm.isarva.in/api/leads');

    // Send to CRM API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    let response;
    try {
      response = await fetch('https://crm.isarva.in/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Api-Key': process.env.CRM_API_KEY || '82a5b93bbb3e774daedb1267eeeeb9aae9272d2e7f43fa5a',
        },
        body: JSON.stringify(crmData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error('Fetch error details:', {
        name: fetchError.name,
        message: fetchError.message,
        cause: fetchError.cause,
      });
      throw new Error(`Unable to connect to CRM server: ${fetchError.message}`);
    }

    console.log('CRM API Response Status:', response.status);
    console.log('CRM API Response Headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('CRM API Response Body:', responseText);

    if (!response.ok) {
      console.error('CRM API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
      });

      // 409 Conflict: Lead already registered in CRM with this email/phone
      if (response.status === 409) {
        return NextResponse.json(
          {
            success: false,
            isDuplicate: true,
            error: 'This email address or mobile number is already registered for this request. Our team will contact you shortly.',
          },
          { status: 409 }
        );
      }

      // Try to parse error response
      let errorMessage = responseText;
      try {
        const errorData = JSON.parse(responseText);
        if (errorData.duplicate && errorData.lead) {
          return NextResponse.json({ success: true, duplicate: true, data: errorData });
        }
        if (errorData.errors) {
          errorMessage = JSON.stringify(errorData.errors);
        } else if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
        // Use raw text if not JSON
      }

      throw new Error(`CRM API error (${response.status}): ${errorMessage}`);
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      data = { message: responseText };
    }

    console.log('=== CRM API Request Successful ===');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('=== CRM API Request Failed ===');
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit form',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
