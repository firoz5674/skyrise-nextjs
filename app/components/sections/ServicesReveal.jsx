import { useEffect, useState } from "react"
import {
  LuArmchair,
  LuBlocks,
  LuBriefcase,
  LuBuilding2,
  LuContainer,
  LuHammer,
  LuRuler,
  LuSofa,
  LuTent,
} from "react-icons/lu"
import { services, servicesContent } from "../../data/content"
import SectionHeading from "../ui/SectionHeading"
const icons = {
  building: LuBuilding2,
  sofa: LuSofa,
  ruler: LuRuler,
  briefcase: LuBriefcase,
  hammer: LuHammer,
  armchair: LuArmchair,
  container: LuContainer,
  blocks: LuBlocks,
  tent: LuTent,
}
const CYCLE_MS = 4500
export default function ServicesReveal() {
  const [active, setActive] = useState(0)
  const [hovering, setHovering] = useState(false)
  useEffect(() => {
    if (hovering) return
    const id = setTimeout(
      () => setActive((a) => (a + 1) % services.length),
      CYCLE_MS,
    )
    return () => clearTimeout(id)
  }, [active, hovering])
  return (
    <section id="services" className="section-y relative">
      <div className="container-page">
        <SectionHeading
          title={servicesContent.title}
          text={servicesContent.text}
        />

        <div
          className="mt-12 flex flex-col gap-2 lg:h-[580px] lg:flex-row"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {services.map((s, i) => {
            const on = i === active
            const Icon = icons[s.icon]
            return (
              <article
                key={s.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                aria-expanded={on}
                className={`group relative min-w-0 cursor-pointer overflow-hidden rounded-3xl border transition-[flex-grow,background-color,border-color] duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:basis-0 ${
                  on
                    ? "border-transparent bg-brand-gradient text-white lg:grow-[12]"
                    : "border-line bg-surface text-ink hover:border-brand/50 lg:grow-[1]"
                }`}
              >
                <div className="flex items-center gap-4 p-5 lg:hidden">
                  <span className="font-mono text-sm opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg leading-snug font-semibold">
                    {s.short}
                  </h3>
                </div>

                <div
                  className={`absolute inset-x-0 top-0 hidden flex-col items-center gap-6 pt-6 transition-opacity duration-500 lg:flex ${
                    on ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="font-mono text-sm text-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="size-5 text-brand" />
                  <h3 className="font-display text-lg font-semibold whitespace-nowrap [writing-mode:vertical-rl]">
                    {s.short}
                  </h3>
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:absolute lg:inset-0 lg:block ${
                    on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`flex flex-col gap-6 px-5 pb-5 transition-all duration-700 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[min(760px,100%)] lg:flex-row lg:p-8 ${
                        on
                          ? "opacity-100 delay-200 lg:translate-x-0"
                          : "opacity-0 lg:-translate-x-6"
                      }`}
                    >
                      <div className="flex flex-col lg:w-[44%] lg:shrink-0">
                        <span className="mb-5 hidden size-12 place-items-center rounded-2xl bg-white/15 backdrop-blur lg:grid">
                          <Icon className="size-6" />
                        </span>
                        <h3 className="hidden font-display text-3xl leading-tight font-bold lg:block">
                          {s.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-white/90 lg:mt-4">
                          {s.text}
                        </p>
                      </div>
                      <div className="h-52 overflow-hidden rounded-2xl lg:h-auto lg:flex-1">
                        <img
                          src={s.image}
                          alt={s.title}
                          loading="lazy"
                          style={{ objectPosition: s.pos ?? "center" }}
                          className={`size-full object-cover transition-transform duration-[2500ms] ${
                            on ? "scale-100" : "scale-125"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {on && (
                  <span
                    key={`${i}-${hovering}`}
                    className="absolute bottom-0 left-0 h-1 bg-white/80"
                    style={{
                      animation: `hero-progress ${CYCLE_MS}ms linear forwards`,
                      animationPlayState: hovering ? "paused" : "running",
                    }}
                  />
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
