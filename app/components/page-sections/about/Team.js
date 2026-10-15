
import React from 'react'
import Reveal from "../../../components/ui/Reveal"
import CountUp from "../../../components/ui/CountUp"

const roles = [
  "Engineers",
  "Architects",
  "Interior designers",
  "Fabricators",
  "Carpenters",
  "Site supervisors",
]

const Team = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-8 text-white sm:p-12 lg:p-16">
            <div
              aria-hidden
              className="blueprint-grid absolute inset-0 opacity-30"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
              <div>
                <p className="font-display text-[clamp(6rem,16vw,13rem)] leading-[0.85] font-extrabold">
                  <CountUp value={120} />
                </p>
                <p className="mt-2 text-lg font-semibold text-white/85">
                  professionals, one company
                </p>
              </div>
              <div>
                <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-tight font-bold">
                  Our Team of 120 Professionals
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
                  Skyrise has a team of 120 people with decades of combined
                  experience in construction and interiors. Our engineers,
                  architects, interior designers, fabricators, carpenters and
                  site supervisors work together, so the whole project stays
                  in one company.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
                    >
                      {r}
                    </span>
                  ))}
                </div>
                <p className="mt-6 max-w-2xl leading-relaxed text-white/80">
                  This in-house team lets us control quality at every stage,
                  keep schedules realistic and deliver inventive,
                  well-designed projects time after time.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Team