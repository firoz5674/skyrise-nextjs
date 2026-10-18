
import React from 'react'
import Reveal from "../../../components/ui/Reveal"
import SectionHeading from '../../ui/SectionHeading'
import { LuBoxes, LuBuilding2, LuHouse, LuLayers, LuPaintbrush, LuPlus, LuTent, LuWarehouse } from 'react-icons/lu'
import { images } from "../../../data/images"

const faqs = [
  [
    "Who founded Skyrise Construction & Interiors?",
    "Skyrise Construction & Interiors was founded in 1998 by Mr. Mohd Rashid in New Delhi.",
  ],
  [
    "How long has Skyrise been in business?",
    "Skyrise has been working in New Delhi since 1998, which is more than 25 years of experience in construction and interiors.",
  ],
  [
    "What services does Skyrise offer?",
    "We offer construction, residential and commercial interior design, tensile structures, porta cabins, PUF insulated panel structures, Aerocon prefabricated structures and other prefabricated buildings.",
  ],
  [
    "How big is the Skyrise team?",
    "Skyrise has a team of 120 professionals, including engineers, designers, fabricators and site supervisors.",
  ],
  [
    "Where is Skyrise located and which areas do you serve?",
    "We are based in New Delhi and serve Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad and Faridabad, along with more than 10 cities.",
  ],
  [
    "How can I get a quote from Skyrise?",
    "Fill in the contact form or email us. Our team will contact you soon to plan a free site visit and share a clear quote.",
  ],
]

const AboutFaq = ({isOpen}) => {
  return (
    <section className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="FAQs"
            title="FAQs about Skyrise Construction & Interiors"
          />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-brand sm:text-xl"
                  >
                    {q}
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen
                          ? "rotate-45 border-transparent bg-brand-gradient text-white"
                          : "border-line text-ink"
                        }`}
                    >
                      <LuPlus className="size-4" />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <p className="overflow-hidden pr-12 leading-relaxed text-soft">
                    <span className="block pb-6">{a}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutFaq