import { spaces } from "../../data/content"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
export default function SpacesWeServe() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading title={spaces.title} text={spaces.text} />
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-4">
          {spaces.items.map(([title, text], i) => (
            <Reveal
              key={title}
              delay={(i % 4) * 70}
              className="mb-4 break-inside-avoid"
            >
              <article className="group rounded-3xl border border-line bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_20px_40px_-22px_rgba(37,99,235,0.6)]">
                <div className="mb-4 h-1 w-8 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-xl leading-snug font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-soft">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
