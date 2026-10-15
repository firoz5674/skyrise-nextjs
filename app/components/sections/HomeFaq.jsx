"use client";
import { useState } from "react"
import { LuPlus } from "react-icons/lu"
import SectionHeading from "../ui/SectionHeading"
import { homeFaqs } from "@/app/data/allFaq";


export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faqs" className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading title={homeFaqs.title} />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {homeFaqs.items.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-brand sm:text-xl"
                  >
                    {q}
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-transparent bg-brand-gradient text-white"
                          : "border-line text-ink"
                      }`}
                    >
                      <LuPlus className="size-4" />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden pr-12 leading-relaxed text-soft">
                    <span className="block pb-6">{a}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
