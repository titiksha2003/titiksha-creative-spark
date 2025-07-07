# Email Configuration Instructions

To make the contact form send emails to your address (titiksha2003dwivedi@gmail.com), follow these steps:

## Setting up EmailJS

1. Sign up for a free account at [EmailJS.com](https://www.emailjs.com/)

2. Create an Email Service:
   - Go to the "Email Services" tab
   - Click "Add New Service"
   - Choose a service provider (Gmail is recommended)
   - Follow the instructions to connect your email account
   - **Important**: After creating the service, copy the Service ID (it starts with "service_")
   - **Critical**: Verify that your service ID is exactly `portfolio2003` or update your code with the new ID

3. Create an Email Template:
   - Go to the "Email Templates" tab
   - Click "Create New Template"
   - Make sure to include these variables in your template:
     - `{{from_name}}` – The name of the person sending the message
     - `{{from_email}}` – The email of the person sending the message
     - `{{subject}}` – The subject of the message
     - `{{message}}` – The content of the message
     - `{{to_name}}` – Your name (Titiksha)
     - `{{to_email}}` – Your email address (titiksha2003dwivedi@gmail.com)
     - `{{reply_to}}` – The sender's email for reply

4. Update the `email-service.ts` file:
   - Open `src/lib/email-service.ts`
   - Make sure your service ID is exactly as shown:

     ```typescript
     const SERVICE_ID = "portfolio2003"; // This is your actual EmailJS service ID
     ```

## Troubleshooting Tools

I've created several tools to help you debug any email issues:

1. **Basic Email Test:**
   - Open `http://localhost:3000/email-test.html` in your browser while your development server is running
   - Fill out the form and click "Send Test Email"
   - Check for any error messages

2. **Direct EmailJS Test:**
   - Open `http://localhost:3000/direct-email-test.html` in your browser
   - This page allows you to test different service IDs, template IDs, and public keys
   - You can modify these values to find the correct combination

3. **EmailJS Service Checker:**
   - Open `http://localhost:3000/emailjs-checker.html` in your browser
   - This comprehensive tool lets you:
     - Verify your public key is valid
     - Check if your service ID exists
     - Validate your template ID
     - Send a test email with complete debugging

## Resolving "Service ID not found" Error

If you're seeing the "Service ID not found" error, follow these steps:

1. **Verify in EmailJS Dashboard:**
   - Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
   - Go to "Email Services"
   - Check if a service with ID `portfolio2003` exists
   - If it doesn't exist, create a new service and update your code with the new ID

2. **Verify in Code:**
   - Check that the service ID is spelled correctly in:
     - `src/lib/email-service.ts`
     - `src/components/EmailJSForm.tsx`
     - `public/email-test.html`
     - `public/direct-email-test.html`
     - `public/emailjs-checker.html`

3. **Test with Different Service ID:**
   - If you create a new service, use the EmailJS checker tool to test it
   - Update all occurrences of the service ID in your code

## Common Issues & Solutions

1. **Template Variable Format**: In your template, make sure variables use DOUBLE curly braces like `{{from_name}}`, not single ones

2. **Template Content**: Your template must include all the variables sent from your code:
   - `from_name`
   - `from_email`
   - `subject`
   - `message`
   - `to_name`
   - `to_email`
   - `reply_to`

3. **Service Configuration**: Ensure your Gmail or other email service is properly connected in EmailJS
   - Check the connection status in your EmailJS dashboard
   - If disconnected, reconnect and authorize the service

4. **CORS Issues**: If testing locally, ensure your EmailJS account allows requests from localhost
   - Go to your EmailJS dashboard → Account → Security
   - Add `localhost` to the allowed domains

5. **EmailJS Initialization**: Make sure EmailJS is initialized with your public key before sending
   - The initialization should happen once at application startup
   - Verify the public key is correct

## Additional Tips

- The EmailJS free plan allows 200 emails per month
- For production use, consider upgrading your EmailJS plan
- Set up domain restrictions in EmailJS to prevent abuse

## Need More Help?

If you continue to have issues after trying these solutions:

1. Try the EmailJS checker tool at `http://localhost:3000/emailjs-checker.html`
2. Create a completely new service and template in EmailJS
3. Update all code with the new IDs
4. Contact EmailJS support with any specific error messages
