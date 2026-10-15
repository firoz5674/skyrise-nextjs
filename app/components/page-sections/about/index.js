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

const numbers = [
  { value: 25, suffix: "+", label: "years of experience" },
  { value: 900, suffix: "+", label: "projects delivered" },
  { value: 450, suffix: "", label: "professionals on our team" },
  { value: 10, suffix: "+", label: "cities covered" },
]

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

const values = [
  {
    icon: LuTag,
    title: "Honest and Competitive Pricing",
    text: "We give clear quotes at fair market rates, so you know what you will pay before work begins.",
  },
  {
    icon: LuHandshake,
    title: "The Right Involvement for Every Client",
    text: "Every client has different needs. We listen first, then plan and build around your requirements, your budget and your timeline.",
  },
  {
    icon: LuAward,
    title: "Quality Workmanship",
    text: "We use good materials and skilled workers, and we check quality at every stage of the project.",
  },
  {
    icon: LuClock,
    title: "On-Time Delivery",
    text: "We plan each stage carefully so that your project finishes on the date we promised.",
  },
]

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
    text: "With 450 professionals, we have the people and skills to handle small homes and large commercial projects.",
  },
  {
    icon: LuCloudSun,
    title: "Built for Delhi's Weather",
    text: "Our materials, insulation and fabrics are chosen to handle Delhi's hot summers, monsoon rain and cold winters.",
  },
]

const roles = [
  "Engineers",
  "Architects",
  "Interior designers",
  "Fabricators",
  "Carpenters",
  "Site supervisors",
]

const areas = [
  "Delhi",
  "Noida",
  "Greater Noida",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
]

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
    "Skyrise has a team of 450 professionals, including engineers, designers, fabricators and site supervisors.",
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
      {/* Hero */}
      <section className="relative pt-28 lg:pt-40">
        <div
          aria-hidden
          className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[900px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <Glow className="-right-40 top-10 size-[520px] bg-sky-400/25" />
        <Glow className="-left-40 top-[420px] size-[460px] bg-blue-600/20" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-24 select-none font-display text-[clamp(8rem,26vw,24rem)] leading-none font-extrabold text-transparent [-webkit-text-stroke:1.5px_var(--line)] max-lg:top-32"
        >
          1998
        </div>
        <div className="container-page relative">
          <Reveal className="max-w-4xl">
            <p className="eyebrow mb-4">About Us</p>
            <h1 className="text-gradient text-[clamp(1.8rem,6vw,4rem)] leading-[1.23] md:leading-[1.2] font-extrabold">
              Construction, Interior and Tensile Structure Company in New Delhi
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
              Skyrise Construction &amp; Interiors is a New Delhi company that
              has built homes, offices and outdoor structures across Delhi NCR
              since 1998. Meet the team and the founder behind the work.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <div className="grid grid-cols-2 overflow-hidden rounded-[2rem] bg-[#0a0f24] text-white shadow-[0_30px_80px_-30px_rgba(29,78,216,0.7)] lg:grid-cols-4">
              {numbers.map((n, i) => (
                <div
                  key={n.label}
                  className={`relative p-7 sm:p-9 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""} border-white/10`}
                >
                  <p className="font-display text-[clamp(2.4rem,4.5vw,4rem)] leading-none font-extrabold text-sky-300">
                    <CountUp value={n.value} suffix={n.suffix} />
                  </p>
                  <p className="mt-3 text-lg text-white/75">{n.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
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

      {/* Founder */}
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
                    than two decades later, he still leads a team of 450
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

      {/* What we build */}
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

      {/* Team */}
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
                    <CountUp value={450} />
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white/85">
                    professionals, one company
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-tight font-bold">
                    Our Team of 450 Professionals
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
                    Skyrise has a team of 450 people with decades of combined
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

      {/* Values */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group h-full rounded-[1.75rem] border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-30px_rgba(37,99,235,0.6)]">
                  <span className="font-display text-5xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_var(--line)] transition-all duration-500 group-hover:[-webkit-text-stroke:1.5px_#2563eb]">
                    0{i + 1}
                  </span>
                  <v.icon className="mt-6 size-8 text-brand" />
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-soft">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {[
              {
                icon: LuTarget,
                label: "Our mission",
                text: "Our mission is to build spaces that are strong, well designed and fairly priced, and to treat every client with honesty.",
              },
              {
                icon: LuTelescope,
                label: "Our vision",
                text: "Our vision is to be the most trusted construction and interior company in Delhi NCR, known for quality work and long-term relationships.",
              },
            ].map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-surface-2 p-8 sm:p-10">
                  <m.icon className="absolute -right-4 -top-4 size-40 text-brand/10" />
                  <p className="eyebrow">{m.label}</p>
                  <p className="relative mt-4 font-display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-snug font-semibold text-ink">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
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

      {/* FAQ */}
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

      {/* CTA */}
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
      </section>
    </main>
  )
}
