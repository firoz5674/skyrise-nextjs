import { cta1 } from "../../data/content"
import { images } from "../../data/images"
import AccentButton from "../ui/AccentButton"
import Reveal from "../ui/Reveal"
export default function CtaSplit() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-page">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-[2rem] bg-[#0b1f6b] lg:min-h-[460px] lg:grid-cols-2">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_55%,rgba(56,189,248,0.75),transparent_70%),radial-gradient(50%_60%_at_10%_0%,rgba(37,99,235,0.9),transparent)]"
            />
            <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.1] font-bold text-white">
                {cta1.title}
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/85">{cta1.text}</p>
              <div className="mt-9">
                <AccentButton tone="light" href="#contact">
                  {cta1.button}
                </AccentButton>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-0">
              <div className="absolute inset-0 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] max-lg:[clip-path:none]">
                <img
                  src={images.shadeSails}
                  alt="Tensile shade structure by Skyrise"
                  loading="lazy"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f6b]/70 via-transparent to-transparent max-lg:bg-gradient-to-b" />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-10 left-[10%] size-28 rounded-full border border-white/30"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
