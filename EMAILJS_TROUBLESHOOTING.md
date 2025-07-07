# EmailJS Troubleshooting Guide

## Quick Fix for "Service ID not found" Error

If you're seeing the "Service ID not found" (400) error with EmailJS, follow these steps:

1. **Verify Service ID**: Log into your [EmailJS Dashboard](https://dashboard.emailjs.com/admin) and check that your service ID is exactly `portfolio2003`

2. **Check Service Status**: Make sure your email service is connected and active:
   - Go to "Email Services" in your EmailJS dashboard
   - Check that the service with ID `portfolio2003` has a "Connected" status
   - If not connected, reconnect it by following the on-screen instructions

3. **Clear Browser Cache**: Try clearing your browser cache and cookies, then reload the page

## Testing Your EmailJS Configuration

I've created a special testing page to help diagnose issues:

1. Open this URL while your development server is running:
   ```
   http://localhost:3000/direct-email-test.html
   ```

2. This page allows you to:
   - Test different service IDs, template IDs, and public keys
   - See detailed error messages
   - Verify which parameters are being sent to EmailJS

## Common EmailJS Error Codes

### 400 Bad Request

This typically means one of these issues:
- Service ID doesn't exist or is incorrect
- Template ID doesn't exist or is incorrect
- Required template variables are missing

### 401 Unauthorized

This means your public key is incorrect or your account has restrictions.

### 403 Forbidden

This typically means your EmailJS account has domain restrictions that prevent sending from localhost or your domain.

## Step-by-Step Verification

1. **Verify EmailJS Account**:
   - Log in to [EmailJS](https://dashboard.emailjs.com/)
   - Check your account status (free accounts have 200 emails/month)

2. **Verify Email Service**:
   - Go to "Email Services"
   - Confirm service `portfolio2003` exists and is connected
   - If not, create a new service and update your code with the new service ID

3. **Verify Template**:
   - Go to "Email Templates"
   - Confirm template `template_vxhyt5n` exists
   - Check that the template has all required variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{subject}}`
     - `{{message}}`
     - `{{to_name}}`
     - `{{to_email}}`
     - `{{reply_to}}`

4. **Verify Public Key**:
   - Go to "Account" → "API Keys"
   - Confirm your public key is `FZoGm_0seAxnQPjf5`
   - If not, update your code with the correct public key

## Code Verification

If all the above checks pass, verify your code by comparing with these examples:

### Using emailjs.send (Direct Method)

```javascript
// Initialize EmailJS with your public key
emailjs.init("FZoGm_0seAxnQPjf5");

// Create template parameters
const templateParams = {
  from_name: "Sender Name",
  from_email: "sender@example.com",
  subject: "Test Subject",
  message: "Test Message",
  to_name: "Titiksha",
  to_email: "titiksha2003dwivedi@gmail.com",
  reply_to: "sender@example.com"
};

// Send the email
emailjs.send("portfolio2003", "template_vxhyt5n", templateParams)
  .then(response => {
    console.log("SUCCESS!", response);
  })
  .catch(error => {
    console.error("FAILED...", error);
  });
```

### Using emailjs.sendForm (Form Method)

```javascript
// Initialize EmailJS with your public key
emailjs.init("FZoGm_0seAxnQPjf5");

// In your submit handler:
const form = document.getElementById('contact-form');

emailjs.sendForm("portfolio2003", "template_vxhyt5n", form, "FZoGm_0seAxnQPjf5")
  .then(response => {
    console.log("SUCCESS!", response);
  })
  .catch(error => {
    console.error("FAILED...", error);
  });
```

## Still Having Issues?

If you've tried all the above and still can't resolve the issue:

1. Create a new EmailJS service and template from scratch
2. Update your code with the new IDs
3. Contact EmailJS support with your error details

Remember to check browser console logs for detailed error information that can help diagnose the problem.
