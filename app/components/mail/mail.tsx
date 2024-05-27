// components/WelcomeEmailTemplate.tsx

import React from 'react';

interface WelcomeEmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

const WelcomeEmailTemplate: React.FC<WelcomeEmailTemplateProps> = ({ name , email, message  }) => {
    return (
        <html>
            <head>
                <style>{`
                    body {
                        font-family: Arial, sans-serif;
                        color: #333;s
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #fff;
                        border-radius: 5px;
                        padding: 20px;
                        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p {
                        margin-bottom: 20px;
                    }
                `}</style>
            </head>
            <body>
                <div className="container">
                    <h1>Welcome to Our Community, {name}!</h1>
                    <p>Dear {name},</p>
                    <p>We're thrilled to have you join our community! 🎉</p>
                    <p>Here's what you can expect:</p>
                    <ul>
                        <li>Access to exclusive content and resources</li>
                        <li>Regular updates on our latest products and features</li>
                        <li>Engaging community events and discussions</li>
                    </ul>
                    <p>Feel free to explore our website and get involved. If you have any questions or need assistance, don't hesitate to reach out to us.</p>
                    <p>Once again, welcome aboard!</p>
                    <p>Best regards,</p>
                    <p>Hitesh Padhara</p>
                </div>
            </body>
        </html>
    );
};

export default WelcomeEmailTemplate;
