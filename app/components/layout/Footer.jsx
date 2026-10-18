"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { LuArrowRight, LuArrowUp, LuMail, LuMapPin, LuPhone } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa"
import { heroContent, serviceAreas, serviceMenuGroups } from "../../data/content"

const exploreLinks = [
  ["Home", "/"],
  ["About Skyrise", "/about"],
  ["Projects", "/projects"],
  ["Blogs", "/blogs"],
  ["Contact", "/contact"],
]

const contactItems = [
  { icon: LuPhone, label: "Call our team", value: "+91 93121 48849", href: "tel:+919312148849" },
  { icon: LuMail, label: "Email us", value: "skyrise30@gmail.com", href: "mailto:skyrise30@gmail.com" },
  { icon: LuMapPin, label: "Visit our office", value: "Jasola Vihar, New Delhi 110025", href: "https://maps.google.com/?q=C+373+DDA+Flats+Jasola+Vihar+Sarita+Vihar+New+Delhi+110025" },
]

function FloatActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <div role="group" aria-label="Quick actions" className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-7 sm:right-6">
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className={`grid size-12 place-items-center rounded-full border-2 border-brand bg-surface text-ink shadow-[0_8px_25px_-12px_rgba(10,18,48,.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`} tabIndex={showTop ? 0 : -1}>
      <LuArrowUp className="size-5" />
    </button>
    <a href="https://wa.me/919312148849?text=Hi%20Skyrise%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat with Skyrise on WhatsApp" className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,.85)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30">
      <FaWhatsapp className="size-7" />
    </a>
  </div>
}

export default function Footer() {
  return <>
    <footer id="contact" className="relative overflow-hidden border-t border-line bg-surface transition-colors duration-500">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,.08),transparent_60%)]" />
      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <a href="/" aria-label="Skyrise Construction and Interiors home" className="inline-flex rounded-2xl bg-white p-2 shadow-sm ring-1 ring-line transition-transform hover:-translate-y-0.5">
              <Image src="/skyrise-logo.webp" width={180} height={58} alt="Skyrise Construction & Interiors" className="h-auto w-[150px] sm:w-[180px]" />
            </a>
            <p className="mt-5 max-w-xl leading-relaxed text-soft">{heroContent.text}</p>
            <a href="/about" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-brand-deep">More about Skyrise <LuArrowRight className="transition-transform group-hover:translate-x-1" /></a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {contactItems.map(({ icon: Icon, label, value, href }) => <a key={label} href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined} className="group flex min-h-[104px] items-center gap-4 rounded-2xl border border-line bg-surface-2/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_-28px_rgba(37,99,235,.7)] sm:flex-col sm:items-start sm:justify-center sm:gap-3 sm:p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-blue-500/20"><Icon className="size-5" /></span>
              <span className="min-w-0"><span className="block text-[11px] font-bold uppercase tracking-[.16em] text-soft">{label}</span><span className="mt-1 block break-words text-sm font-semibold leading-snug text-ink group-hover:text-brand">{value}</span></span>
            </a>)}
          </div>
        </div>

        <div className="my-10 border-t border-line sm:my-12" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[.75fr_1.7fr_1fr] lg:gap-12">
          <nav aria-label="Explore Skyrise">
            <h2 className="font-display text-xl font-bold text-ink">Explore</h2>
            <ul className="mt-4 space-y-3">{exploreLinks.map(([label, href]) => <li key={href}><a href={href} className="text-md leading-relaxed text-soft transition-colors hover:text-brand">{label}</a></li>)}</ul>
          </nav>

          <nav aria-label="Our services">
            <h2 className="font-display text-xl font-bold text-ink">Services</h2>
            <div className="mt-4 grid gap-x-7 gap-y-7 sm:grid-cols-2">
              {serviceMenuGroups.map((group) => <section key={group.title}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-[.12em] text-brand">{group.title}</h3>
                <ul className="space-y-2.5">{group.items.map(([label, href]) => <li key={href}><a href={href} className="text-md leading-relaxed text-soft transition-colors hover:text-brand">{label}</a></li>)}</ul>
              </section>)}
            </div>
          </nav>

          <div>
            <h2 className="font-display text-base font-bold text-ink">Let’s build together</h2>
            <p className="mt-3 font-display text-2xl font-bold leading-tight text-ink">Have a space in mind?</p>
            <p className="mt-3 text-md leading-relaxed text-soft">Talk with our team about your construction, interior or tensile structure project.</p>
            <a href="/contact" className="group mt-5 inline-flex items-center gap-4 rounded-full bg-brand-gradient py-2 pl-5 pr-2 text-sm font-bold text-white shadow-[0_14px_30px_-16px_rgba(37,99,235,.85)] transition-transform hover:-translate-y-0.5">
              Book a free site visit<span className="grid size-9 place-items-center rounded-full bg-white text-brand"><LuArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></span>
            </a>
            <div className="mt-7">
              <h3 className="text-sm font-bold uppercase tracking-[.12em] text-soft">Areas we serve</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{serviceAreas.map((area) => <li key={area}><a href={`/areas/${area.toLowerCase().startsWith("gurugram") ? "gurugram" : area.toLowerCase()}`} className="inline-flex rounded-full border border-line px-3 py-1.5 text-sm font-medium text-soft transition-colors hover:border-brand/40 hover:text-brand">{area}</a></li>)}</ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-md text-soft sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Skyrise Construction & Interiors. Registered in Delhi.</p>
          <a href="/sitemap.xml" className="w-fit transition-colors hover:text-brand">Sitemap</a>
        </div>
      </div>
    </footer>
    <FloatActions />
  </>
}
