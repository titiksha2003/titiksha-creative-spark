import emailjs from '@emailjs/browser';

// EmailJS credentials
// To get your service ID, visit https://dashboard.emailjs.com/admin and look under "Email Services"
const SERVICE_ID = "portfolio2003";  // Your EmailJS service ID
const TEMPLATE_ID = "template_vxhyt5n";
const PUBLIC_KEY = "FZoGm_0seAxnQPjf5";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Create a template parameters object
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: "Titiksha",
      to_email: "titiksha2003dwivedi@gmail.com",
      reply_to: data.email
    };

    // Log the parameters for debugging
    console.log('Sending email with params:', templateParams);
    
    // Send the email using the EmailJS API
    const response = await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Add more detailed error logging
    if (error && typeof error === 'object' && 'text' in error) {
      console.error(`Error details: ${(error as any).text}`);
    }
    
    return false;
  }
};
