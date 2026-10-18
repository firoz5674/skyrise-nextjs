"use client";
import { useEffect, useState } from "react"
import {
  LuAward,
  LuBuilding2,
  LuClock,
  LuCloudSun,
  LuHandshake,
  LuHouse,
  LuLayers,
  LuMapPin,
  LuPaintbrush,
  LuPlus,
  LuQuote,
  LuShieldCheck,
  LuTent,
  LuTarget,
  LuTelescope,
  LuUsers,
  LuWarehouse,
  LuBoxes,
  LuTag,
} from "react-icons/lu"
import AccentButton from "../../../components/ui/AccentButton"
import CountUp from "../../../components/ui/CountUp"
import Reveal from "../../../components/ui/Reveal"
import SectionHeading from "../../../components/ui/SectionHeading"
import { images } from "../../../data/images"
import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import Founder from "./Founder";
import WhatWeBuild from "./WhatWeBuild";
import Team from "./Team";
import OurValues from "./OurValues";
import WhySkyrise from "./WhySkyrise";
import PageCta from "../../page-cta";


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

function Glow({ className }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute animate-beam rounded-full blur-[120px] ${className}`}
    />
  )
}

export default function AboutMain() {
  const [open, setOpen] = useState(0)

  useEffect(() => {
    const prev = document.title
    document.title = "About Skyrise | Construction & Interior Company in New Delhi"
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <main className="relative overflow-hidden">
      <AboutHero />
      <OurStory />
      <Founder />
      <WhatWeBuild />
      <Team />
      <OurValues />
      <WhySkyrise />

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
                        className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-transparent bg-brand-gradient text-white"
                            : "border-line text-ink"
                        }`}
                      >
                        <LuPlus className="size-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
      <PageCta title="Ready to Build with Skyrise?" desc="Tell us about your construction, interior or tensile structure project. Our New Delhi team will get back to you soon. Contact Skyrise today!" btnText="Contact Skyrise" />

      {/* CTA */}
      {/* <section className="pb-16 pt-4 lg:pb-24">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0a0f24] p-10 text-center text-white sm:p-16">
              <Glow className="left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,#22d3ee,#2563eb_50%,transparent_70%)] opacity-50" />
              <div
                aria-hidden
                className="blueprint-grid absolute inset-0 opacity-30"
              />
              <div className="relative mx-auto max-w-3xl">
                <h2 className="font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.05] font-extrabold">
                  Ready to Build with Skyrise?
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/75">
                  Tell us about your construction, interior or tensile
                  structure project. Our New Delhi team will get back to you
                  soon. Contact Skyrise today!
                </p>
                <div className="mt-9 flex justify-center">
                  <AccentButton tone="light" href="/contact">
                    Contact Skyrise
                  </AccentButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}
    </main>
  )
}
