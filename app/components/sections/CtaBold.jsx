import { cta2 } from "../../data/content"
import { images } from "../../data/images"
import AccentButton from "../ui/AccentButton"
import Reveal from "../ui/Reveal"
export default function CtaBold() {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface transition-colors duration-500 lg:min-h-[480px]">
            <div
              aria-hidden
              className="absolute inset-y-0 right-0 hidden w-[58%] lg:block"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#22d3ee,#2563eb_60%,#1d4ed8)] [clip-path:polygon(32%_0,100%_0,100%_100%,0_100%)]" />
              <div className="absolute inset-0 translate-x-8 bg-[#facc15] opacity-90 [clip-path:polygon(20%_100%,52%_0,60%_0,28%_100%)] max-lg:hidden" />
              <img
                src={images.houseDusk}
                alt=""
                loading="lazy"
                className="absolute inset-y-0 right-0 hidden h-full w-[78%] object-cover [clip-path:polygon(34%_0,100%_0,100%_100%,0_100%)] lg:block"
              />
            </div>
            <div className="relative z-10 flex max-w-2xl flex-col justify-center p-8 sm:p-12 lg:min-h-[480px] lg:p-16">
              <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] leading-[1.23] font-extrabold text-gray-900 dark:text-sky-300">
                {cta2.title}
              </h2>
              <div className="mt-9">
                <AccentButton href="#contact">{cta2.button}</AccentButton>
              </div>
            </div>
            <div className="relative h-56 lg:hidden">
              <img
                src={images.houseDusk}
                alt="Villa built by Skyrise"
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
