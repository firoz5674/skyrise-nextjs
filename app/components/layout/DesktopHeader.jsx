"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  LuArrowRight,
  LuBuilding2,
  LuCarFront,
  LuChevronDown,
  LuHammer,
  LuLayers3,
  LuMapPin,
  LuPaintbrush,
  LuRuler,
  LuSofa,
  LuTentTree,
  LuWarehouse,
  LuArmchair,
  LuBriefcaseBusiness,
  LuPhone,
} from "react-icons/lu"
import { navLinks, serviceAreas, serviceMenuGroups } from "../../data/content"
import { images } from "../../data/images"
import AccentButton from "../ui/AccentButton"
import ThemeToggle from "../ui/ThemeToggle"

const menuIcons = {
  building: LuBuilding2,
  ruler: LuRuler,
  hammer: LuHammer,
  sofa: LuSofa,
  office: LuBriefcaseBusiness,
  chair: LuArmchair,
  tent: LuTentTree,
  car: LuCarFront,
  container: LuWarehouse,
  blocks: LuLayers3,
  warehouse: LuWarehouse,
  layers: LuLayers3,
  interior: LuPaintbrush,
  tensile: LuTentTree,
  prefab: LuLayers3,
}

export default function DesktopHeader() {
  const [activeMenu, setActiveMenu] = useState(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveMenu(null)
    }
    const closeOnOutsideClick = (event) => {
      if (!event.target.closest("[data-navigation]")) setActiveMenu(null)
    }
    document.addEventListener("keydown", closeOnEscape)
    document.addEventListener("click", closeOnOutsideClick)
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.removeEventListener("click", closeOnOutsideClick)
    }
  }, [])

  const toggle = (menu) => setActiveMenu((current) => (current === menu ? null : menu))

  return (
    <header data-navigation className="fixed inset-x-0 top-3 z-50 hidden px-6 lg:block">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between rounded-3xl border border-line bg-glass px-6 shadow-[0_10px_40px_-18px_rgba(10,18,48,0.35)] backdrop-blur-xl transition-colors duration-500">
        <a href="/" className="flex shrink-0 items-center" aria-label="Skyrise home">
          <Image src="/skyrise-logo.webp" width={150} height={58} alt="Skyrise Logo" />
        </a>

        <nav aria-label="Primary" className="flex items-center gap-0.5">
          {navLinks.filter((link) => !link.button).map((link) => {
            if (!link.menu) {
              return <a key={link.label} href={link.href} onMouseEnter={() => setActiveMenu(null)} className="rounded-full px-3 py-2 text-[15px] font-semibold text-ink transition-colors hover:bg-surface-2 xl:px-3.5 xl:text-base">{link.label}</a>
            }

            const isOpen = activeMenu === link.menu
            return <div key={link.label} className="relative">
              <button type="button" aria-expanded={isOpen} onClick={() => toggle(link.menu)} onMouseEnter={() => setActiveMenu(link.menu)} className={`flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-semibold transition-colors hover:bg-surface-2 hover:text-ink xl:px-3.5 xl:text-base ${isOpen ? "bg-surface-2 text-ink" : "text-ink"}`}>
                {link.label}<LuChevronDown className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {link.menu === "areas" && <div className={`absolute left-0 top-full z-20 pt-3 transition-all duration-300 ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
                <div className="w-72 rounded-2xl border border-line bg-surface p-3 shadow-[0_24px_60px_-24px_rgba(10,18,48,0.35)]">
                  <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-[0.16em] text-soft">Areas we serve</p>
                  {serviceAreas.map((area) => <a key={area} href={`/areas/${area.toLowerCase().startsWith("gurugram") ? "gurugram" : area.toLowerCase()}`} onClick={() => setActiveMenu(null)} className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-ink transition-colors hover:bg-surface-2"><span className="grid size-9 place-items-center rounded-lg bg-brand/10 text-brand"><LuMapPin className="size-4" /></span><span className="flex-1 font-medium">{area}</span><LuArrowRight className="size-4 text-soft transition-transform group-hover:translate-x-1 group-hover:text-brand" /></a>)}
                  <p className="px-3 pb-1 pt-2 text-xs leading-relaxed text-soft">Based in New Delhi, serving homes and businesses across Delhi NCR.</p>
                </div>
              </div>}
            </div>
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <AccentButton href="/contact" size="sm">Contact Us</AccentButton>
        </div>
      </div>

      <div onMouseEnter={() => setActiveMenu("services")} onMouseLeave={() => setActiveMenu(null)} className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] px-6 transition-all duration-300 ${activeMenu === "services" ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_270px] overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_28px_80px_-30px_rgba(10,18,48,0.4)]">
          <div className="p-6 xl:p-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Services</p><h2 className="mt-1 font-display text-2xl font-bold text-ink">One team for your whole project</h2></div>
              <a href="/#services" onClick={() => setActiveMenu(null)} className="flex shrink-0 items-center gap-2 text-sm font-semibold text-brand hover:underline">Explore all services <LuArrowRight /></a>
            </div>
            <div className="grid grid-cols-4 gap-4 xl:gap-5">
              {serviceMenuGroups.map((group) => {
                const GroupIcon = menuIcons[group.icon] || LuBuilding2
                return <div key={group.title}>
                  <h3 className="mb-2 flex min-h-10 items-center gap-2 border-b border-line pb-2 text-sm font-bold leading-snug text-ink"><GroupIcon className="size-4 shrink-0 text-brand" />{group.title}</h3>
                  <div className="space-y-1">{group.items.map(([label, href, icon]) => {
                    const Icon = menuIcons[icon] || LuBuilding2
                    return <a key={label} href={href} onClick={() => setActiveMenu(null)} className="group flex items-center gap-2 rounded-xl px-2 py-2 transition-colors hover:bg-surface-2"><span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-white"><Icon className="size-4" /></span><span className="min-w-0 flex-1 text-[13px] font-medium leading-snug text-ink xl:text-sm">{label}</span><LuArrowRight className="size-4 shrink-0 text-soft opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-brand group-hover:opacity-100" /></a>
                  })}</div>
                </div>
              })}
            </div>
          </div>
          <aside className="relative flex min-h-[300px] flex-col justify-end overflow-hidden border-l border-line bg-[#0a0f24] p-6 text-white xl:p-7">
            <img src={images.shadeSails} alt="Completed tensile parking shade" className="absolute inset-0 size-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-[#0a0f24]/70 to-[#0a0f24]/10" />
            <div className="blueprint-grid absolute inset-0 opacity-25" />
            <div className="relative"><span className="grid size-10 place-items-center rounded-xl bg-white/15 text-sky-300 backdrop-blur"><LuPhone className="size-5" /></span><p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-sky-300">Let’s build together</p><h3 className="mt-1 font-display text-2xl font-bold">Plan a site visit</h3><p className="mt-2 text-sm leading-relaxed text-white/75">Tell us what you have in mind. Our team will help you plan the next step.</p><a href="/contact" onClick={() => setActiveMenu(null)} className="mt-5 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#0a1230] transition-transform hover:-translate-y-0.5">Free site visit <LuArrowRight /></a><a href="tel:+919312148849" className="mt-3 block text-center text-sm font-semibold text-white/85 transition-colors hover:text-sky-300">Call 93121 48849</a></div>
          </aside>
        </div>
      </div>
    </header>
  )
}
