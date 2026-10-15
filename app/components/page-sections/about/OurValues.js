
import React from 'react'
import Reveal from "../../../components/ui/Reveal"
import SectionHeading from '../../ui/SectionHeading'
import { LuAward, LuClock, LuHandshake, LuTag, LuTarget, LuTelescope } from 'react-icons/lu'


const values = [
  {
    icon: LuTag,
    title: "Honest and Competitive Pricing",
    text: "We give clear quotes at fair market rates, so you know what you will pay before work begins.",
  },
  {
    icon: LuHandshake,
    title: "The Right Involvement for Every Client",
    text: "Every client has different needs. We listen first, then plan and build around your requirements, your budget and your timeline.",
  },
  {
    icon: LuAward,
    title: "Quality Workmanship",
    text: "We use good materials and skilled workers, and we check quality at every stage of the project.",
  },
  {
    icon: LuClock,
    title: "On-Time Delivery",
    text: "We plan each stage carefully so that your project finishes on the date we promised.",
  },
]

const OurValues = () => {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow="Our values" title="What we stand for" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="group h-full rounded-[1.75rem] border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-30px_rgba(37,99,235,0.6)]">
                <span className="font-display text-5xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_var(--line)] transition-all duration-500 group-hover:[-webkit-text-stroke:1.5px_#2563eb]">
                  0{i + 1}
                </span>
                <v.icon className="mt-6 size-8 text-brand" />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 leading-relaxed text-soft">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {[
            {
              icon: LuTarget,
              label: "Our mission",
              text: "Our mission is to build spaces that are strong, well designed and fairly priced, and to treat every client with honesty.",
            },
            {
              icon: LuTelescope,
              label: "Our vision",
              text: "Our vision is to be the most trusted construction and interior company in Delhi NCR, known for quality work and long-term relationships.",
            },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 100}>
              <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-surface-2 p-8 sm:p-10">
                <m.icon className="absolute -right-4 -top-4 size-40 text-brand/10" />
                <p className="eyebrow">{m.label}</p>
                <p className="relative mt-4 font-display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-snug font-semibold text-ink">
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurValues