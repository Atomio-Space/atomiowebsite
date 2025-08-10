const { Resend } = require('resend');



// CORS headers for cross-origin requests
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

// Basic spam detection function
function calculateSpamScore(data) {
  let score = 0;
  
  // Check for spam indicators
  if (data.message.includes('http://') || data.message.includes('https://')) score += 0.3;
  if (data.fullName.length < 2) score += 0.2;
  if (!data.email.includes('@')) score += 0.5;
  if (data.message.length < 10) score += 0.2;
  if (data.message.toLowerCase().includes('viagra') || 
      data.message.toLowerCase().includes('casino') ||
      data.message.toLowerCase().includes('loan')) score += 0.5;
  
  return Math.min(score, 1.0);
}

// Input sanitization function
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .trim();
}

// Format metadata for email display
function formatMetadataForEmail(metadata) {
  const { ipAddress, userAgent, browserInfo, locationData } = metadata;

  // Format browser information
  const browserName = browserInfo.browserName || 'Unknown';
  const browserVersion = browserInfo.browserVersion || 'Unknown';
  const osName = browserInfo.osName || 'Unknown';
  const deviceType = browserInfo.deviceType || 'Unknown';
  const browserString = `${browserName} ${browserVersion} on ${osName} (${deviceType})`;

  // Format location information
  let locationString = 'Unknown';
  if (locationData && !locationData.error) {
    const locationParts = [];
    if (locationData.city) locationParts.push(locationData.city);
    if (locationData.region) locationParts.push(locationData.region);
    if (locationData.country) locationParts.push(locationData.country);
    locationString = locationParts.length > 0 ? locationParts.join(', ') : 'Unknown';
  } else if (locationData && locationData.error) {
    locationString = `Unable to determine (${locationData.error})`;
  }

  // Format screen information
  const screenInfo = browserInfo.screen ?
    `${browserInfo.screen.width}x${browserInfo.screen.height}` : 'Unknown';

  return {
    ipAddress: ipAddress || 'Unknown',
    browser: browserString,
    location: locationString,
    timezone: browserInfo.timezone || locationData.timezone || 'Unknown',
    screen: screenInfo,
    language: browserInfo.language || 'Unknown',
    referrer: browserInfo.referrer || 'Direct',
    userAgent: userAgent || 'Unknown',
    isp: locationData.isp || 'Unknown',
  };
}

// Validate form data
function validateFormData(data) {
  const errors = [];
  
  if (!data.fullName || data.fullName.length < 2) {
    errors.push('Full name is required and must be at least 2 characters');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  if (!data.subject || data.subject.length < 1) {
    errors.push('Subject is required');
  }
  
  if (!data.message || data.message.length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  
  if (data.message && data.message.length > 2000) {
    errors.push('Message must not exceed 2000 characters');
  }
  
  return errors;
}

// Main handler function
exports.handler = async (event, context) => {
  console.log('Function called with method:', event.httpMethod);
  console.log('Event body:', event.body);

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse request body
    const formData = JSON.parse(event.body);

    // Extract metadata
    const browserInfo = formData.browserInfo || {};
    const locationData = formData.locationData || {};

    // Get IP address from Netlify headers
    const ipAddress = event.headers['x-forwarded-for'] ||
                     event.headers['x-real-ip'] ||
                     event.headers['client-ip'] ||
                     'Unknown';

    // Get user agent
    const userAgent = event.headers['user-agent'] || 'Unknown';

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone || ''),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    // Prepare metadata for emails
    const metadata = {
      ipAddress,
      userAgent,
      browserInfo,
      locationData,
      timestamp: new Date().toISOString(),
      referrer: browserInfo.referrer || 'Unknown',
    };

    // Format metadata for display
    const formattedMetadata = formatMetadataForEmail(metadata);

    // Validate form data
    const validationErrors = validateFormData(sanitizedData);
    if (validationErrors.length > 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Validation failed', 
          details: validationErrors 
        }),
      };
    }

    // Check for spam
    const spamScore = calculateSpamScore(sanitizedData);
    if (spamScore >= 0.5) {
      // Log potential spam but return success to avoid revealing detection
      console.log('Potential spam detected:', { spamScore, email: sanitizedData.email });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Thank you for your message!' }),
      };
    }

    // Prepare email content with professional design
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #135673 0%, #6a92a1 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
              New Contact Form Submission
            </h1>
            <p style="color: #bad9e4; margin: 8px 0 0 0; font-size: 16px; font-weight: 400;">
              Amara Nursing LLC Website
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">

            <!-- Contact Information Card -->
            <div style="background-color: #f8f9fa; border-radius: 12px; padding: 30px; margin-bottom: 30px; border-left: 4px solid #d5467e;">
              <h2 style="color: #135673; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
                Contact Information
              </h2>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 80px; vertical-align: top;">
                    <strong style="color: #6c757d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</strong>
                  </td>
                  <td style="padding: 8px 0; color: #333333; font-size: 16px; font-weight: 500;">
                    ${sanitizedData.fullName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <strong style="color: #6c757d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                  </td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${sanitizedData.email}" style="color: #135673; text-decoration: none; font-size: 16px; font-weight: 500;">
                      ${sanitizedData.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <strong style="color: #6c757d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone:</strong>
                  </td>
                  <td style="padding: 8px 0; color: #333333; font-size: 16px; font-weight: 500;">
                    ${sanitizedData.phone || 'Not provided'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <strong style="color: #6c757d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Subject:</strong>
                  </td>
                  <td style="padding: 8px 0; color: #333333; font-size: 16px; font-weight: 500;">
                    ${sanitizedData.subject}
                  </td>
                </tr>
              </table>
            </div>

            <!-- Message Card -->
            <div style="background-color: #ffffff; border: 1px solid #bad9e4; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
              <h2 style="color: #135673; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">
                Message
              </h2>
              <div style="color: #333333; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">
${sanitizedData.message}
              </div>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${sanitizedData.email}" style="display: inline-block; background-color: #d5467e; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px;">
                Reply to Customer
              </a>
              <a href="tel:${sanitizedData.phone}" style="display: inline-block; background-color: #135673; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px;">
                Call Customer
              </a>
            </div>

            <!-- Technical Metadata -->
            <div style="background-color: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 20px; border-left: 4px solid #6a92a1;">
              <h2 style="color: #135673; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
                Technical Information
              </h2>

              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; width: 120px; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">IP Address:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333; font-family: monospace;">
                    ${formattedMetadata.ipAddress}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Browser:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${formattedMetadata.browser}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Location:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${formattedMetadata.location}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Timezone:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${formattedMetadata.timezone}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Screen:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${formattedMetadata.screen}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Language:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${formattedMetadata.language}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Referrer:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${formattedMetadata.referrer}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">ISP:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${formattedMetadata.isp}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; vertical-align: top;">
                    <strong style="color: #6c757d; text-transform: uppercase; letter-spacing: 0.5px;">Submitted:</strong>
                  </td>
                  <td style="padding: 6px 0; color: #333333;">
                    ${new Date(metadata.timestamp).toLocaleString('en-US', {
                      timeZone: formattedMetadata.timezone !== 'Unknown' ? formattedMetadata.timezone : 'UTC',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}
                  </td>
                </tr>
              </table>

              <details style="margin-top: 15px;">
                <summary style="color: #6c757d; font-size: 12px; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px;">
                  <strong>Raw User Agent</strong>
                </summary>
                <p style="margin: 10px 0 0 0; padding: 10px; background-color: #ffffff; border-radius: 4px; font-family: monospace; font-size: 11px; color: #333333; word-break: break-all;">
                  ${formattedMetadata.userAgent}
                </p>
              </details>
            </div>

          </div>

          <!-- Footer -->
          <div style="background-color: #135673; padding: 30px; text-align: center;">
            <p style="color: #bad9e4; margin: 0 0 15px 0; font-size: 14px;">
              This message was sent from the Amara Nursing LLC website contact form.
            </p>
            <div style="border-top: 1px solid #6a92a1; padding-top: 15px; margin-top: 15px;">
              <p style="color: #6c757d; margin: 0; font-size: 12px;">
                Powered by <a href="https://atomio.tech" style="color: #bad9e4; text-decoration: none; font-weight: 500;">atomio</a>
              </p>
            </div>
          </div>

        </div>
      </body>
      </html>
    `;

    const confirmationEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Amara Nursing LLC</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #135673 0%, #6a92a1 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
              Thank You
            </h1>
            <p style="color: #bad9e4; margin: 8px 0 0 0; font-size: 16px; font-weight: 400;">
              We've received your message
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">

            <!-- Greeting -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #135673; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">
                Dear ${sanitizedData.fullName},
              </h2>
              <p style="color: #333333; font-size: 16px; line-height: 1.7; margin: 0;">
                Thank you for contacting Amara Nursing LLC. We have received your message and appreciate you reaching out to us. Our team will review your inquiry and respond within 24 hours.
              </p>
            </div>

            <!-- Message Summary -->
            <div style="background-color: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #d5467e;">
              <h3 style="color: #135673; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                Your Message Summary
              </h3>
              <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #bad9e4;">
                <p style="color: #6c757d; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  <strong>Subject:</strong>
                </p>
                <p style="color: #333333; margin: 0 0 15px 0; font-size: 16px; font-weight: 500;">
                  ${sanitizedData.subject}
                </p>
                <p style="color: #6c757d; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  <strong>Message:</strong>
                </p>
                <p style="color: #333333; margin: 0; font-size: 16px; line-height: 1.6; font-style: italic;">
                  "${sanitizedData.message.substring(0, 200)}${sanitizedData.message.length > 200 ? '...' : ''}"
                </p>
              </div>
            </div>

            <!-- Contact Information -->
            <div style="background-color: #ffffff; border: 1px solid #bad9e4; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
              <h3 style="color: #135673; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
                Need Immediate Assistance?
              </h3>
              <p style="color: #333333; font-size: 16px; line-height: 1.7; margin: 0 0 20px 0;">
                If you have any urgent concerns, please don't hesitate to call us directly:
              </p>

              <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                <div style="flex: 1; min-width: 250px; background-color: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
                  <p style="color: #6c757d; margin: 0 0 5px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    <strong>Home Services</strong>
                  </p>
                  <a href="tel:8174719954" style="color: #135673; text-decoration: none; font-size: 20px; font-weight: 700;">
                    (817) 471-9954
                  </a>
                </div>
                <div style="flex: 1; min-width: 250px; background-color: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
                  <p style="color: #6c757d; margin: 0 0 5px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                    <strong>Admin Office</strong>
                  </p>
                  <a href="tel:8176001793" style="color: #135673; text-decoration: none; font-size: 20px; font-weight: 700;">
                    (817) 600-1793
                  </a>
                </div>
              </div>
            </div>

            <!-- Closing -->
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #333333; font-size: 16px; line-height: 1.7; margin: 0 0 10px 0;">
                Best regards,
              </p>
              <p style="color: #135673; font-size: 18px; font-weight: 600; margin: 0;">
                Amara Nursing LLC Team
              </p>
            </div>

          </div>

          <!-- Footer -->
          <div style="background-color: #135673; padding: 30px; text-align: center;">
            <p style="color: #bad9e4; margin: 0 0 15px 0; font-size: 14px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
            <div style="border-top: 1px solid #6a92a1; padding-top: 15px; margin-top: 15px;">
              <p style="color: #6c757d; margin: 0; font-size: 12px;">
                Powered by <a href="https://atomio.dev" style="color: #bad9e4; text-decoration: none; font-weight: 500;">atomio</a>
              </p>
            </div>
          </div>

        </div>
      </body>
      </html>
    `;

    // Send notification email to business
    // Using onboarding@resend.dev as sender since amaracares.com domain is not verified
    const businessEmailResult = await resend.emails.send({
      from: 'Amara Nursing Contact Form <onboarding@resend.dev>',
      to: ['nursingamara@gmail.com'], // Using the signup email as requested
      subject: `New Contact Form: ${sanitizedData.subject}`,
      html: businessEmailHtml,
      replyTo: sanitizedData.email, // Allow direct reply to the customer
    });

    // Send confirmation email to customer
    const confirmationEmailResult = await resend.emails.send({
      from: 'Amara Nursing LLC <onboarding@resend.dev>',
      to: [sanitizedData.email],
      subject: 'Thank you for contacting Amara Nursing LLC',
      html: confirmationEmailHtml,
    });

    console.log('Business email result:', businessEmailResult);
    console.log('Confirmation email result:', confirmationEmailResult);

    console.log('Emails sent successfully:', {
      businessEmail: businessEmailResult.data?.id,
      confirmationEmail: confirmationEmailResult.data?.id,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message! We will respond within 24 hours.',
      }),
    };

  } catch (error) {
    console.error('Contact form error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'An error occurred while sending your message. Please try again later.',
      }),
    };
  }
};
