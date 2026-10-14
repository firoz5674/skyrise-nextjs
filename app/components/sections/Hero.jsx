import { LuAsterisk } from "react-icons/lu"
import { heroContent, heroTicker, stats } from "../../data/content"
import AccentButton from "../ui/AccentButton"
import CountUp from "../ui/CountUp"
import HeroSlider from "./HeroSlider"
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-44"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_30%,#000_20%,transparent_72%)]" />
        <div className="absolute -top-40 left-1/2 h-[620px] w-[980px] -translate-x-1/2 animate-beam rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.28),transparent)] dark:bg-[radial-gradient(closest-side,rgba(59,110,255,0.34),transparent)]" />
        <div className="absolute top-1/3 -left-40 h-[380px] w-[380px] rotate-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.35))] opacity-0 blur-3xl dark:opacity-100" />
        <div className="absolute top-24 -right-32 hidden h-[300px] w-[520px] rotate-[22deg] animate-beam bg-[linear-gradient(270deg,rgba(99,120,255,0.55),transparent)] blur-2xl dark:block" />
        <div className="absolute top-44 -left-32 hidden h-[260px] w-[460px] -rotate-[20deg] animate-beam bg-[linear-gradient(90deg,rgba(99,120,255,0.5),transparent)] blur-2xl dark:block" />
      </div>

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-glass px-4 py-2 text-sm font-semibold text-brand backdrop-blur dark:text-sky-300">
            <span className="size-2 rounded-full bg-brand-sky shadow-[0_0_12px_#0ea5e9]" />
            {heroContent.badge}
          </span>
          <h1 className="text-gradient mt-6 text-[clamp(2rem,5.2vw,3.2rem)] leading-[1.26] font-extrabold">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            {heroContent.text}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <AccentButton href="#contact">{heroContent.cta}</AccentButton>
            <a
              href="#projects"
              className="rounded-full border border-line px-6 py-3.5 font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              Our Projects
            </a>
          </div>
        </div>
        <HeroSlider />
      </div>

      <div className="relative mt-20 border-y border-line bg-surface/80 py-4 backdrop-blur transition-colors duration-500 lg:mt-24">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none">
          {[...heroTicker, ...heroTicker].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-[15px] font-medium text-ink"
            >
              {t}
              <LuAsterisk className="size-5 text-brand" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <div className="container-page relative py-10">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface px-6 py-7 transition-colors duration-500 sm:px-8 sm:py-9"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="text-gradient font-display text-4xl font-extrabold sm:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-soft sm:text-lg">{s.label}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
