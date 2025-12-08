import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="margin-bottom: 10px;">New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <h3 style="margin-top: 20px;">Message:</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">
          ${message}
        </p>

        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />

        <p style="font-size: 12px; color: #888;">
          This message was sent from the contact form on your website.
        </p>
      </div>
    `;

    const sent = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.MAIL_TO,
      subject: subject + " | Portfolio Contact",
      html: html,
    });

  return new Response(JSON.stringify({success: true, id: sent.id}), {status:200});

  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again later." }),
      { status: 500 }
    );
  }
}
