import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function (req: any, res: any) {
  const { subject, email, message } = req.body;
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
      <strong>${subject}</strong>
      <strong>${email}</strong>
      <strong>${message}</strong>
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
