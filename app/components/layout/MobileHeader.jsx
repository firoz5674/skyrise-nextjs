"use client";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { navLinks } from "../../data/content";
import AccentButton from "../ui/AccentButton";
import ThemeToggle from "../ui/ThemeToggle";
import Image from "next/image";
export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-2 z-50 px-3 lg:hidden">
      <div className="flex h-16 items-center justify-between rounded-2xl border border-line bg-glass px-4 backdrop-blur-xl transition-colors duration-500">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/skyrise-logo.webp"
            className=""
            width={100}
            height={58}
            alt="Skyrise Logo"
          />
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-10 place-items-center rounded-full border border-line text-ink"
          >
            <LuMenu className="size-5" />
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 bottom-0 z-50 flex w-[min(86vw,360px)] flex-col rounded-l-3xl border-l border-line bg-page p-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
          <Image
            src="/skyrise-logo.webp"
            className=""
            width={100}
            height={58}
            alt="Skyrise Logo"
          />
        </a>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="grid size-10 place-items-center rounded-full border border-line text-ink"
          >
            <LuX className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-10 flex flex-col">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`border-b border-line py-2.5 font-display text-md font-semibold text-ink transition-all duration-500 ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <AccentButton
            href="contact"
            onClick={close}
            className="w-full justify-between !py-1"
          >
            Book a free site visit
          </AccentButton>
        </div>
      </aside>
    </header>
  );
}
