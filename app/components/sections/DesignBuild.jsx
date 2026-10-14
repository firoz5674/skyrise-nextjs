import { designBuild } from "../../data/content"
import AccentButton from "../ui/AccentButton"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
export default function DesignBuild() {
  const s = designBuild.statement
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading title={designBuild.title} text={designBuild.text} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {designBuild.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 80} className="bg-surface">
              <div className="group h-full p-8 transition-colors duration-500 hover:bg-surface-2">
                <span className="font-mono text-sm text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {it.title}
                </h3>
                <p className="mt-3 leading-relaxed text-soft">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid gap-10 rounded-[2rem] bg-brand-gradient p-8 text-white sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <h3 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.23] font-extrabold">
            {s.title}
          </h3>
          <div className="space-y-5 text-lg leading-relaxed text-white/90">
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="font-semibold text-white">{s.closing}</p>
            <div className="pt-3">
              <AccentButton tone="light" href="#contact">
                Hire us today
              </AccentButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
