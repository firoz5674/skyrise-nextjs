"use client";
import { useEffect, useState } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { heroSlides } from "../../data/content"
const INTERVAL = 5e3
export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = heroSlides.length
  const go = (n) => setIndex((n + total) % total)
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % total), INTERVAL)
    return () => clearTimeout(id)
  }, [index, paused, total])
  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Skyrise project showcase"
    >
      <div className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2.25rem] border border-brand/40 sm:-inset-4 sm:translate-x-6 sm:translate-y-6" />

      <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-surface-2 shadow-[0_40px_90px_-30px_rgba(37,99,235,0.55)] sm:h-[540px] lg:h-[620px]">
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 size-full object-cover transition-all duration-[1400ms] ease-out ${
              i === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent to-[#050816]/20" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <p className="font-mono text-xs tracking-widest text-sky-300">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
          <p className="mt-2 min-h-[3.5rem] max-w-md font-display text-2xl leading-tight font-semibold text-white sm:text-3xl">
            {heroSlides[index].alt}
          </p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex flex-1 gap-2">
              {heroSlides.map((s, i) => (
                <button
                  key={s.alt}
                  type="button"
                  aria-label={`Show ${s.alt}`}
                  onClick={() => go(i)}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/25"
                >
                  <span
                    key={i === index ? `${index}-${paused}` : i}
                    className={`block h-full rounded-full bg-white ${
                      i < index
                        ? "w-full"
                        : i === index
                          ? "hero-progress"
                          : "w-0"
                    }`}
                    style={
                      i === index
                        ? {
                            animation: `hero-progress ${INTERVAL}ms linear forwards`,
                            animationPlayState: paused ? "paused" : "running",
                          }
                        : void 0
                    }
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => go(index - 1)}
                className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
              >
                <LuChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => go(index + 1)}
                className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
              >
                <LuChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-5 -left-3 animate-float rounded-2xl border border-line bg-glass px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-8">
        <p className="font-display text-3xl font-extrabold text-gradient-brand">
          25+
        </p>
        <p className="text-sm text-soft">years of experience</p>
      </div>
      <div className="absolute -right-2 -bottom-6 hidden rounded-2xl border border-line bg-glass px-5 py-4 shadow-xl backdrop-blur-xl sm:block lg:-right-6">
        <p className="font-display text-3xl font-extrabold text-gradient-brand">
          900+
        </p>
        <p className="text-sm text-soft">projects delivered</p>
      </div>
    </div>
  )
}
