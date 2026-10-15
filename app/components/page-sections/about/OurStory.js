import React from 'react'
import Reveal from "../../../components/ui/Reveal"
import SectionHeading from '../../ui/SectionHeading'
import { images } from "../../../data/images"

const OurStory = () => {
  return (
    <section className="section-y">
  <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
    <div className="lg:sticky lg:top-32 lg:self-start">
      <SectionHeading
        eyebrow="Our story"
        title="Building Delhi NCR Since 1998"
      />
      <Reveal delay={150}>
        <div className="relative mt-10 overflow-hidden rounded-[2rem]">
          <img
            src={images.siteBlueprints}
            alt="Skyrise planning a construction project in New Delhi"
            loading="lazy"
            className="aspect-[4/3] w-full bg-surface-2 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24]/80 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-6 font-display text-xl font-bold text-white">
            Since 1998, building in New Delhi
          </p>
        </div>
      </Reveal>
    </div>
    <div className="flex flex-col gap-6 text-lg leading-relaxed text-soft">
      <Reveal>
        <p className="text-xl text-ink">
          Skyrise Construction &amp; Interiors was founded in 1998 by Mr.
          Mohd Rashid. What began as a small construction and interiors
          business in New Delhi has grown into a trusted name across Delhi
          NCR, with more than two decades of work behind it.
        </p>
      </Reveal>
      <Reveal>
        <p>
          Our reputation rests on three things:
        </p>
        <div className="my-5 grid gap-3 sm:grid-cols-3">
          {["Competitive pricing", "Honesty", "The right involvement"].map(
            (t, i) => (
              <div
                key={t}
                className="rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50"
              >
                <span className="text-gradient-brand font-display text-3xl font-extrabold">
                  0{i + 1}
                </span>
                <p className="mt-2 font-display font-bold text-ink">{t}</p>
              </div>
            ),
          )}
        </div>
        <p>
          We treat each project as a personal commitment, whether it is a
          home interior, a commercial building, or a tensile parking
          shade. Growing that reputation is an ongoing process, and every
          new project adds to it.
        </p>
      </Reveal>
      <Reveal>
        <p>
          Today, Skyrise is one of the leading builders of tensile
          structures, porta cabins, PUF insulated panel structures and
          prefabricated buildings, and a specialist designer of
          residential and commercial interiors.
        </p>
      </Reveal>
    </div>
  </div>
</section>
  )
}

export default OurStory