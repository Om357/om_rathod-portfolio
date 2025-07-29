// api/send.ts
// IMPORTANT: This file must be in the ROOT `/api` folder, not in `/src/pages/api`

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Your API key is read from the Vercel environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // Get the data from the form submission
  const { name, email, subject, message } = request.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return response.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['om.rathod2004.or@gmail.com'], // This is YOUR email address
      subject: `New Portfolio Message: ${subject}`,
      replyTo: email, // This allows you to directly reply to the person who contacted you
      html: `
        <h1>New Message from your Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Handle any errors from the Resend API
    if (error) {
      console.error({ error });
      return response.status(500).json({ message: 'Error sending email.', details: error.message });
    }

    // Success!
    return response.status(200).json({ message: 'Email sent successfully!' });

  } catch (exception) {
    console.error(exception);
    return response.status(500).json({ message: 'An unexpected server error occurred.' });
  }
}