import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();

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
        } else if (digitsOnly.length > 10) {
          // Already has country code
          mobileNumber = `+${digitsOnly}`;
        } else {
          // Too short, just send as is with +
          mobileNumber = `+${digitsOnly}`;
        }
      }
    }

    // Map form data to CRM API format
    const crmData = {
      title: formData.subject || 'Contact Form Submission',
      description: formData.message || '',
      organization_name: formData.company || '',
      address: '',
      website: '',
      full_name: formData.name || '',
      email: formData.email || '',
      mobile: mobileNumber,
      categories: 1,
      lead_source: 19
    };

    console.log('Formatted CRM data:', JSON.stringify(crmData, null, 2));
    console.log('Sending request to: https://crm-demo.isarva.in/api/leads');

    // Send to CRM API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    let response;
    try {
      response = await fetch('https://crm-demo.isarva.in/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
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
      
      // Try to parse error response
      let errorMessage = responseText;
      try {
        const errorData = JSON.parse(responseText);
        if (errorData.errors) {
          errorMessage = JSON.stringify(errorData.errors);
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
