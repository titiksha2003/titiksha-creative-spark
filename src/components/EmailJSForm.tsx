import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// This is a simpler implementation using EmailJS refs approach

export function EmailJSForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debug, setDebug] = useState<string | null>(null);
  const { toast } = useToast();

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your public key
    const publicKey = 'FZoGm_0seAxnQPjf5';
    try {
      emailjs.init(publicKey);
      console.log('EmailJS initialized with public key:', publicKey);
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setDebug(null);
    
    // These values are hardcoded to ensure they're correct
    const serviceId = 'portfolio2003';
    const templateId = 'template_vxhyt5n';
    const publicKey = 'FZoGm_0seAxnQPjf5';

    // Log values for debugging
    console.log('Sending with:', { serviceId, templateId, publicKey });
    
    // Get form data for logging
    const formData = new FormData(form.current);
    const formValues: Record<string, string> = {};
    formData.forEach((value, key) => {
      formValues[key] = value.toString();
    });
    console.log('Form values:', formValues);
    
    // Send the form
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result);
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I\'ll get back to you soon.',
        });
        form.current?.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        // Show more detailed error information
        setDebug(`Error: ${error.text || 'Unknown error'} (Status: ${error.status || 'Unknown'})`);
        toast({
          title: 'Failed to Send',
          description: 'There was an error sending your message. Please check the debugging information below or try the test page at /direct-email-test.html',
          variant: 'destructive'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="from_name">Name</Label>
          <Input
            id="from_name"
            name="from_name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="from_email">Email</Label>
          <Input
            id="from_email"
            name="from_email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          required
        />
      </div>

      {/* Hidden fields for recipient info */}
      <input type="hidden" name="to_name" value="Titiksha" />
      <input type="hidden" name="to_email" value="titiksha2003dwivedi@gmail.com" />
      <input type="hidden" name="reply_to" value="" />
      
      <Button 
        type="submit" 
        variant="gradient" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      
      {debug && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
          <p className="font-semibold">Debug Information:</p>
          <p>{debug}</p>
          <p className="mt-2 text-xs">
            Please try the test page at <a href="/direct-email-test.html" target="_blank" className="underline">
              /direct-email-test.html
            </a> for more detailed troubleshooting.
          </p>
        </div>
      )}
    </form>
  );
}
