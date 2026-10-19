import { LuCheck, LuMapPin, LuPhone, LuMail } from "react-icons/lu"

export default function InnerPageEnquiryIntro({ eyebrow, title, description }) {
  return (
    <div className="relative flex flex-col justify-center">
      <p className="eyebrow inline-flex items-center gap-2 !text-sky-300">
        <span aria-hidden="true" className="size-2 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(56,189,248,.9)]" />
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.5vw,3.7rem)] font-extrabold leading-[1.23] tracking-relaxed text-white">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-md leading-relaxed text-white/75">
        {description}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <a href="tel:+919312148849" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 transition-colors hover:border-sky-300/40 hover:bg-white/[.1]">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-300/10 text-sky-300"><LuPhone className="size-5" /></span>
          <span><span className="block text-xs font-semibold uppercase tracking-wider text-white/50">Call our team</span><span className="mt-1 block font-semibold text-white">93121 48849</span></span>
        </a>
        <a href="mailto:skyrise30@gmail.com" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 transition-colors hover:border-sky-300/40 hover:bg-white/[.1]">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-300/10 text-sky-300"><LuMail className="size-5" /></span>
          <span className="min-w-0"><span className="block text-xs font-semibold uppercase tracking-wider text-white/50">Email us</span><span className="mt-1 block truncate font-semibold text-white">skyrise30@gmail.com</span></span>
        </a>
      </div>

      <div className="mt-3 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-300/10 text-sky-300"><LuMapPin className="size-5" /></span>
        <div><p className="text-xs font-semibold uppercase tracking-wider text-white/50">Visit our office</p><p className="mt-1 text-md leading-relaxed text-white/80">C 373 Ground Floor, DDA Flats, Jasola Vihar, Sarita Vihar, New Delhi 110025</p></div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-white/65">
        <span className="inline-flex items-center gap-2"><LuCheck className="size-4 text-sky-300" />Free site visit</span>
        <span className="inline-flex items-center gap-2"><LuCheck className="size-4 text-sky-300" />Clear project quote</span>
        <span className="inline-flex items-center gap-2"><LuCheck className="size-4 text-sky-300" />Delhi NCR service</span>
      </div>
    </div>
  )
}
