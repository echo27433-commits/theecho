import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would configure these environment variables
    // For now, we will create a mock transporter or use a test account if env vars are missing
    // User needs to add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to their .env file
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || "test_user",
        pass: process.env.SMTP_PASS || "test_pass",
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || "hello@theecho.global",
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // If env vars are not set, just log and return success to not block UI testing
    if (!process.env.SMTP_HOST) {
      console.log("No SMTP_HOST found. Mocking email sending.", mailOptions);
      return NextResponse.json({ success: true, mocked: true });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message", details: error.message },
      { status: 500 }
    );
  }
}
