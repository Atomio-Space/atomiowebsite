# Contact Form Setup with Netlify Functions and Resend

This document explains how the contact form is configured to send emails to atomiotechnologies@gmail.com using Netlify Functions and the Resend API.

## Architecture

- **Frontend**: React form in `src/pages/StartProjectPage.tsx`
- **Backend**: Netlify Function in `netlify/functions/contact-form.mts`
- **Email Service**: Resend API for reliable email delivery
- **Deployment**: Netlify with automatic function deployment

## Setup Instructions

### 1. Environment Variables

Set the following environment variable in your Netlify dashboard:

```
RESEND_API_KEY=re_AnJQz1Gj_8R194aAZW9JJ8cmkYf4FnJ4q
```

**How to set in Netlify:**
1. Go to your site dashboard on Netlify
2. Navigate to Site settings > Environment variables
3. Click "Add variable"
4. Variable name: `RESEND_API_KEY`
5. Variable value: `re_AnJQz1Gj_8R194aAZW9JJ8cmkYf4FnJ4q`
6. Scopes: Select "Functions" (required for Netlify Functions)

### 2. Dependencies

The following packages are installed:
- `@netlify/functions`: Netlify Functions TypeScript support
- `resend`: Email API client

### 3. Function Endpoint

The contact form submits to: `/.netlify/functions/contact-form`

## Features

### Form Validation
- Required fields: First name, email, project types, budget, timeline
- Email format validation
- Minimum character requirements

### Spam Protection
- Basic spam detection algorithm
- Input sanitization
- Rate limiting through form state management

### Professional Email Design
- Clean, minimal design with Atomio branding
- Responsive HTML email template
- Contact information clearly displayed
- Project requirements formatted nicely
- Quick action buttons for easy response

### Error Handling
- Graceful error handling with user feedback
- Detailed logging for debugging
- CORS support for cross-origin requests

## Email Template

The email sent to atomiotechnologies@gmail.com includes:

1. **Header**: Professional Atomio branding
2. **Contact Information**: Name, email, company
3. **Project Requirements**: Selected project types, budget, timeline
4. **Quick Actions**: Reply button for easy response
5. **Footer**: Atomio branding and powered-by attribution

## Testing

### Local Development
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run local development: `netlify dev`
3. Test the form at: `http://localhost:8888`

### Production Testing
1. Deploy to Netlify
2. Test the contact form on your live site
3. Check email delivery to atomiotechnologies@gmail.com
4. Monitor function logs in Netlify dashboard

## Monitoring

### Function Logs
- View logs in Netlify dashboard under Functions tab
- Monitor for errors and spam attempts
- Track successful submissions

### Email Delivery
- Resend provides delivery tracking
- Check Resend dashboard for email status
- Monitor bounce rates and delivery issues

## Security Considerations

1. **API Key Security**: Environment variable is secure in Netlify
2. **Input Sanitization**: All inputs are sanitized before processing
3. **Spam Detection**: Basic spam scoring to prevent abuse
4. **CORS Configuration**: Properly configured for your domain
5. **Rate Limiting**: Form submission state prevents rapid submissions

## Troubleshooting

### Common Issues

1. **Function not found (404)**
   - Check that `netlify/functions/contact-form.mts` exists
   - Verify netlify.toml functions directory setting
   - Ensure function is deployed

2. **Environment variable not found**
   - Verify RESEND_API_KEY is set in Netlify dashboard
   - Check that Functions scope is selected
   - Redeploy after setting environment variables

3. **Email not received**
   - Check Resend dashboard for delivery status
   - Verify email address: atomiotechnologies@gmail.com
   - Check spam folder
   - Review function logs for errors

4. **CORS errors**
   - Verify CORS headers in function
   - Check that request is coming from correct domain

### Debug Steps

1. Check Netlify function logs
2. Test function endpoint directly
3. Verify Resend API key validity
4. Check email delivery in Resend dashboard
5. Review browser network tab for request details

## Maintenance

### Regular Tasks
- Monitor email delivery rates
- Review spam detection effectiveness
- Update dependencies as needed
- Check function performance metrics

### Updates
- Keep @netlify/functions updated
- Monitor Resend API changes
- Update email template as needed
- Review and improve spam detection
