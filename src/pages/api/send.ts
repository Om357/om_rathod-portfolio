// src/pages/api/send.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // This is a required field by Resend, can be this default.
      to: ['om.rathod2004.or@gmail.com'], // YOUR email address here.
      subject: `New Portfolio Message: ${subject}`,
      replyTo: email, // Set the sender's email as the reply-to address
      html: `
        <h1>New Message from your Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(500).json({ message: 'Error sending email.', error: error.message });
    }

    return res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (exception) {
    console.error(exception);
    return res.status(500).json({ message: 'An unexpected error occurred.', error: (exception as Error).message });
  }
}