import nodemailer from "nodemailer"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json" },
})

const clean = (value, max) => String(value ?? "").trim().slice(0, max)
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character])

function buildHtml({ name, mobile, city, structureType, area, message }) {
  const safe = Object.fromEntries(Object.entries({ name, mobile, city, structureType, area, message }).map(([key, value]) => [key, escapeHtml(value)]))
  const initials = escapeHtml(name.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0].toUpperCase()).join("") || "?")
  const telHref = `tel:${mobile.replace(/[^\d+]/g, "")}`
  const received = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" })
  const detailRow = (label, value, last = false) => `<tr><td style="padding:14px 0;${last ? "" : "border-bottom:1px solid #e8eefc;"}"><div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#7b8bb2;font-weight:700;margin-bottom:4px">${label}</div><div style="font-size:16px;color:#0f172a;font-weight:600;line-height:1.5">${value}</div></td></tr>`

  return `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head><body style="margin:0;padding:0;background:#eef3ff;font-family:'Segoe UI',Helvetica,Arial,sans-serif"><div style="display:none;max-height:0;overflow:hidden;opacity:0">${safe.name} requested a site visit in ${safe.city}.</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef3ff;padding:32px 12px"><tr><td align="center"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 20px 50px rgba(37,99,235,.18)">
    <tr><td style="background:#0a0f24;background-image:linear-gradient(135deg,#0a0f24 0%,#1d4ed8 60%,#0ea5e9 100%);padding:36px 32px 40px"><table role="presentation" width="100%"><tr><td><span style="display:inline-block;background:rgba(255,255,255,.16);color:#e0f2fe;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;padding:6px 14px;border-radius:999px">&#9679; New Lead</span></td><td align="right" style="color:#bae6fd;font-size:12px">${escapeHtml(received)}</td></tr></table><h1 style="margin:22px 0 6px;color:#fff;font-size:28px;line-height:1.2;font-weight:800">New enquiry from<br/>the Skyrise website</h1><p style="margin:0;color:#bfdbfe;font-size:15px">A potential client just requested a site visit.</p></td></tr>
    <tr><td style="padding:0 28px"><table role="presentation" width="100%" style="margin-top:-22px;background:#fff;border:1px solid #dbe6ff;border-radius:18px;box-shadow:0 10px 30px rgba(37,99,235,.12)"><tr><td style="padding:20px" width="64"><div style="width:56px;height:56px;border-radius:50%;background:#2563eb;background-image:linear-gradient(135deg,#2563eb,#0ea5e9);color:#fff;font-size:20px;font-weight:800;line-height:56px;text-align:center">${initials}</div></td><td style="padding:20px 20px 20px 0"><div style="font-size:19px;font-weight:800;color:#0f172a">${safe.name}</div><div style="font-size:13px;color:#64748b;margin-top:2px">Interested in <span style="color:#1d4ed8;font-weight:700">${safe.structureType}</span></div></td></tr></table></td></tr>
    <tr><td style="padding:12px 32px 4px"><table role="presentation" width="100%">${detailRow("Mobile", `<a href="${escapeHtml(telHref)}" style="color:#1d4ed8;text-decoration:none">${safe.mobile}</a>`)}${detailRow("City", safe.city)}${detailRow("Approx. area", `${safe.area} sq ft`, true)}</table></td></tr>
    <tr><td style="padding:8px 32px 24px"><div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#7b8bb2;font-weight:700;margin-bottom:10px">Message</div><div style="background:#f5f8ff;border-left:4px solid #2563eb;border-radius:0 14px 14px 0;padding:16px 18px;font-size:15px;line-height:1.7;color:#1e293b;white-space:pre-wrap">${safe.message}</div></td></tr>
    <tr><td style="padding:0 32px 34px"><a href="${escapeHtml(telHref)}" style="display:inline-block;background:#1d4ed8;background-image:linear-gradient(135deg,#2563eb,#0ea5e9);color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 26px;border-radius:999px">&#9742;&nbsp; Call now</a></td></tr><tr><td style="background:#0a0f24;padding:20px 32px;text-align:center"><p style="margin:0;color:#93a4d4;font-size:12px;line-height:1.6">Sent automatically from an inner page enquiry form on your Skyrise website.</p></td></tr>
  </table></td></tr></table></body></html>`
}

export async function POST(request) {
  let data
  try {
    data = await request.json()
  } catch {
    return json({ success: false, message: "Invalid request." }, 400)
  }

  if (data?.website) return json({ success: true })

  const name = clean(data.name, 120)
  const mobile = clean(data.mobile, 25)
  const city = clean(data.city, 100)
  const structureType = clean(data.structureType, 160) || "Not specified"
  const area = clean(data.area, 40) || "Not specified"
  const message = clean(data.message, 3000) || "No message provided."
  if (!name || !city || !mobile || mobile.replace(/\D/g, "").length < 10) {
    return json({ success: false, message: "Enter your name, city and a valid phone number." }, 400)
  }

  const user = (process.env.GMAIL_USER || "").trim()
  const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/[\s"']/g, "")
  if (!user || !pass) {
    console.error("Inner page enquiry: GMAIL_USER or GMAIL_APP_PASSWORD is missing.")
    return json({ success: false, message: "The enquiry form is temporarily unavailable. Please call us instead." }, 500)
  }

  const text = ["NEW ENQUIRY FROM AN INNER PAGE", `Name: ${name}`, `Phone: ${mobile}`, `City: ${city}`, `Structure: ${structureType}`, `Approx. area: ${area} sq ft`, "", "Message:", message].join("\n")
  try {
    const transporter = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user, pass } })
    await transporter.sendMail({
      from: `"Skyrise Website" <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || user,
      subject: "Skyrise website enquiry from inner page",
      text,
      html: buildHtml({ name, mobile, city, structureType, area, message }),
    })
    return json({ success: true })
  } catch (error) {
    console.error("Inner page enquiry email failed:", error?.code, error?.message)
    return json({ success: false, message: "Could not send your request. Please call us instead." }, 500)
  }
}
