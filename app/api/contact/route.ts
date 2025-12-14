import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "../../../components/EmailTemplate";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(100),
  message: z.string().min(1).max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, message } = contactSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: email,
      to: ["tanmaypach15@gmail.com"],
      subject: "Portfolio message",
      react: EmailTemplate({ name, message }),
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (_error) {
    console.error("Error processing contact form");
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
