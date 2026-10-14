import { whyChoose } from "../../data/content"
import SectionHeading from "../ui/SectionHeading"
import Reveal from "../ui/Reveal"
export default function WhyChoose() {
  return (
    <section id="why-skyrise" className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading title={whyChoose.title} />
          <Reveal className="mt-6 space-y-5 text-lg leading-relaxed text-soft">
            {whyChoose.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
        <div>
          <ol className="divide-y divide-line border-y border-line">
            {whyChoose.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <li className="group flex gap-6 py-7 transition-colors duration-300 sm:gap-8">
                  <span className="font-mono text-sm text-brand transition-transform duration-300 group-hover:translate-x-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-soft">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p className="mt-8 rounded-2xl bg-surface-2 p-6 text-lg leading-relaxed text-ink transition-colors duration-500">
              {whyChoose.closing}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
