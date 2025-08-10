import type { Context } from '@netlify/functions';
import { Resend } from 'resend';

// CORS headers for cross-origin requests
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

// Basic spam detection function
function calculateSpamScore(data: any) {
  let score = 0;
  
  // Check for spam indicators
  const projectTypesText = data.projectTypes?.join(' ') || '';
  const allText = `${data.firstName} ${data.lastName} ${data.email} ${data.company} ${projectTypesText}`.toLowerCase();
  
  if (data.firstName && data.firstName.length < 2) score += 0.2;
  if (!data.email || !data.email.includes('@')) score += 0.5;
  if (allText.includes('viagra') || allText.includes('casino') || allText.includes('loan')) score += 0.5;
  if (data.projectTypes && data.projectTypes.length > 8) score += 0.3; // Too many project types selected
  
  return Math.min(score, 1.0);
}

// Input sanitization function
function sanitizeInput(input: any): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .trim();
}

// Format metadata for email display
function formatMetadataForEmail(metadata: any) {
  const { ipAddress, userAgent, browserInfo, locationData } = metadata;

  // Format browser information
  const browserName = browserInfo?.browserName || 'Unknown';
  const browserVersion = browserInfo?.browserVersion || 'Unknown';
  const osName = browserInfo?.osName || 'Unknown';
  const deviceType = browserInfo?.deviceType || 'Unknown';
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
  const screenInfo = browserInfo?.screen ?
    `${browserInfo.screen.width}x${browserInfo.screen.height}` : 'Unknown';

  return {
    ipAddress: ipAddress || 'Unknown',
    browser: browserString,
    location: locationString,
    timezone: browserInfo?.timezone || locationData?.timezone || 'Unknown',
    screen: screenInfo,
    language: browserInfo?.language || 'Unknown',
    referrer: browserInfo?.referrer || 'Direct',
    userAgent: userAgent || 'Unknown',
    isp: locationData?.isp || 'Unknown',
  };
}

// Validate form data
function validateFormData(data: any) {
  const errors = [];
  
  if (!data.firstName || data.firstName.length < 2) {
    errors.push('First name is required and must be at least 2 characters');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  if (!data.projectTypes || !Array.isArray(data.projectTypes) || data.projectTypes.length === 0) {
    errors.push('At least one project type must be selected');
  }
  
  if (!data.budget) {
    errors.push('Budget range is required');
  }
  
  if (!data.timeline) {
    errors.push('Timeline is required');
  }
  
  return errors;
}

// Main handler function
export default async (req: Request, context: Context) => {
  console.log('Function called with method:', req.method);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('', {
      status: 200,
      headers,
    });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers,
    });
  }

  try {
    // Initialize Resend
    const resend = new Resend(Netlify.env.get('RESEND_API_KEY'));

    // Parse request body
    const formData = await req.json();
    console.log('Form data received:', formData);

    // Extract metadata
    const browserInfo = formData.browserInfo || {};
    const locationData = formData.locationData || {};

    // Get IP address from Netlify headers
    const ipAddress = req.headers.get('x-forwarded-for') ||
                     req.headers.get('x-real-ip') ||
                     req.headers.get('client-ip') ||
                     'Unknown';

    // Get user agent
    const userAgent = req.headers.get('user-agent') || 'Unknown';

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(formData.firstName),
      lastName: sanitizeInput(formData.lastName || ''),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company || ''),
      projectTypes: Array.isArray(formData.projectTypes) ? formData.projectTypes.map(sanitizeInput) : [],
      budget: sanitizeInput(formData.budget),
      timeline: sanitizeInput(formData.timeline),
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
      return new Response(JSON.stringify({ 
        error: 'Validation failed', 
        details: validationErrors 
      }), {
        status: 400,
        headers,
      });
    }

    // Check for spam
    const spamScore = calculateSpamScore(sanitizedData);
    if (spamScore >= 0.5) {
      // Log potential spam but return success to avoid revealing detection
      console.log('Potential spam detected:', { spamScore, email: sanitizedData.email });
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Thank you for your inquiry! We will respond within 24 hours.' 
      }), {
        status: 200,
        headers,
      });
    }

    // Prepare professional email content for Atomio
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry - Atomio Technologies</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
              New Project Inquiry
            </h1>
            <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 16px; font-weight: 400;">
              Atomio Technologies Website
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px;">

            <!-- Contact Information Card -->
            <div style="background-color: #f8fafc; border-radius: 12px; padding: 30px; margin-bottom: 30px; border-left: 4px solid #3b82f6;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
                Contact Information
              </h2>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 100px; vertical-align: top;">
                    <strong style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</strong>
                  </td>
                  <td style="padding: 8px 0; color: #1e293b; font-size: 16px; font-weight: 500;">
                    ${sanitizedData.firstName} ${sanitizedData.lastName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <strong style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                  </td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${sanitizedData.email}" style="color: #3b82f6; text-decoration: none; font-size: 16px; font-weight: 500;">
                      ${sanitizedData.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; vertical-align: top;">
                    <strong style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company:</strong>
                  </td>
                  <td style="padding: 8px 0; color: #1e293b; font-size: 16px; font-weight: 500;">
                    ${sanitizedData.company || 'Not provided'}
                  </td>
                </tr>
              </table>
            </div>

            <!-- Project Requirements Card -->
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
                Project Requirements
              </h2>

              <div style="margin-bottom: 20px;">
                <p style="color: #64748b; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  <strong>Project Types:</strong>
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${sanitizedData.projectTypes.map(type =>
                    `<span style="background-color: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${type}</span>`
                  ).join('')}
                </div>
              </div>

              <div style="margin-bottom: 20px;">
                <p style="color: #64748b; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  <strong>Budget Range:</strong>
                </p>
                <p style="color: #1e293b; margin: 0; font-size: 16px; font-weight: 500;">
                  ${sanitizedData.budget}
                </p>
              </div>

              <div>
                <p style="color: #64748b; margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                  <strong>Timeline:</strong>
                </p>
                <p style="color: #1e293b; margin: 0; font-size: 16px; font-weight: 500;">
                  ${sanitizedData.timeline}
                </p>
              </div>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${sanitizedData.email}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 8px;">
                Reply to Client
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #1e293b; padding: 30px; text-align: center;">
            <p style="color: #cbd5e1; margin: 0 0 15px 0; font-size: 14px;">
              This inquiry was submitted from the Atomio Technologies website.
            </p>
            <div style="border-top: 1px solid #334155; padding-top: 15px; margin-top: 15px;">
              <p style="color: #64748b; margin: 0; font-size: 12px;">
                Powered by <a href="https://atomio.tech" style="color: #cbd5e1; text-decoration: none; font-weight: 500;">Atomio</a>
              </p>
            </div>
          </div>

        </div>
      </body>
      </html>
    `;

    // Send notification email to business
    const businessEmailResult = await resend.emails.send({
      from: 'Atomio Project Inquiries <onboarding@resend.dev>',
      to: ['atomiotechnologies@gmail.com'],
      subject: `New Project Inquiry: ${sanitizedData.projectTypes.join(', ')} - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: businessEmailHtml,
      replyTo: sanitizedData.email,
    });

    console.log('Business email result:', businessEmailResult);

    return new Response(JSON.stringify({
      success: true,
      message: 'Thank you for your inquiry! We will respond within 24 hours.',
    }), {
      status: 200,
      headers,
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(JSON.stringify({
      error: 'An error occurred while sending your inquiry. Please try again later.',
    }), {
      status: 500,
      headers,
    });
  }
};
