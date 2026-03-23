import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const jobTitle = formData.get('jobTitle');
    const jobSlug = formData.get('jobSlug');
    const pageUrl = formData.get('pageUrl');
    const resume = formData.get('resume');

    console.log('=== Job Application API Request Started ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Job Title:', jobTitle);
    console.log('Page URL:', pageUrl);
    console.log('Resume:', resume?.name);

    // Validate required fields
    if (!name || !email || !phone || !jobTitle) {
      throw new Error('Name, email, phone, and job title are required fields');
    }

    // Determine the subject line based on application type
    let subject;
    if (jobSlug === 'general') {
      subject = 'New Application from Website: General';
    } else if (jobSlug === 'internship') {
      subject = `New Application from Website: ${jobTitle}`;
    } else {
      subject = `New Application from Website: ${jobTitle}`;
    }

    // Create the job application data
    const applicationData = new FormData();
    applicationData.append('name', name);
    applicationData.append('email', email);
    applicationData.append('phone', phone);
    applicationData.append('position', jobTitle); // Job title as position
    applicationData.append('subject', subject);
    applicationData.append('message', '');
    applicationData.append('social_links', '');
    applicationData.append('note', '');
    applicationData.append('form_type', 'Job Application Website');
    applicationData.append('source', pageUrl || `https://isarvait.com/careers/${jobSlug || ''}`);
    applicationData.append('form_id', '0');
    
    // Attach resume if provided
    if (resume && resume.size > 0) {
      applicationData.append('resume_file', resume);
    }

    console.log('Sending request to: https://formcontroller.isarva.in/public/api/enquiry');

    // Send to job application API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout for file upload

    let response;
    try {
      response = await fetch('https://formcontroller.isarva.in/public/api/enquiry', {
        method: 'POST',
        body: applicationData,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error('Fetch error details:', {
        name: fetchError.name,
        message: fetchError.message,
      });
      throw new Error(`Unable to connect to job application server: ${fetchError.message}`);
    }

    console.log('Job Application API Response Status:', response.status);
    
    const responseText = await response.text();
    console.log('Job Application API Response Body:', responseText);

    if (!response.ok) {
      console.error('Job Application API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
      });
      
      // Provide user-friendly error messages
      let errorMessage = "We couldn't process your application. Please try again.";
      try {
        const errorData = JSON.parse(responseText);
        if (errorData.message) {
          errorMessage = errorData.message;
        } else if (errorData.errors) {
          const errorString = JSON.stringify(errorData.errors).toLowerCase();
          
          if (errorString.includes('email') && errorString.includes('taken')) {
            errorMessage = "You have already applied for this position with this email address.";
          } else if (errorString.includes('duplicate')) {
            errorMessage = "We've already received your application. Our team will review it shortly.";
          } else {
            errorMessage = "There was an issue processing your application. Please try again or contact us directly.";
          }
        }
      } catch (e) {
        // Use default error message
      }
      
      throw new Error(errorMessage);
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      data = { message: responseText };
    }

    console.log('=== Job Application Submitted Successfully ===');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('=== Job Application Submission Failed ===');
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to submit application',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
