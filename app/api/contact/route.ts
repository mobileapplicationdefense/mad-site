import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails/ContactEmailTemplate";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, company, title, phone, message, requestQuote } = body;
  try {
    await resend.emails.send({
      from: "suporte@mobileappdefense.com",
      to: "suporte@mobileappdefense.com",
      subject: "MAD Contact - Site",
      react: ContactEmailTemplate({
        name: name,
        email: email,
        company: company,
        title: title,
        phone: phone,
        message: message,
        requestQuote: requestQuote,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process the form submission",
      },
      { status: 500 }
    );
  }
}
