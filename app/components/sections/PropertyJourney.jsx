"use client";
import { useState } from "react"
import { journey } from "../../data/content"
import AccentButton from "../ui/AccentButton"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
export default function PropertyJourney() {
  const [tab, setTab] = useState(0)
  const stage = journey.stages[tab]
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading title={journey.title} text={journey.text} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div
            role="tablist"
            aria-label="Property journey stages"
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
          >
            {journey.stages.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={i === tab}
                onClick={() => setTab(i)}
                className={`flex shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left font-display text-lg font-semibold transition-all duration-300 ${
                  i === tab
                    ? "border-transparent bg-brand-gradient text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.7)]"
                    : "border-line bg-surface text-ink hover:border-brand/60"
                }`}
              >
                <span className="font-mono text-sm opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-surface-2"
          >
            {journey.stages.map((s, i) => (
              <img
                key={s.title}
                src={s.image}
                alt={s.title}
                loading="lazy"
                className={`absolute inset-0 size-full object-cover transition-all duration-1000 ${
                  i === tab ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent" />
            <div
              key={tab}
              className="absolute inset-x-0 bottom-0 animate-fade-up p-7 text-white sm:p-10"
            >
              <h3 className="font-display text-3xl font-bold sm:text-4xl">
                {stage.title}
              </h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/90">
                {stage.text}
              </p>
            </div>
          </div>
        </div>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-2xl font-semibold text-ink">
            {journey.cta}
          </p>
          <AccentButton href="#contact">Book a free site visit</AccentButton>
        </Reveal>
      </div>
    </section>
  )
}
