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
  LuMenu,
  LuPaintbrush,
  LuPhone,
  LuRuler,
  LuTentTree,
  LuX,
  LuSofa,
  LuWarehouse,
  LuArmchair,
  LuBriefcaseBusiness,
} from "react-icons/lu"
import { navLinks, serviceAreas, serviceMenuGroups } from "../../data/content"
import AccentButton from "../ui/AccentButton"
import ThemeToggle from "../ui/ThemeToggle"

const menuIcons = {
  building: LuBuilding2, ruler: LuRuler, hammer: LuHammer, sofa: LuSofa,
  office: LuBriefcaseBusiness, chair: LuArmchair, tent: LuTentTree,
  car: LuCarFront, container: LuWarehouse, blocks: LuLayers3,
  warehouse: LuWarehouse, layers: LuLayers3, interior: LuPaintbrush,
  tensile: LuTentTree, prefab: LuLayers3,
}

export default function MobileHeader() {
  const [open, setOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState(null)
  const close = () => {
    setOpen(false)
    setExpandedMenu(null)
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (event) => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const toggleMenu = (menu) => setExpandedMenu((current) => current === menu ? null : menu)

  return (
    <header data-navigation className="fixed inset-x-0 top-2 z-50 px-3 lg:hidden">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-line bg-glass px-4 backdrop-blur-xl transition-colors duration-500">
        <a href="/" className="flex items-center" aria-label="Skyrise home"><Image src="/skyrise-logo.webp" width={100} height={58} alt="Skyrise Logo" /></a>
        <div className="flex items-center gap-2"><ThemeToggle /><button type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="grid size-10 place-items-center rounded-full border border-line text-ink"><LuMenu className="size-5" /></button></div>
      </div>

      <div aria-hidden={!open} onClick={close} className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />

      <aside role="dialog" aria-modal="true" aria-label="Mobile navigation" className={`fixed top-0 right-0 bottom-0 z-50 flex w-[min(90vw,410px)] flex-col rounded-l-3xl border-l border-line bg-page p-5 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:p-6 ${open ? "translate-x-0" : "pointer-events-none translate-x-full"}`}>
        <div className="flex items-center justify-between"><a href="/" className="flex items-center" aria-label="Skyrise home"><Image src="/skyrise-logo.webp" width={100} height={58} alt="Skyrise Logo" /></a><button type="button" aria-label="Close menu" onClick={close} className="grid size-10 place-items-center rounded-full border border-line text-ink"><LuX className="size-5" /></button></div>

        <nav aria-label="Mobile" className="mt-7 flex min-h-0 flex-1 flex-col overflow-y-auto pr-1">
          {navLinks.filter((link) => !link.button).map((link, i) => {
            if (!link.menu) return <a key={link.label} href={link.href} onClick={close} style={{ transitionDelay: open ? `${100 + i * 40}ms` : "0ms" }} className={`border-b border-line py-3 font-display text-lg font-semibold text-ink transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}>{link.label}</a>
            const isOpen = expandedMenu === link.menu
            return <div key={link.label} style={{ transitionDelay: open ? `${100 + i * 40}ms` : "0ms" }} className={`border-b border-line transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}>
              <button type="button" aria-expanded={isOpen} onClick={() => toggleMenu(link.menu)} className="flex w-full items-center justify-between py-3 text-left font-display text-lg font-semibold text-ink"><span>{link.label}</span><LuChevronDown className={`size-5 text-soft transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : ""}`} /></button>
              <div inert={!isOpen} className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="min-h-0 overflow-hidden">
                  {link.menu === "areas" ? <div className="pb-3"><p className="pb-2 text-xs font-bold uppercase tracking-[0.16em] text-soft">Areas we serve</p><div className="grid grid-cols-2 gap-2">{serviceAreas.map((area) => <a key={area} href={`/areas/${area.toLowerCase().startsWith("gurugram") ? "gurugram" : area.toLowerCase()}`} onClick={close} className="flex items-center gap-2 rounded-xl bg-surface-2 px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-brand/10"><LuMapPin className="size-4 shrink-0 text-brand" />{area}</a>)}</div><p className="mt-2 text-xs leading-relaxed text-soft">Based in New Delhi, serving homes and businesses across Delhi NCR.</p></div> : <div className="max-h-[47vh] overflow-y-auto pb-3"><p className="pb-2 text-xs font-bold uppercase tracking-[0.16em] text-soft">Construction, interiors and more</p><div className="space-y-3">{serviceMenuGroups.map((group) => { const GroupIcon = menuIcons[group.icon] || LuBuilding2; return <section key={group.title}><h3 className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-soft"><GroupIcon className="size-4 text-brand" />{group.title}</h3><div className="grid grid-cols-2 gap-1.5">{group.items.map(([label, href, icon]) => { const Icon = menuIcons[icon] || LuBuilding2; return <a key={label} href={href} onClick={close} className="flex min-h-14 items-center gap-2 rounded-xl bg-surface-2 p-2 text-[13px] font-medium leading-snug text-ink transition-colors hover:bg-brand/10"><span className="grid size-7 shrink-0 place-items-center rounded-lg bg-surface text-brand"><Icon className="size-4" /></span>{label}</a>})}</div></section>})}</div><a href="/#services" onClick={close} className="mt-3 flex items-center justify-between rounded-xl bg-brand-gradient px-4 py-3 text-sm font-semibold text-white">Explore all services <LuArrowRight /></a></div>}
                </div>
              </div>
            </div>
          })}
        </nav>

        <div className="shrink-0 pt-4"><AccentButton href="/contact" onClick={close} className="w-full justify-between !py-1">Contact Us</AccentButton><a href="tel:+919312148849" className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-line py-3 font-semibold text-ink transition-colors hover:bg-surface-2"><LuPhone className="size-4 text-brand" /> Call 93121 48849</a></div>
      </aside>
    </header>
  )
}
