import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  grade?: string;
  message?: string;
  company?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const grade = body.grade?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const company = body.company?.trim() ?? "";

  // Honeypot field should remain empty for real users.
  if (company.length > 0) {
    return NextResponse.json({ success: true, message: "Thanks! We will reach out shortly." });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ success: false, error: "Please enter a valid email." }, { status: 400 });
  }

  if (message.length < 20) {
    return NextResponse.json(
      { success: false, error: "Message must be at least 20 characters." },
      { status: 400 }
    );
  }

  const transporter = getTransporter();
  const toEmail = process.env.CONTACT_TO ?? "msttutorsofficial@gmail.com";
  const fromEmail = process.env.CONTACT_FROM ?? process.env.SMTP_USER;
  const submittedAt = new Date().toISOString();

  if (!transporter || !fromEmail) {
    console.warn("[Contact] SMTP not configured. Logging inquiry only.", {
      name,
      email,
      phone,
      grade,
      message,
      submittedAt
    });
    return NextResponse.json({
      success: true,
      message: "Thanks! Your message was received. We will reach out shortly."
    });
  }

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New tutoring inquiry from ${name}`,
      text: [
        "New tutoring inquiry",
        `Submitted At: ${submittedAt}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Student Grade: ${grade || "Not provided"}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <h2>New tutoring inquiry</h2>
        <p><strong>Submitted At:</strong> ${submittedAt}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Student Grade:</strong> ${grade || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `
    });
  } catch (error) {
    console.error("[Contact] Failed to send inquiry email", error);
    console.warn("[Contact] Falling back to logged inquiry.", {
      name,
      email,
      phone,
      grade,
      message,
      submittedAt
    });
    return NextResponse.json({
      success: true,
      message: "Thanks! Your message was received. We will reach out shortly."
    });
  }

  return NextResponse.json({ success: true, message: "Thanks! We will reach out shortly." });
}
