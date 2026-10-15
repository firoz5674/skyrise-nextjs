
import React from 'react'
import Reveal from "../../../components/ui/Reveal"
import SectionHeading from '../../ui/SectionHeading'
import { LuBoxes, LuBuilding2, LuHouse, LuLayers, LuPaintbrush, LuTent, LuWarehouse } from 'react-icons/lu'
import { images } from "../../../data/images"

const builds = [
  {
    icon: LuBuilding2,
    title: "Construction Services in New Delhi",
    text: "We build independent houses, builder floors, villas, shops and commercial buildings. Our construction team delivers durable, well-finished work with clear schedules and quotes.",
    cls: "lg:col-span-7",
    img: images.houseBalconies,
  },
  {
    icon: LuPaintbrush,
    title: "Residential and Commercial Interior Design",
    text: "Our interior designers in New Delhi plan and finish homes, offices, shops and restaurants. From 3D design to modular kitchens, wardrobes and false ceilings, we deliver complete turnkey interiors.",
    cls: "lg:col-span-5",
    img: images.livingRoom,
  },
  {
    icon: LuTent,
    title: "Tensile Structures",
    text: "As a tensile structure manufacturer in Delhi, we design, fabricate and install car parking shades, roofs, canopies, gazebos, domes and walkways using weatherproof, UV-resistant membrane fabric.",
    cls: "lg:col-span-5",
    img: images.shadeSails,
  },
  {
    icon: LuHouse,
    title: "Porta Cabins",
    text: "Our porta cabins are quick to install and easy to move. They suit site offices, security cabins, farmhouses, shops and labour accommodation across Delhi NCR.",
    cls: "lg:col-span-7 lg:grid-cols-2",
  },
  {
    icon: LuLayers,
    title: "PUF Insulated Panel Structures",
    text: "PUF insulated panels keep interiors cooler in summer and warmer in winter. We use them for cabins, cold rooms, offices and prefabricated buildings.",
    cls: "lg:col-span-4",
  },
  {
    icon: LuWarehouse,
    title: "Aerocon Prefabricated Structures",
    text: "We build Aerocon panel prefabricated structures that are light, strong and fast to put up. They work well for offices, warehouses, schools and farm buildings.",
    cls: "lg:col-span-4",
  },
  {
    icon: LuBoxes,
    title: "Prefabricated Structures",
    text: "Our prefabricated buildings are made off-site and assembled on your land. They reduce construction time and cost, and we customise the size, layout and finish.",
    cls: "lg:col-span-4",
  },
]

const WhatWeBuild = () => {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we build"
          title="Construction, interiors and prefab under one roof"
          text="Skyrise offers construction, interior design and prefabricated building solutions under one roof in New Delhi."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {builds.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80} className={b.cls}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_24px_60px_-30px_rgba(37,99,235,0.6)] sm:p-8">
                {b.img && (
                  <img
                    src={b.img}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                )}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${b.img ? "bg-[#0a0f24]/80 opacity-0 group-hover:opacity-100" : ""}`}
                />
                <div className="relative">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.7)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <b.icon className="size-6" />
                  </span>
                  <h3
                    className={`mt-6 font-display text-xl font-bold text-ink transition-colors ${b.img ? "group-hover:text-white" : ""}`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`mt-3 leading-relaxed text-soft transition-colors ${b.img ? "group-hover:text-white/85" : ""}`}
                  >
                    {b.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild