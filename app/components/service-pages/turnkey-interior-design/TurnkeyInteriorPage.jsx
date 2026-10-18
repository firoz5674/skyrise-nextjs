"use client"

import { useState } from "react"
import {
  LuArrowRight,
  LuCheck,
  LuChevronDown,
  LuClock3,
  LuDraftingCompass,
  LuHammer,
  LuHouse,
  LuLightbulb,
  LuMapPin,
  LuPaintbrush,
  LuPhone,
  LuRuler,
  LuSparkles,
  LuUsers,
  LuWandSparkles,
} from "react-icons/lu"
import { images } from "../../../data/images"
import { turnkeyInteriorFaqs } from "../../../data/turnkeyInterior"

const benefits = [
  [
    LuCheck,
    "One contract",
    "Design and execution stay with one company, so there is one team to hold accountable.",
  ],
  [
    LuClock3,
    "Clear scope and schedule",
    "Know what is included and when it will be done before work starts.",
  ],
  [
    LuUsers,
    "Less stress",
    "We manage vendors, materials and site work, so you do not have to.",
  ],
  [
    LuHouse,
    "Ready-to-use handover",
    "Receive a finished, cleaned space, not a site you still need to organise.",
  ],
]

const inclusions = [
  [
    LuRuler,
    "Space Planning and Layout",
    "Smart layouts that use every square foot and suit the way you live or work.",
  ],
  [
    LuDraftingCompass,
    "3D Design Views",
    "See your rooms in 3D before work begins, and request changes.",
  ],
  [
    LuHouse,
    "Modular Kitchen",
    "Practical, easy-to-clean kitchens with proper storage and good use of space.",
  ],
  [
    LuCheck,
    "Wardrobes and Storage",
    "Made-to-measure wardrobes, shoe racks and storage that fit your rooms.",
  ],
  [
    LuLightbulb,
    "False Ceiling and Lighting",
    "Ceiling designs and lighting plans that set the mood and cut glare.",
  ],
  [
    LuPaintbrush,
    "Flooring, Paint and Wall Finishes",
    "Tiles, wood finishes, wall panelling and paint chosen to match your style.",
  ],
  [
    LuHammer,
    "Electrical and Plumbing Work",
    "Wiring, switches, fixtures and fittings done properly and tested before handover.",
  ],
  [
    LuWandSparkles,
    "Furniture and Furnishings",
    "Custom furniture, curtains and decor that complete the look.",
  ],
  [
    LuCheck,
    "Final Cleaning and Handover",
    "We clean the space, check every detail and walk you through the finished work.",
  ],
]

const spaces = [
  [
    "Homes and Villas",
    "Warm, practical interiors for independent houses, kothis and villas.",
    images.livingRoom,
  ],
  [
    "Apartments and Builder Floors",
    "Smart use of space for flats, from compact 2 BHKs to larger homes.",
    images.homeInterior,
  ],
  [
    "Offices and Corporate Spaces",
    "Layouts that support focus, teamwork and a professional brand image.",
    images.officeBoardroom,
  ],
  [
    "Retail Stores and Showrooms",
    "Shop interiors that draw people in and show your products well.",
    images.houseDusk,
  ],
  [
    "Restaurants and Cafes",
    "Seating, kitchens and lighting planned for comfort and smooth service.",
    images.livingRoom,
  ],
  [
    "Hotels and Resorts",
    "Guest rooms, lobbies and common areas with a welcoming look.",
    images.homeInterior,
  ],
  [
    "Hospitals and Clinics",
    "Clean, calm and functional interiors that support patients and staff.",
    images.officeBoardroom,
  ],
  [
    "Gyms, Salons and Studios",
    "Practical layouts, good lighting and durable finishes for busy spaces.",
    images.houseDusk,
  ],
]

const styles = [
  [
    "Modern",
    "Clean lines, simple forms and a fresh, uncluttered look.",
    images.livingRoom,
  ],
  [
    "Minimalist",
    "Fewer items, more space, calm colours and good storage.",
    images.homeInterior,
  ],
  [
    "Contemporary",
    "Current trends in colour, texture and lighting, mixed with comfort.",
    images.officeBoardroom,
  ],
  [
    "Classic",
    "Elegant details, warm woods and timeless furniture.",
    images.houseDusk,
  ],
  [
    "Luxury",
    "Rich materials, statement lighting and fine finishing.",
    images.homeInterior,
  ],
  [
    "Industrial",
    "Exposed textures, metal and wood for offices, cafes and loft-style homes.",
    images.officeBoardroom,
  ],
]

const reasons = [
  [
    LuHammer,
    "Construction and interiors in one company",
    "Need a wall moved, a floor added or a structure changed? Our construction team can handle it alongside the interior work.",
  ],
  [
    LuClock3,
    "Since 1998",
    "More than 25 years of experience and 900+ projects across Delhi NCR.",
  ],
  [
    LuDraftingCompass,
    "See it before we build it",
    "3D views help you review the result and approve the design with confidence.",
  ],
  [
    LuUsers,
    "A team of 120",
    "Designers, engineers and site supervisors work together from start to finish.",
  ],
  [LuCheck, "A clear quote", "Review the scope and cost before work begins."],
]

const process = [
  [
    "Free Site Visit and Brief",
    "We visit your space, measure it and listen to your needs, taste and budget.",
  ],
  [
    "Concept and Layout",
    "We plan how each room will work and share the style direction.",
  ],
  [
    "3D Design and Materials",
    "Review 3D views, then choose materials and finishes.",
  ],
  [
    "Quote and Approval",
    "Get a clear quote and schedule. Work begins once you approve.",
  ],
  [
    "Execution",
    "Our site team carries out carpentry, electrical, ceiling, flooring and painting with quality checks.",
  ],
  [
    "Handover",
    "We clean the space, check every detail and hand over a ready-to-use home or office.",
  ],
]

const costFactors = [
  ["Size of the space", "A larger area needs more material and more work."],
  [
    "Scope of work",
    "A full home with kitchen and wardrobes costs more than a single room.",
  ],
  [
    "Materials and finishes",
    "Plywood, laminates, veneers, tiles and fittings come in different grades and prices.",
  ],
  [
    "Furniture and decor",
    "Custom furniture and special lighting add to the budget.",
  ],
  [
    "Structural changes",
    "Moving walls or changing plumbing lines adds to the work.",
  ],
]

const gallery = [
  [images.livingRoom, "Turnkey living room interior design in Delhi"],
  [images.homeInterior, "Modular kitchen design in Noida"],
  [images.officeBoardroom, "Office interior design in Gurugram"],
  [images.houseDusk, "Wardrobe and bedroom interior in Delhi NCR"],
  [images.homeInterior, "Showroom interior design in Delhi"],
  [images.livingRoom, "False ceiling and lighting design for a home"],
]

const related = [
  [
    "Office Interior Design",
    "Workspaces planned for focus and teamwork.",
    "/services/office-interior-design",
  ],
  [
    "Custom Furniture and Modular Interiors",
    "Made-to-measure furniture for your rooms.",
    "/services/custom-furniture-and-modular-interiors",
  ],
  [
    "Home Renovation and Remodeling",
    "Refresh an old home or office.",
    "/services/home-renovation-and-remodeling",
  ],
  [
    "House and Commercial Construction",
    "Build first, then finish.",
    "/services/house-and-commercial-construction",
  ],
]

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow mb-3 ${light ? "!text-sky-300" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.08] font-bold ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-soft"}`}
        >
          {text}
        </p>
      )}
    </div>
  )
}

export default function TurnkeyInteriorPage() {
  const [openFaq, setOpenFaq] = useState(0)
  const [activeImage, setActiveImage] = useState(null)
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    structureType: "",
    area: "",
    message: "",
    website: "",
  })
  const [formState, setFormState] = useState("idle")
  const [formError, setFormError] = useState("")
  const [formErrors, setFormErrors] = useState({})

  const updateForm = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setFormErrors((current) => ({ ...current, [name]: "" }))
  }

  const submitForm = async (event) => {
    event.preventDefault()
    const errors = {
      name: form.name.trim() ? "" : "Please enter your name.",
      mobile: !form.mobile.trim()
        ? "Please enter your phone number."
        : form.mobile.replace(/\D/g, "").length < 10
          ? "Please enter a valid phone number."
          : "",
      city: form.city.trim() ? "" : "Please enter your city.",
    }
    setFormErrors(errors)
    if (Object.values(errors).some(Boolean)) return
    setFormState("sending")
    setFormError("")
    try {
      const response = await fetch("/api/inner-pages-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const result = await response.json()
      if (!response.ok || !result.success)
        throw new Error(
          result.message || "We could not send your request. Please try again.",
        )
      setFormState("success")
      setForm({
        name: "",
        mobile: "",
        city: "",
        structureType: "",
        area: "",
        message: "",
        website: "",
      })
      setFormErrors({})
    } catch (error) {
      setFormError(error.message)
      setFormState("error")
    }
  }

  return (
    <main className="relative overflow-hidden pt-24 lg:pt-32">
      <section className="container-page relative pb-16 pt-8 lg:pb-24 lg:pt-12">
        <div
          aria-hidden="true"
          className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="eyebrow mb-5">Turnkey interiors · Delhi NCR</p>
            <h1
              style={{ lineHeight: "calc(0.98em + 10px)" }}
              className="text-gradient text-[clamp(2.6rem,6.5vw,4.4rem)] font-extrabold"
            >
              Turnkey Interior Design in Delhi NCR
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
              From first sketch to the day you move in, Skyrise designs, builds
              and finishes your interiors under one contract. Homes, offices and
              shops across Delhi, Noida and Gurugram, backed by 25+ years of
              experience and 900+ projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#site-visit"
                className="inline-flex items-center gap-3 rounded-full bg-brand-gradient px-6 py-3.5 font-semibold text-white shadow-[0_15px_35px_-12px_rgba(37,99,235,.7)] transition-transform hover:-translate-y-0.5"
              >
                Get a Free Site Visit <LuArrowRight />
              </a>
              <a
                href="tel:+919312148849"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-surface-2"
              >
                <LuPhone className="size-4 text-brand" />
                Call 93121 48849
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "25+ years",
                "900+ projects",
                "120 professionals",
                "Delhi · Noida · Gurugram",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-surface/80 px-3.5 py-2 text-sm font-semibold text-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="group relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-brand-gradient opacity-15 blur-2xl transition-opacity duration-700 group-hover:opacity-30"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_35px_90px_-45px_rgba(10,18,48,.6)]">
              <img
                src={images.livingRoom}
                alt="Turnkey living room interior design in Delhi NCR"
                className="pointer-events-none aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f24]/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                  Designed around the way you live
                </p>
                <p className="mt-1 font-display text-2xl font-bold">
                  A considered space, ready to live in
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-line bg-surface/50">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="One team, one handover"
              title="What Is Turnkey Interior Design?"
            />
            <p className="mt-5 leading-relaxed text-soft">
              Turnkey interior design means one company handles everything, from
              design and 3D views to carpentry, electrical work, painting and
              final cleaning. You do not hire separate designers, carpenters and
              electricians or chase them. When we hand over the keys, your space
              is ready to use.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map(([Icon, title, text]) => (
              <article
                key={title}
                className="architectural-card rounded-3xl border border-line p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionTitle
            eyebrow="From first plan to final finish"
            title="What Our Turnkey Interior Design Service Includes"
            text="Bring the design, materials and on-site work together with one team."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map(([Icon, title, text], i) => (
              <article
                key={title}
                className="architectural-card group relative overflow-hidden rounded-3xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-4 font-mono text-5xl font-bold text-brand/[0.07]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-soft">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Homes, work and hospitality"
            title="Interiors for Every Kind of Space in Delhi NCR"
            text="We plan each space around its use, the people in it and the way your business or home needs to work."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map(([title, text, src]) => (
              <article
                key={title}
                className="architectural-card group overflow-hidden rounded-3xl border border-line"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={src}
                    alt={`${title} interior design in Delhi NCR`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionTitle
            eyebrow="Your taste, your budget"
            title="Design Styles We Work In"
            text="Tell us what you like. We design in the style that suits your taste and your budget."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {styles.map(([title, text, src]) => (
              <article
                key={title}
                className="architectural-card group relative min-h-64 overflow-hidden rounded-3xl border border-line"
              >
                <img
                  src={src}
                  alt={`${title} interior design inspiration`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24]/95 via-[#0a0f24]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y relative isolate overflow-hidden bg-[#0a0f24] text-white">
        <div
          aria-hidden="true"
          className="blueprint-grid pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="container-page relative z-10">
          <SectionTitle
            light
            eyebrow="Built on experience"
            title="Why Choose Skyrise for Turnkey Interiors in Delhi NCR"
            text="A connected construction and interior team can take your project from planning through finishing."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map(([Icon, title, text]) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-sky-300">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionTitle
            eyebrow="A clear path to handover"
            title="Our Turnkey Interior Design Process"
            text="You review the plan, design and quote before the site work begins."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(([title, text], i) => (
              <article
                key={title}
                className="architectural-card relative rounded-3xl border border-line p-6"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-gradient font-mono font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-soft">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Plan with clarity"
              title="What Decides the Cost of Interior Design in Delhi NCR?"
              text="Every project is different, so we prepare a quote after a free site visit. These are the main factors:"
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {costFactors.map(([title, text], i) => (
                <article
                  key={title}
                  className="architectural-card flex gap-3 rounded-2xl border border-line p-4"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand/10 font-mono text-sm font-bold text-brand">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-soft">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-8 text-white shadow-[0_30px_70px_-35px_rgba(37,99,235,.8)] sm:p-10">
            <div
              aria-hidden="true"
              className="blueprint-grid absolute inset-0 opacity-35"
            />
            <div className="relative">
              <span className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10">
                <LuRuler className="size-7" />
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-white/70">
                A quote shaped by your space
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold">
                Get a clear project estimate
              </h3>
              <p className="mt-4 leading-relaxed text-white/80">
                We review the layout, scope, materials and finishes with you,
                then share the costs and schedule before work begins.
              </p>
              <a
                href="#site-visit"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-brand-deep transition-transform hover:-translate-y-0.5"
              >
                Book a free site visit <LuArrowRight />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionTitle
            eyebrow="Local team, regional reach"
            title="Turnkey Interior Designers Across Delhi NCR"
            text="From our office in New Delhi, we design and finish interiors across the region."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Delhi",
              "Noida and Greater Noida",
              "Gurugram (Gurgaon)",
              "Ghaziabad and Faridabad",
            ].map((area) => (
              <a
                key={area}
                href="/contact"
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/50 hover:bg-surface-2"
              >
                <span className="flex items-center gap-3 font-display text-lg font-bold text-ink">
                  <LuMapPin className="size-5 text-brand" />
                  {area}
                </span>
                <LuArrowRight className="size-5 text-soft transition-transform group-hover:translate-x-1 group-hover:text-brand" />
              </a>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="font-display text-2xl font-bold text-ink">
              Related services
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(([title, text, href]) => (
                <a
                  key={title}
                  href={href}
                  className="architectural-card group rounded-2xl border border-line p-5 transition-all hover:-translate-y-1 hover:border-brand/50"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">
                    Explore service
                  </span>
                  <h4 className="mt-2 font-display text-lg font-bold text-ink">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-soft">
                    {text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Learn more{" "}
                    <LuArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="A look at our work"
            title="Our Interior Design Projects"
            text="Explore interior ideas for homes, offices, showrooms and more."
          />
          <div className="mt-9 grid auto-rows-[190px] gap-3 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-12">
            {gallery.map(([src, alt], i) => (
              <button
                type="button"
                key={alt}
                onClick={() => setActiveImage([src, alt])}
                aria-label={`View ${alt}`}
                className={`group relative overflow-hidden rounded-3xl bg-surface text-left ${i === 0 ? "sm:row-span-2 lg:col-span-5 lg:row-span-2" : i === 1 || i === 4 ? "lg:col-span-4" : "lg:col-span-3"}`}
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0f24]/90 to-transparent p-4 pt-12 font-semibold text-white sm:p-5">
                  {alt}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-soft">
            Gallery photos are illustrative. Contact our team for available
            project references.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionTitle
              eyebrow="Helpful answers"
              title="FAQs about Turnkey Interior Design in Delhi NCR"
              text="Answers to common questions about design, cost, timelines and execution."
            />
            <a
              href="#site-visit"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand"
            >
              Ask us about your space <LuArrowRight />
            </a>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {turnkeyInteriorFaqs.map(([question, answer], i) => {
              const isOpen = openFaq === i
              return (
                <div key={question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-xl font-semibold text-ink transition-colors hover:text-brand"
                    >
                      <span>{question}</span>
                      <LuChevronDown
                        className={`size-5 shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <p className="overflow-hidden pr-10 leading-relaxed text-soft text-lg">
                      <span className="block pb-5">{answer}</span>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="site-visit"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[#0a0f24] py-16 text-white sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="blueprint-grid pointer-events-none absolute inset-0 opacity-30"
        />
        <div className="container-page relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="eyebrow !text-sky-300">Start with a site visit</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.23] font-bold">
              Ready to Design Your Space in Delhi NCR?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Tell us about your home, office or shop. We will get back to you
              soon to plan a free site visit and share a clear quote.
            </p>
            <div className="mt-8 space-y-4 text-white/80">
              <a
                href="tel:+919312148849"
                className="flex items-center gap-3 transition-colors hover:text-sky-300"
              >
                <LuPhone className="size-5 text-sky-300" />
                93121 48849
              </a>
              <a
                href="mailto:skyrise30@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-sky-300"
              >
                skyrise30@gmail.com
              </a>
              <p className="flex items-start gap-3">
                <LuMapPin className="mt-1 size-5 shrink-0 text-sky-300" />C 373
                Ground Floor, DDA Flats, Jasola Vihar, Sarita Vihar, New Delhi
                110025
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-surface p-6 text-ink shadow-[0_30px_90px_-35px_rgba(14,165,233,.4)] sm:p-8">
            <h3 className="font-display text-2xl font-bold">
              Request a free site visit
            </h3>
            <p className="mt-2 text-sm text-soft">
              Share a few details and our team will contact you.
            </p>
            {formState === "success" ? (
              <div
                role="status"
                className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6"
              >
                <span className="grid size-11 place-items-center rounded-full bg-emerald-500 text-white">
                  <LuCheck className="size-6" />
                </span>
                <p className="mt-4 font-display text-xl font-bold">
                  Thank you. Your request is sent.
                </p>
                <p className="mt-2 text-soft">
                  Our team will contact you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setFormState("idle")}
                  className="mt-6 inline-flex rounded-full bg-brand-gradient px-5 pb-3 pt-2 font-semibold text-white"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={submitForm}
                className="mt-6 grid gap-4 sm:grid-cols-2"
              >
                <input
                  name="website"
                  value={form.website}
                  onChange={updateForm}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <label className="grid gap-1.5 text-sm font-semibold">
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    autoComplete="name"
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none focus:border-brand"
                    placeholder="Your name"
                  />
                  {formErrors.name && (
                    <span
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {formErrors.name}
                    </span>
                  )}
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Phone
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={updateForm}
                    autoComplete="tel"
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none focus:border-brand"
                    placeholder="Your phone number"
                  />
                  {formErrors.mobile && (
                    <span
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {formErrors.mobile}
                    </span>
                  )}
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  City
                  <input
                    name="city"
                    value={form.city}
                    onChange={updateForm}
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none focus:border-brand"
                    placeholder="e.g. Delhi"
                  />
                  {formErrors.city && (
                    <span
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {formErrors.city}
                    </span>
                  )}
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Property type
                  <select
                    name="structureType"
                    value={form.structureType}
                    onChange={updateForm}
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none focus:border-brand"
                  >
                    <option value="">Select property type</option>
                    {[
                      "Home or villa",
                      "Apartment or builder floor",
                      "Office",
                      "Shop or showroom",
                      "Restaurant or cafe",
                      "Other",
                    ].map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
                  Approx. area in sq ft
                  <input
                    inputMode="numeric"
                    name="area"
                    value={form.area}
                    onChange={updateForm}
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none focus:border-brand"
                    placeholder="Approximate area"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={updateForm}
                    className="w-full resize-y rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none focus:border-brand"
                    placeholder="Tell us about the space and what you need"
                  />
                </label>
                {formError && (
                  <p
                    role="alert"
                    className="text-sm font-medium text-red-500 sm:col-span-2"
                  >
                    {formError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="flex items-center justify-center rounded-xl bg-brand-gradient px-5 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
                >
                  {formState === "sending"
                    ? "Sending request…"
                    : "Request Free Site Visit"}
                  <LuArrowRight className="ml-2 text-[20px]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage[1]}
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]/90 p-4"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 font-semibold text-ink"
          >
            Close
          </button>
          <figure
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-5xl"
          >
            <img
              src={activeImage[0]}
              alt={activeImage[1]}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-white">
              {activeImage[1]}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
