import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  grade?: string;
  message?: string;
  company?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  console.log("[Contact] New tutoring inquiry", {
    name,
    email,
    phone,
    grade,
    message,
    submittedAt: new Date().toISOString()
  });

  return NextResponse.json({ success: true, message: "Thanks! We will reach out shortly." });
}
