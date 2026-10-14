import { process } from "../../data/content"
import AccentButton from "../ui/AccentButton"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
export default function Process() {
  return (
    <section
      id="process"
      className="section-y relative overflow-hidden bg-surface-2 transition-colors duration-500"
    >
      <div aria-hidden className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow={process.subtitle}
          title={process.title}
          text={process.text}
        />

        <ol className="relative mt-14 grid gap-5 lg:grid-cols-5">
          <div
            aria-hidden
            className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-brand via-brand-sky to-brand/20 lg:block"
          />
          {process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <li className="group relative h-full rounded-3xl border border-line bg-surface p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand/60 hover:shadow-[0_24px_50px_-24px_rgba(37,99,235,0.55)]">
                <span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-white shadow-lg">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl leading-snug font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-soft">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-7 sm:flex-row sm:items-center sm:p-9">
          <p className="max-w-2xl font-display text-xl leading-snug font-semibold text-ink sm:text-2xl">
            {process.cta}
          </p>
          <AccentButton href="#contact">Book a free site visit</AccentButton>
        </Reveal>
      </div>
    </section>
  )
}
