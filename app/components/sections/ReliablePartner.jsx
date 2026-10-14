import { reliable } from "../../data/content"
import AccentButton from "../ui/AccentButton"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
export default function ReliablePartner() {
  return (
    <section className="section-y relative overflow-hidden bg-[#0a0a0f] text-white">
      <div
        aria-hidden
        className="absolute -top-40 right-0 h-[500px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.4),transparent)]"
      />
      <div className="container-page relative">
        <div className="dark">
          <SectionHeading title={reliable.title} text={reliable.text} />
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {reliable.items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 80}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-400/50 hover:bg-white/[0.07]">
                <p className="font-display text-6xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_#5b9bff] transition-colors duration-500 group-hover:text-sky-400/20">
                  {it.big}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {it.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/70">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-2xl font-semibold">{reliable.cta}</p>
          <AccentButton tone="light" href="#contact">
            Book a free site visit
          </AccentButton>
        </Reveal>
      </div>
    </section>
  )
}
