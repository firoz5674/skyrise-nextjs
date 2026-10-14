"use client";
import { useState } from "react"
import {
  LuArrowUpRight,
  LuCheck,
  LuHouse,
  LuLoaderCircle,
  LuMail,
  LuMapPin,
  LuPhone,
  LuSend,
  LuSmartphone,
} from "react-icons/lu"
import { contactInfo, services } from "../../data/content"
import Reveal from "../../components/ui/Reveal"

const MAP_QUERY = encodeURIComponent(
  "C 373 Ground Floor DDA Flats Jasola Vihar Sarita Vihar New Delhi 110025",
)
const serviceOptions = [...services.map((s) => s.title), "Something else"]

const initial = {
  name: "",
  email: "",
  mobile: "",
  service: "",
  message: "",
  website: "",
}

const fieldBase =
  "peer w-full rounded-2xl border bg-page/60 px-4 pb-2.5 pt-6 text-[15px] text-ink outline-none transition-all duration-300 placeholder-transparent focus:border-brand focus:bg-surface focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)]"
const labelBase =
  "pointer-events-none absolute left-4 top-4 origin-left text-[15px] text-soft transition-all duration-200 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75"

function Field({ label, required, error, children }) {
  return (
    <div>
      <div className="relative">
        {children}
        <label className={labelBase}>
          {label}
          {required && <span className="text-brand"> *</span>}
        </label>
      </div>
      {error && (
        <p role="alert" className="mt-1.5 pl-1 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

function InfoRow({ icon: Icon, children }) {
  return (
    <div className="group flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-sky-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-[#0a1230]">
        <Icon className="size-5" />
      </span>
      <div className="pt-2.5 text-[17px] leading-relaxed text-white/85">
        {children}
      </div>
    </div>
  )
}

export default function ContactMain() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [serverError, setServerError] = useState("")

  const set = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((x) => ({ ...x, [name]: "" }))
  }

  const validate = () => {
    const e = {}
    if (!values.email.trim()) e.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = "Enter a valid email address."
    if (!values.mobile.trim()) e.mobile = "Mobile number is required."
    else if (values.mobile.replace(/\D/g, "").length < 10)
      e.mobile = "Enter a valid 10-digit mobile number."
    return e
  }

  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setStatus("submitting")
    setServerError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success)
        throw new Error(data.message || "Something went wrong.")
      setStatus("success")
      setValues(initial)
    } catch (err) {
      setServerError(err.message || "Something went wrong.")
      setStatus("error")
    }
  }

  const submitting = status === "submitting"

  return (
    <main className="relative overflow-hidden pt-28 lg:pt-36">
      <div
        aria-hidden
        className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[900px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[520px] animate-beam rounded-full bg-sky-400/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[520px] size-[480px] animate-beam rounded-full bg-blue-600/20 blur-[120px]"
      />

      <section className="container-page relative mb-12">
        <Reveal className="max-w-7xl">
          <p className="eyebrow mb-4">Contact Skyrise</p>
          <h1 className="text-gradient text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.02] font-extrabold">
            Let&apos;s build something remarkable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            Tell us about your plot, home, office or tensile structure. Our team
            will call you back soon to plan a free site visit.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="h-full">
            <aside className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0a0f24] p-8 text-white shadow-[0_30px_80px_-30px_rgba(29,78,216,0.7)] sm:p-10">
              <div
                aria-hidden
                className="absolute -bottom-24 -right-20 size-80 animate-beam rounded-full bg-[radial-gradient(circle,#22d3ee,#2563eb_45%,transparent_70%)] opacity-70 blur-2xl"
              />
              <div
                aria-hidden
                className="blueprint-grid absolute inset-0 opacity-40"
              />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold">
                  Talk to us directly
                </h2>
                <p className="mt-2 text-white/60">
                  Mon – Sat, we are happy to answer your questions.
                </p>
                <div className="mt-9 flex flex-col gap-6">
                  {contactInfo.phones.map((p) => (
                    <InfoRow key={p.href} icon={LuSmartphone}>
                      <a
                        href={p.href}
                        className="transition-colors hover:text-sky-300"
                      >
                        {p.label}
                      </a>
                    </InfoRow>
                  ))}
                  <InfoRow icon={LuMail}>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="break-all transition-colors hover:text-sky-300"
                    >
                      {contactInfo.email}
                    </a>
                  </InfoRow>
                  <InfoRow icon={LuHouse}>{contactInfo.address}</InfoRow>
                </div>
              </div>
              <a
                href={`tel:${contactInfo.phones[0].href.slice(4)}`}
                className="group relative mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white/10 py-1.5 pl-6 pr-1.5 font-semibold backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0a1230]"
              >
                Call now
                <span className="grid size-10 place-items-center rounded-full bg-brand-gradient text-white">
                  <LuPhone className="size-4" />
                </span>
              </a>
            </aside>
          </Reveal>

          <Reveal delay={120} className="h-full">
            <div className="relative h-full rounded-[2rem] border border-line bg-surface p-6 shadow-[0_30px_80px_-40px_rgba(37,99,235,0.45)] transition-colors duration-500 sm:p-10">
              {status === "success" ? (
                <div
                  role="status"
                  className="flex min-h-[460px] animate-fade-up flex-col items-center justify-center text-center"
                >
                  <span className="grid size-20 place-items-center rounded-full bg-brand-gradient text-white shadow-[0_14px_40px_-8px_rgba(14,165,233,0.8)]">
                    <LuCheck className="size-10" />
                  </span>
                  <h2 className="mt-7 font-display text-3xl font-bold text-ink">
                    Thank you, message sent!
                  </h2>
                  <p className="mt-3 max-w-md text-soft">
                    We have received your enquiry. Our team will contact you
                    shortly to plan your free site visit.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-line px-6 py-2.5 font-semibold text-ink transition-colors hover:bg-surface-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate className="grid gap-5">
                  <div>
                    <h2 className="font-display text-3xl font-bold text-ink">
                      Send us a message
                    </h2>
                    <p className="mt-2 text-soft">
                      Fields marked <span className="text-brand">*</span> are
                      required.
                    </p>
                  </div>

                  <input
                    type="text"
                    name="website"
                    value={values.website}
                    onChange={set}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />

                  <Field label="Full name">
                    <input
                      name="name"
                      value={values.name}
                      onChange={set}
                      placeholder="Full name"
                      autoComplete="name"
                      className={`${fieldBase} border-line`}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={set}
                        placeholder="Email"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        className={`${fieldBase} ${errors.email ? "border-red-500" : "border-line"}`}
                      />
                    </Field>
                    <Field label="Mobile" required error={errors.mobile}>
                      <input
                        type="tel"
                        name="mobile"
                        value={values.mobile}
                        onChange={set}
                        placeholder="Mobile"
                        autoComplete="tel"
                        aria-invalid={!!errors.mobile}
                        className={`${fieldBase} ${errors.mobile ? "border-red-500" : "border-line"}`}
                      />
                    </Field>
                  </div>

                  <div className="relative">
                    <select
                      name="service"
                      value={values.service}
                      onChange={set}
                      className={`${fieldBase} border-line appearance-none pr-10`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute left-4 top-2 origin-left scale-75 text-[15px] text-soft">
                      Select services
                    </span>
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-soft"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m5 8 5 5 5-5" strokeLinecap="round" />
                    </svg>
                  </div>

                  <Field label="Tell us about your project">
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={set}
                      rows={5}
                      placeholder="Message"
                      className={`${fieldBase} border-line resize-none`}
                    />
                  </Field>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-500"
                    >
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-gradient py-4 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-6px_rgba(14,165,233,0.75)] disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0 sm:w-fit sm:px-12"
                  >
                    {submitting ? (
                      <>
                        <LuLoaderCircle className="size-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send message
                        <LuSend className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page relative pb-16 pt-6 lg:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-2 shadow-[0_30px_80px_-40px_rgba(37,99,235,0.45)] transition-colors duration-500">
            <iframe
              title="Skyrise office location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53299.627816641085!2d77.21486614863281!3d28.550747000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce408a34923cd%3A0x19f7ba48a2bc419d!2sSkyrise%20construction%20%26%20Interiors!5e1!3m2!1sen!2sin!4v1791976913140!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[380px] w-full rounded-[1.6rem] border-0 dark:[filter:invert(90%)_hue-rotate(180deg)_saturate(0.8)] lg:h-[480px]"
            />



            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4 max-sm:inset-x-4 max-sm:bottom-4">
              <div className="pointer-events-auto flex max-w-sm items-start gap-3 rounded-2xl border border-line bg-glass p-4 backdrop-blur-xl">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                  <LuMapPin className="size-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-ink">
                    Visit our office
                  </p>
                  <p className="text-sm leading-snug text-soft">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5"
              >
                Get directions <LuArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
