// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate from '../../app/components/mail/mail';
import ReactDOMServer from 'react-dom/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { name, email, message } = req.body;

            // Create email content
            const emailContent = EmailTemplate({ name, email, message });

            const emailHtmlContent = ReactDOMServer.renderToStaticMarkup(emailContent);

            // Send email using Resend
            const { data, error } = await resend.emails.send({
                from: 'Padhara Hitesh <padharahitesh007@gmail.com>', // Sender name and Gmail address
                to: email, // Recipient address
                subject: 'New Message from Portfolio Website',
                html: emailHtmlContent,
            });

            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                res.status(200).json({ message: 'Email sent successfully' });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
