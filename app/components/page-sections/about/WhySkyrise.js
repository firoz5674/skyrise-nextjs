
import React from 'react'
import Reveal from "../../../components/ui/Reveal"
import SectionHeading from '../../ui/SectionHeading'
import { LuCloudSun, LuLayers, LuMapPin, LuShieldCheck, LuUsers, } from 'react-icons/lu'

const trust = [
  {
    icon: LuShieldCheck,
    title: "More than 25 Years in New Delhi",
    text: "We have worked in Delhi since 1998, so we understand local conditions, materials and building needs.",
  },
  {
    icon: LuLayers,
    title: "Construction, Interiors and Prefab in One Company",
    text: "You do not need to manage several vendors. One team handles design, construction, interiors and prefabricated buildings.",
  },
  {
    icon: LuUsers,
    title: "A Large In-House Team",
    text: "With 120 professionals, we have the people and skills to handle small homes and large commercial projects.",
  },
  {
    icon: LuCloudSun,
    title: "Built for Delhi's Weather",
    text: "Our materials, insulation and fabrics are chosen to handle Delhi's hot summers, monsoon rain and cold winters.",
  },
]

const areas = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
]

const WhySkyrise = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why Skyrise"
            title="Why Clients in Delhi NCR Trust Skyrise"
          />
          <Reveal delay={120}>
            <div className="mt-10 rounded-[1.75rem] border border-line bg-surface p-7">
              <p className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                <LuMapPin className="size-5 text-brand" /> Areas we serve
              </p>
              <p className="mt-3 leading-relaxed text-soft">
                From our base in New Delhi, we serve Delhi, Noida, Greater
                Noida, Gurgaon, Ghaziabad and Faridabad, and take projects in
                more than 10 cities across north India.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-line bg-surface-2 px-3.5 py-1 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="group h-full rounded-[1.75rem] border border-line bg-surface p-7 transition-all duration-500 hover:border-brand/50">
                <span className="grid size-12 place-items-center rounded-2xl bg-surface-2 text-brand transition-all duration-500 group-hover:bg-brand-gradient group-hover:text-white">
                  <t.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {t.title}
                </h3>
                <p className="mt-3 leading-relaxed text-soft">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySkyrise