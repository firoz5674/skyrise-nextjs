
// /app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      service = "",
      message = ""
    } = body;

    // Basic validation (server-side)
    if (!firstName || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Skyrise Construction" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Enquiry from Skyrise Website: ${firstName} ${lastName} (${phone})`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
          <h2 style="color: #333; text-align: center;">New Contact Form Submission</h2>
          <p style="text-align: center; color: #555;">You’ve received a new inquiry from your website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background: #fff; border-radius: 8px; overflow: hidden;">
            <thead>
              <tr style="background-color: #0e75bc; color: #ffffff; text-align: left;">
                <th style="padding: 12px;">Field</th>
                <th style="padding: 12px;">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px 12px; font-weight: bold;">Name</td>
                <td style="padding: 10px 12px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold;">Email</td>
                <td style="padding: 10px 12px;">${email}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px 12px; font-weight: bold;">Phone</td>
                <td style="padding: 10px 12px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold;">Service</td>
                <td style="padding: 10px 12px;">${service || "Not specified"}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px 12px; font-weight: bold;">Message</td>
                <td style="padding: 10px 12px;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </tbody>
          </table>

          <p style="font-size: 13px; color: #888; text-align: center; margin-top: 25px;">
            — This message was sent from the contact form on 
            <strong>Skyrise Construction</strong> website.
          </p>
        </div>
      `,
    };

    // sendMail returns info — await it
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent", info?.messageId ?? info);

    return new Response(JSON.stringify({ success: true, messageId: info?.messageId }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("Error in /api/send-email:", err);
    // Return JSON error so client doesn't hang on response.json()
    return new Response(JSON.stringify({ error: "Server error", details: err?.message ?? null }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}




