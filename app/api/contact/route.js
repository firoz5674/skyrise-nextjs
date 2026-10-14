import nodemailer from "nodemailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })

const initialsOf = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("") || "?"

function buildHtml({ name, email, mobile, service, message }) {
  const safe = {
    name: escapeHtml(name || "Not provided"),
    email: escapeHtml(email),
    mobile: escapeHtml(mobile),
    service: escapeHtml(service || "Not specified"),
    message: escapeHtml(message || "No message provided."),
    initials: escapeHtml(initialsOf(name)),
  }
  const telHref = "tel:" + mobile.replace(/[^\d+]/g, "")
  const received = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  })

  const detailRow = (label, valueHtml, last = false) => `
    <tr>
      <td style="padding:14px 0;${last ? "" : "border-bottom:1px solid #e8eefc;"}">
        <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#7b8bb2;font-weight:700;margin-bottom:4px;">${label}</div>
        <div style="font-size:16px;color:#0f172a;font-weight:600;line-height:1.5;">${valueHtml}</div>
      </td>
    </tr>`

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
</head>
<body style="margin:0;padding:0;background:#eef3ff;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${safe.name} is interested in ${safe.service}. Reply quickly to win this lead.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef3ff;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 20px 50px rgba(37,99,235,0.18);">

          <!-- Header -->
          <tr>
            <td style="background:#0a0f24;background-image:linear-gradient(135deg,#0a0f24 0%,#1d4ed8 60%,#0ea5e9 100%);padding:36px 32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display:inline-block;background:rgba(255,255,255,0.16);color:#e0f2fe;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;padding:6px 14px;border-radius:999px;">
                      &#9679; New Lead
                    </span>
                  </td>
                  <td align="right" style="color:#bae6fd;font-size:12px;">${escapeHtml(received)}</td>
                </tr>
              </table>
              <h1 style="margin:22px 0 6px;color:#ffffff;font-size:28px;line-height:1.2;font-weight:800;">
                New enquiry from<br/>the Skyrise website
              </h1>
              <p style="margin:0;color:#bfdbfe;font-size:15px;">A potential client just reached out. Here are the details.</p>
            </td>
          </tr>

          <!-- Contact card -->
          <tr>
            <td style="padding:0 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:-22px;background:#ffffff;border:1px solid #dbe6ff;border-radius:18px;box-shadow:0 10px 30px rgba(37,99,235,0.12);">
                <tr>
                  <td style="padding:20px;" width="64" valign="middle">
                    <div style="width:56px;height:56px;border-radius:50%;background:#1d4ed8;background-image:linear-gradient(135deg,#2563eb,#0ea5e9);color:#ffffff;font-size:20px;font-weight:800;line-height:56px;text-align:center;">
                      ${safe.initials}
                    </div>
                  </td>
                  <td style="padding:20px 20px 20px 0;" valign="middle">
                    <div style="font-size:19px;font-weight:800;color:#0f172a;">${safe.name}</div>
                    <div style="font-size:13px;color:#64748b;margin-top:2px;">Interested in <span style="color:#1d4ed8;font-weight:700;">${safe.service}</span></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:12px 32px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${detailRow("Email", `<a href="mailto:${safe.email}" style="color:#1d4ed8;text-decoration:none;">${safe.email}</a>`)}
                ${detailRow("Mobile", `<a href="${escapeHtml(telHref)}" style="color:#1d4ed8;text-decoration:none;">${safe.mobile}</a>`)}
                ${detailRow("Service", safe.service, true)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:8px 32px 8px;">
              <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#7b8bb2;font-weight:700;margin-bottom:10px;">Message</div>
              <div style="background:#f5f8ff;border-left:4px solid #2563eb;border-radius:0 14px 14px 0;padding:16px 18px;font-size:15px;line-height:1.7;color:#1e293b;white-space:pre-wrap;">${safe.message}</div>
            </td>
          </tr>

          <!-- Buttons -->
          <tr>
            <td style="padding:24px 32px 34px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="${escapeHtml(telHref)}" style="display:inline-block;background:#1d4ed8;background-image:linear-gradient(135deg,#2563eb,#0ea5e9);color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 26px;border-radius:999px;">
                      &#9742;&nbsp; Call now
                    </a>
                  </td>
                  <td>
                    <a href="mailto:${safe.email}" style="display:inline-block;background:#ffffff;color:#1d4ed8;text-decoration:none;font-weight:700;font-size:15px;padding:12px 24px;border-radius:999px;border:2px solid #2563eb;">
                      &#9993;&nbsp; Reply
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0f24;padding:20px 32px;text-align:center;">
              <p style="margin:0;color:#93a4d4;font-size:12px;line-height:1.6;">
                Sent automatically from the contact form on your Skyrise website.<br/>
                Hit <strong style="color:#e0f2fe;">Reply</strong> to respond directly to the client.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(request) {
  let data
  try {
    data = await request.json()
  } catch {
    return json({ success: false, message: "Invalid request." }, 400)
  }

  // Honeypot: bots fill this field
  if (data.website) return json({ success: true })

  const name = String(data.name ?? "").trim().slice(0, 120)
  const email = String(data.email ?? "").trim().slice(0, 160)
  const mobile = String(data.mobile ?? "").trim().slice(0, 25)
  const service = String(data.service ?? "").trim().slice(0, 160)
  const message = String(data.message ?? "").trim().slice(0, 4000)

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return json({ success: false, message: "A valid email is required." }, 400)

  if (!mobile || mobile.replace(/\D/g, "").length < 10)
    return json(
      { success: false, message: "A valid mobile number is required." },
      400,
    )

  const user = (process.env.GMAIL_USER || "").trim()
  const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/[\s"']/g, "")

  if (!user || !pass) {
    console.error(
      "Contact form: GMAIL_USER or GMAIL_APP_PASSWORD is missing. Check .env.local and restart the server.",
    )
    return json(
      { success: false, message: "Email service is not configured." },
      500,
    )
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  })

  const plainText = [
    "NEW ENQUIRY FROM THE SKYRISE WEBSITE",
    "-------------------------------------",
    `Full name : ${name || "Not provided"}`,
    `Email     : ${email}`,
    `Mobile    : ${mobile}`,
    `Service   : ${service || "Not specified"}`,
    "",
    "Message:",
    message || "No message provided.",
  ].join("\n")

  try {
    await transporter.sendMail({
      from: `"Skyrise Website" <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || user,
      replyTo: email,
      subject: name
        ? `New enquiry from website ${name}`
        : "New enquiry from website",
      text: plainText,
      html: buildHtml({ name, email, mobile, service, message }),
    })

    return json({ success: true })
  } catch (error) {
    console.error("Contact email failed:", error?.code, error?.message)

    const isDev = process.env.NODE_ENV !== "production"
    return json(
      {
        success: false,
        message: isDev
          ? `Could not send: ${error?.message || "unknown error"}`
          : "Could not send your message. Please try again.",
      },
      500,
    )
  }
}