import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function (req: any, res: any) {
  const { subject, email, message, name } = req.body;
  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  const msg = {
    to: email,
    cc: process.env.NEXT_PUBLIC_FROM_EMAIL as string,
    from: process.env.NEXT_PUBLIC_FROM_EMAIL as string,
    subject: 'The CRIB Contact Form',
    text: 'New Message from the TheCrib.Network',
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>The CRIB Contact Form</title>
        <style>
        /* Reset styles to ensure consistent rendering across email clients */
        body,
        html {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          line-height: 1;
        }
  
        /* Set the width of the email to be the maximum width */
        body {
          max-width: 600px;
          margin: 0 auto;
        }
  
        /* Center the image in the header */
        .header img {
          display: block;
          margin: 0 auto;
        }
  
        /* Style the footer */
        .footer {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
          color: #666;
        }
  
        .footer a {
          color: #666;
          text-decoration: none;
        }
  
        /* Style the content of the email */
        .content {
          padding: 1rem;
          background-color: #f5f5f5;
        }
  
        .content h1 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }
  
        .content p {
          margin: 0;
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.5;
          color: #666;
        }
      </style>
      </head>
      <body>
        <div class="header">
          <img src="https://i.imgur.com/zSDBgrb.png" alt="Logo" width="300" height="150" />
        </div>
        <div class="content">
          <h1>New Message from the TheCrib.Network Contact Form</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong>${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
        <div class="footer">
          <p>&copy; 2023 The CRIB. All rights reserved.</p>
          <p><a href="https://thecrib.network/">thecrib.network</a></p>
        </div>
      </body>
    </html>
    
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
