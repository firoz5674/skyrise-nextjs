import Reveal from "../../../components/ui/Reveal"
import CountUp from "../../../components/ui/CountUp"

import React from 'react'

function Glow({ className }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute animate-beam rounded-full blur-[120px] ${className}`}
    />
  )
}

const numbers = [
  { value: 25, suffix: "+", label: "years of experience" },
  { value: 900, suffix: "+", label: "projects delivered" },
  { value: 450, suffix: "", label: "professionals on our team" },
  { value: 10, suffix: "+", label: "cities covered" },
]

const AboutHero = () => {
  return (
    <section className="relative pt-28 lg:pt-40">
      <div
        aria-hidden
        className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[900px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <Glow className="-right-40 top-10 size-[520px] bg-sky-400/25" />
      <Glow className="-left-40 top-[420px] size-[460px] bg-blue-600/20" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-24 select-none font-display text-[clamp(8rem,26vw,24rem)] leading-none font-extrabold text-transparent [-webkit-text-stroke:1.5px_var(--line)] max-lg:top-32"
      >
        1998
      </div>
      <div className="container-page relative">
        <Reveal className="max-w-4xl">
          <p className="eyebrow mb-4">About Us</p>
          <h1 className="text-gradient text-[clamp(1.8rem,6vw,4rem)] leading-[1.23] md:leading-[1.2] font-extrabold">
            Construction, Interior and Tensile Structure Company in New Delhi
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
            Skyrise Construction &amp; Interiors is a New Delhi company that
            has built homes, offices and outdoor structures across Delhi NCR
            since 1998. Meet the team and the founder behind the work.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="grid grid-cols-2 overflow-hidden rounded-[2rem] bg-[#0a0f24] text-white shadow-[0_30px_80px_-30px_rgba(29,78,216,0.7)] lg:grid-cols-4">
            {numbers.map((n, i) => (
              <div
                key={n.label}
                className={`relative p-7 sm:p-9 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""} border-white/10`}
              >
                <p className="font-display text-[clamp(2.4rem,4.5vw,4rem)] leading-none font-extrabold text-sky-300">
                  <CountUp value={n.value} suffix={n.suffix} />
                </p>
                <p className="mt-3 text-lg text-white/75">{n.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutHero
