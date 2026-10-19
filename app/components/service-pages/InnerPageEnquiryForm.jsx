"use client"

import { useState } from "react"
import { LuArrowRight, LuCheck } from "react-icons/lu"

const emptyForm = {
  name: "",
  email: "",
  mobile: "",
  structureType: "",
  area: "",
  message: "",
  website: "",
}

const inputClass = "w-full rounded-xl text-md border border-line bg-page px-4 py-3 font-normal text-ink outline-none transition-colors focus:border-brand"

export default function InnerPageEnquiryForm({
  title = "Request a free site visit",
  description = "Share a few details and our team will contact you.",
  submitLabel = "Request Free Site Visit",
  categoryLabel = "Structure type",
  categoryPlaceholder = "Select a service",
  categories = [],
  messagePlaceholder = "Tell us a little about your project",
}) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")
  const [requestError, setRequestError] = useState("")

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: "" }))
  }

  async function submit(event) {
    event.preventDefault()
    const nextErrors = {
      name: form.name.trim() ? "" : "Please enter your name.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) ? "" : "Please enter a valid email address.",
      mobile: !form.mobile.trim()
        ? "Please enter your phone number."
        : form.mobile.replace(/\D/g, "").length < 10
          ? "Please enter a valid phone number."
          : "",
      message: form.message.trim() ? "" : "Please enter your message.",
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setStatus("sending")
    setRequestError("")
    try {
      const response = await fetch("/api/inner-pages-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.message || "We could not send your request. Please try again.")
      }
      setForm(emptyForm)
      setErrors({})
      setStatus("success")
    } catch (error) {
      setRequestError(error.message)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
        <span className="grid size-11 place-items-center rounded-full bg-emerald-500 text-white">
          <LuCheck className="size-6" />
        </span>
        <p className="mt-4 font-display text-xl font-bold">Thank you. Your request is sent.</p>
        <p className="mt-2 text-soft">Our team will contact you soon.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 inline-flex rounded-full bg-brand-gradient px-5 py-3 font-semibold text-white">
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <>
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-soft">{description}</p>
      <form noValidate onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <input name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
        <Field label="Name" error={errors.name}>
          <input name="name" value={form.name} onChange={update} autoComplete="name" required className={inputClass} placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" name="email" value={form.email} onChange={update} autoComplete="email" required className={inputClass} placeholder="you@example.com" />
        </Field>
        <Field label="Phone" error={errors.mobile}>
          <input type="tel" name="mobile" value={form.mobile} onChange={update} autoComplete="tel" inputMode="tel" required className={inputClass} placeholder="Your phone number" />
        </Field>
        <Field label={categoryLabel}>
          <select name="structureType" value={form.structureType} onChange={update} className={inputClass}>
            <option value="">{categoryPlaceholder}</option>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </Field>
        <Field label="Approx. area in sq ft" className="sm:col-span-2">
          <input inputMode="numeric" name="area" value={form.area} onChange={update} className={inputClass} placeholder="Approximate area" />
        </Field>
        <Field label="Message" error={errors.message} className="sm:col-span-2">
          <textarea name="message" rows={3} value={form.message} onChange={update} required className={`${inputClass} resize-y`} placeholder={messagePlaceholder} />
        </Field>
        {requestError && <p role="alert" className="font-medium text-red-600 sm:col-span-2">{requestError}</p>}
        <button type="submit" disabled={status === "sending"} className="flex items-center justify-center rounded-xl bg-brand-gradient px-5 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 sm:col-span-2">
          {status === "sending" ? "Sending request…" : submitLabel}
          <LuArrowRight className="ml-2 text-xl" />
        </button>
      </form>
    </>
  )
}

function Field({ label, error, className = "", children }) {
  return (
    <label className={`grid gap-1.5 text-sm font-semibold ${className}`}>
      {label}
      {children}
      {error && <span role="alert" className="text-sm font-medium text-red-600">{error}</span>}
    </label>
  )
}
