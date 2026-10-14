import Image from "next/image"
import { navLinks } from "../../data/content"
import AccentButton from "../ui/AccentButton"
import { logo1 } from "../../assets/images/logo.png"
import ThemeToggle from "../ui/ThemeToggle"
export default function DesktopHeader() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 hidden px-6 lg:block">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between rounded-3xl border border-line bg-glass px-6 shadow-[0_10px_40px_-18px_rgba(10,18,48,0.35)] backdrop-blur-xl transition-colors duration-500">
        <a href="/" className="flex items-center gap-2">
          <Image src="/skyrise-logo.webp" className="" width={150} height={58} alt="Skyrise Logo" />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 text-[17px] font-medium text-soft transition-colors duration-300 hover:bg-surface-2 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <AccentButton href="contact" size="sm">
            Book a free site visit
          </AccentButton>
        </div>
      </div>
    </header>
  )
}
