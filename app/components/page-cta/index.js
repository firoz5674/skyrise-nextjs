
import React from 'react'
import Reveal from "../../components/ui/Reveal"
import SectionHeading from '../ui/SectionHeading'
import AccentButton from "../ui/AccentButton"
import { LuBoxes, LuBuilding2, LuHouse, LuLayers, LuPaintbrush, LuTent, LuWarehouse } from 'react-icons/lu'
import { images } from "../../data/images"

function Glow({ className }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute animate-beam rounded-full blur-[120px] ${className}`}
    />
  )
}

const PageCta = ({ title, desc, btnText }) => {
  return (
    <section className="pb-16 pt-4 lg:pb-24">
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
                {title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                {desc}
              </p>
              <div className="mt-9 flex justify-center">
                <AccentButton tone="light" href="/contact">
                  {btnText}
                </AccentButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default PageCta