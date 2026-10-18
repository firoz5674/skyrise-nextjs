
import React from 'react'
import { LuQuote } from 'react-icons/lu'
import Reveal from "../../../components/ui/Reveal"

function Glow({ className }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute animate-beam rounded-full blur-[120px] ${className}`}
    />
  )
}

const Founder = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0a0f24] p-8 text-white sm:p-12 lg:p-16">
            <Glow className="-bottom-40 -left-24 size-[460px] bg-[radial-gradient(circle,#22d3ee,#2563eb_50%,transparent_70%)] opacity-60" />
            <div
              aria-hidden
              className="blueprint-grid absolute inset-0 opacity-30"
            />
            <div className="relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="mx-auto w-full max-w-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/15 bg-[linear-gradient(145deg,#1d4ed8,#0e7490)]">
                  <span
                    role="img"
                    aria-label="Mr. Mohd Rashid, founder of Skyrise Construction & Interiors, New Delhi"
                    className="absolute inset-0 grid place-items-center font-display text-[9rem] leading-none font-extrabold text-white/90"
                  >
                    MR
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-16">
                    <p className="font-display text-2xl font-bold">
                      Mr. Mohd Rashid
                    </p>
                    <p className="text-sm text-white/75">
                      Founder, Skyrise · 1998
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="eyebrow mb-4 !text-sky-300">Meet the founder</p>
                <h2 className="font-display text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.08] font-bold">
                  Mr. Mohd Rashid
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  Mr. Mohd Rashid started Skyrise in 1998 with a simple idea:
                  give clients honest advice, fair prices and good work. More
                  than two decades later, he still leads a team of 120
                  professionals who work to the same principle.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white/75">
                  Under his leadership, Skyrise has grown from construction
                  and interiors into tensile structures, porta cabins, PUF
                  insulated panels and prefabricated structures, serving
                  homeowners, businesses and institutions across Delhi NCR.
                </p>
                <figure className="relative mt-8 rounded-2xl border border-white/15 bg-white/5 p-6 pl-8 backdrop-blur">
                  <LuQuote className="absolute -top-4 left-5 size-9 rounded-full bg-sky-400 p-2 text-[#0a0f24]" />
                  <blockquote className="text-lg leading-relaxed text-white/90 italic">
                    &ldquo;When we started in 1998, our promise was simple:
                    fair prices, honest advice and work we are proud of. That
                    promise has not changed. Every client who trusts us with
                    their space is a responsibility, and we build every
                    project as if it were our own.&rdquo;
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Founder