"use client"

import { useState } from "react"
import {
  LuArrowDownRight,
  LuArrowRight,
  LuBuilding2,
  LuCheck,
  LuChevronDown,
  LuClock,
  LuCloudSun,
  LuHammer,
  LuLayers,
  LuMapPin,
  LuMoveHorizontal,
  LuPaintbrush,
  LuPhone,
  LuRuler,
  LuSparkles,
  LuTent,
  LuUsers,
  LuWarehouse,
  LuWind,
} from "react-icons/lu"
import { images } from "../../../data/images"
import { tensileStructureManufacturersInDelhi } from "../../../data/tensile"

const benefits = [
  {
    icon: LuCloudSun,
    title: "Shade and rain cover",
    text: "Protect vehicles, people and outdoor furniture from strong sun and rain.",
  },
  {
    icon: LuClock,
    title: "Faster installation",
    text: "The fabric and frame are prepared in advance, helping keep on-site work efficient.",
  },
  {
    icon: LuMoveHorizontal,
    title: "Wide, open spans",
    text: "Cover larger areas with fewer columns and keep the space underneath useful.",
  },
  {
    icon: LuSparkles,
    title: "A modern landmark",
    text: "Sculpted forms and colour can make a gate, entrance or lawn stand out.",
  },
]

const structures = [
  {
    icon: LuWarehouse,
    title: "Tensile Car Parking Structures",
    text: "Rows of shaded bays help protect cars and bikes from heat and rain.",
    best: "Societies, offices, malls and showrooms",
  },
  {
    icon: LuTent,
    title: "Tensile Roofs",
    text: "Roof coverings create useful shelter over larger open areas.",
    best: "Schools, sports areas, terraces and restaurants",
  },
  {
    icon: LuBuilding2,
    title: "Canopies and Entrance Covers",
    text: "A defined cover for gates, doorways and passenger drop-off points.",
    best: "Hotels, hospitals, offices and villas",
  },
  {
    icon: LuSparkles,
    title: "Gazebos",
    text: "Outdoor seating shelters with a light, contemporary profile.",
    best: "Lawns, resorts, cafes and farmhouses",
  },
  {
    icon: LuLayers,
    title: "Domes and Cones",
    text: "Distinctive roof forms that can become a focal point on site.",
    best: "Entrances, banquets, parks and showrooms",
  },
  {
    icon: LuCloudSun,
    title: "Umbrella Structures",
    text: "Independent shade units that can be arranged around seating.",
    best: "Pool sides, terraces and cafes",
  },
  {
    icon: LuMoveHorizontal,
    title: "Walkway Covers",
    text: "Long covered paths help people move between buildings in shade.",
    best: "Campuses, hospitals and malls",
  },
  {
    icon: LuRuler,
    title: "Barrel Vault and Arch Structures",
    text: "Curved roof profiles span long, wide spaces with a clear silhouette.",
    best: "Event spaces, parking and play areas",
  },
  {
    icon: LuPaintbrush,
    title: "Custom Shapes",
    text: "A site-specific shape, fabric and frame developed around your brief.",
    best: "Signature projects",
  },
]

const applications = [
  [
    "Parking Areas",
    "Housing societies, offices, malls and showrooms use tensile shades to keep vehicles cooler.",
  ],
  [
    "Terraces and Pools",
    "Shade makes rooftops and pool areas more comfortable to use through the year.",
  ],
  [
    "Lawns and Event Spaces",
    "Canopies add cover for weddings, parties and outdoor gatherings.",
  ],
  [
    "Restaurants and Cafes",
    "Outdoor seating can remain usable in sun and light rain.",
  ],
  [
    "Hotels and Resorts",
    "Entrances, pool sides and gardens gain a clear visual feature.",
  ],
  [
    "Schools and Sports Areas",
    "Assembly areas, play zones and courts get cover without a heavy roof.",
  ],
  [
    "Homes and Villas",
    "Driveways, lawns and terraces gain a shaded outdoor corner.",
  ],
  [
    "Industrial Sites",
    "Loading bays, truck parking and rest areas can receive quick, practical cover.",
  ],
]

const materials = [
  {
    title: "PVC-Coated Polyester",
    text: "A common option that is strong, waterproof and UV-resistant, with a range of colours. Fire-retardant grades can be specified where required.",
    tag: "Versatile cover",
  },
  {
    title: "PTFE or PVDF-Coated Fabric",
    text: "A premium option for larger or long-life projects, designed to resist sun and dirt and retain its appearance over time.",
    tag: "Premium projects",
  },
  {
    title: "HDPE Shade Fabric",
    text: "A breathable, lower-cost fabric that lets air pass through. Useful where shade matters more than rain protection.",
    tag: "Airflow and shade",
  },
  {
    title: "Steel Frame and Fittings",
    text: "Steel pipes, cables, connectors and anchor plates are selected for the design and finished with galvanising or paint to resist corrosion.",
    tag: "Engineered support",
  },
]

const reasons = [
  [
    LuClock,
    "Since 1998",
    "More than 25 years of construction experience and 900+ projects inform how we plan each site.",
  ],
  [
    LuUsers,
    "One team, design to installation",
    "Design, 3D views, fabrication and installation stay coordinated through one company.",
  ],
  [
    LuWind,
    "Designed for Delhi weather",
    "Fabric, frame and fixing are chosen to suit summer heat, monsoon rain and site wind conditions.",
  ],
  [
    LuCheck,
    "A clear quote",
    "You can review the scope, selected materials and schedule before work begins.",
  ],
  [
    LuBuilding2,
    "A local team",
    "Our Delhi-based team supports measurement, installation and handover across the region.",
  ],
]

const process = [
  [
    "Site visit and measurement",
    "We measure the area, check ground conditions and understand how you plan to use the space.",
  ],
  [
    "Design and 3D view",
    "Review the proposed shape, colour and layout before anything is fabricated.",
  ],
  [
    "Quote and approval",
    "Get a clear quote and schedule. Fabrication starts once you approve the plan.",
  ],
  [
    "Fabrication",
    "The frame and fabric are prepared to match the approved design and measurements.",
  ],
  [
    "Installation and handover",
    "Our team installs the structure, checks tension and fixings, then shares care guidance.",
  ],
]

const costFactors = [
  [
    "Area and span",
    "A larger covered area and longer span need more fabric and a stronger frame.",
  ],
  [
    "Shape and design",
    "Simple shapes generally need less fabrication than curved or custom designs.",
  ],
  [
    "Fabric grade",
    "PVC, PTFE and HDPE fabrics have different properties and costs.",
  ],
  [
    "Height and site access",
    "Tall structures and difficult access can add to frame and installation work.",
  ],
  [
    "Foundation",
    "Soil and ground conditions affect the footing and anchoring requirements.",
  ],
]

const gallery = [
  [images.shadeSails, "Tensile shade structure"],
  [images.tensileRoofs, "Fabric roof and canopy structure"],
  [images.houseDusk, "Outdoor tensile shelter"],
  [images.homeInterior, "Covered outdoor seating area"],
  [images.officeBoardroom, "Open-span roof structure"],
  [images.siteBlueprints, "Covered walkway structure"],
]

const related = [
  [
    "Porta Cabins",
    "Quick, movable cabins for site offices and shops.",
    "/services/porta-cabins",
  ],
  [
    "PUF Insulated Panels",
    "Insulated structures for offices, cabins and utility spaces.",
    "/services/puf-insulated-panels",
  ],
  [
    "Container Homes",
    "Modern modular spaces for farmhouses, cafes and offices.",
    "/services/container-homes",
  ],
  [
    "Turnkey Interior Design",
    "Finish the space beneath your new shade with one team.",
    "/services/turnkey-interior-design-delhi-ncr",
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

export default function TensilePage() {
  const [openFaq, setOpenFaq] = useState(0)
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
      message: form.message.trim() ? "" : "Please enter a message.",
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
          aria-hidden
          className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="eyebrow mb-5">Tensile structures · Delhi NCR</p>
            <h1
              style={{ lineHeight: "calc(0.98em + 10px)" }}
              className="text-gradient text-[clamp(2.6rem,6.5vw,4.4rem)] font-extrabold"
            >
              Tensile Structure Manufacturers in Delhi NCR
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
              Car parking shades, roofs, canopies, gazebos and domes, designed,
              made and installed by one team. Skyrise brings 25+ years of
              experience and 900+ projects across Delhi NCR.
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
              ].map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-line bg-surface/80 px-3.5 py-2 text-sm font-semibold text-soft"
                >
                  {stat}
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
                src={images.shadeSails}
                alt="Tensile car parking structure in Delhi"
                className="pointer-events-none aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f24]/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                    Designed around your site
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold">
                    Shade with a signature shape
                  </p>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                  <LuArrowDownRight className="size-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-line bg-surface/50">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="A lighter way to cover a space"
              title="What Is a Tensile Structure and Why Choose One?"
            />
            <p className="mt-5 leading-relaxed text-soft">
              A tensile structure is a lightweight roof made from stretched
              fabric membrane, held in shape by a steel frame and cables.
              Compared with a concrete or sheet roof, it can cover wide spans
              with fewer columns, go up faster and give a building a sculpted,
              modern look. It is a practical choice for parking, lawns,
              restaurants, schools and entrances across Delhi NCR.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="architectural-card group rounded-3xl border border-line p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_18px_45px_-28px_rgba(37,99,235,.6)]"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="section-y scroll-mt-28">
        <div className="container-page">
          <SectionTitle
            eyebrow="Made to fit the site"
            title="Types of Tensile Structures We Make in Delhi NCR"
            text="As a tensile structure manufacturer in Delhi, Skyrise makes the following structures and develops custom shapes around your site and brief."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {structures.map((item, i) => (
              <article
                key={item.title}
                className="architectural-card group relative overflow-hidden rounded-3xl border border-line p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_22px_55px_-30px_rgba(37,99,235,.6)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-4 font-mono text-5xl font-bold text-brand/[0.07]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-blue-500/20">
                  <item.icon className="size-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 min-h-12 leading-relaxed text-soft">
                  {item.text}
                </p>
                <p className="mt-5 border-t border-line pt-4 text-sm">
                  <span className="font-semibold text-brand">Best for </span>
                  <span className="text-soft">{item.best}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Designed for real life"
            title="Where Tensile Structures Work Best"
            text="Tensile shade can turn exposed areas into comfortable, useful spaces for homes, businesses and public places."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map(([title, text], i) => (
              <article
                key={title}
                className="architectural-card group relative min-h-52 overflow-hidden rounded-3xl border border-line"
              >
                <img
                  src={gallery[i % gallery.length][0]}
                  alt=""
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 size-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-20"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-sky-400/10 opacity-70 transition-opacity group-hover:opacity-100"
                />
                <div className="relative z-10 flex h-full flex-col p-5">
                  <span className="font-mono text-sm text-brand">0{i + 1}</span>
                  <h3 className="mt-auto pt-8 font-display text-xl font-bold text-ink">
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Choose the right specification"
              title="Fabric and Frame Choices"
              text="The fabric and frame affect the life, appearance and performance of your structure. We recommend a suitable grade after a site visit."
            />
            <span className="hidden shrink-0 rounded-full border border-line px-4 py-2 text-sm font-semibold text-soft md:inline-flex">
              Materials selected for your use
            </span>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {materials.map((item, i) => (
              <article
                key={item.title}
                className="architectural-card rounded-3xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none mb-6 h-20 overflow-hidden rounded-2xl ${i === 0 ? "bg-[repeating-linear-gradient(135deg,#e2e8f0_0_5px,#f8fafc_5px_10px)]" : i === 1 ? "bg-[repeating-linear-gradient(45deg,#dbeafe_0_4px,#eff6ff_4px_8px)]" : i === 2 ? "bg-[radial-gradient(circle_at_3px_3px,#64748b_1px,transparent_1.5px)] [background-size:9px_9px] bg-slate-100 dark:bg-slate-800" : "bg-[linear-gradient(135deg,#64748b,#cbd5e1_45%,#475569)]"}`}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  {item.tag}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">
                  {item.text}
                </p>
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-blue-600/25 blur-[120px]"
        />
        <div className="container-page relative z-10">
          <SectionTitle
            light
            eyebrow="Built on experience"
            title="Why Choose Skyrise for Tensile Structures in Delhi NCR"
            text="From the first sketch to installation, one local team keeps the design, materials and site work connected."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map(([Icon, title, text]) => (
              <article
                key={title}
                className="architectural-card rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-white/[0.09]"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-sky-400/15 text-sky-300">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/50">
            Every project is assessed on its site conditions and intended use.
            Final design, materials and installation details are confirmed with
            you before work starts.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionTitle
            eyebrow="A considered sequence"
            title="Our Tensile Structure Process"
            text="We plan the structure with you before fabrication, then carry the approved design through to handover."
          />
          <div className="relative mt-12 grid gap-4 md:grid-cols-5">
            {process.map(([title, text], i) => (
              <article
                key={title}
                className="relative rounded-3xl border border-line bg-surface p-5"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-gradient font-mono text-lg font-bold text-white">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{text}</p>
                {i < process.length - 1 && (
                  <LuArrowRight className="absolute -right-3 top-9 z-10 hidden size-6 rounded-full bg-page p-1 text-brand md:block" />
                )}
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
              title="What Decides the Cost of a Tensile Structure?"
              text="No two sites are the same, so we prepare a quote after a free site visit. These are the main factors that shape the scope and cost."
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {costFactors.map(([title, text], i) => (
                <article
                  key={title}
                  className="architectural-card flex gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-brand/50"
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
            <div className="pointer-events-none blueprint-grid absolute inset-0 opacity-35" />
            <div className="relative">
              <span className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10">
                <LuRuler className="size-7" />
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-white/70">
                A quote shaped by your site
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold">
                Get a clear project estimate
              </h3>
              <p className="mt-4 leading-relaxed text-white/80">
                We’ll measure the span, discuss fabric options and explain the
                frame and foundation requirements before sharing your quote.
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
            title="Tensile Structure Installation Across Delhi NCR"
            text="From our office in New Delhi, we install tensile structures across the region. Tell us about your location and we’ll discuss your site requirements."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Delhi", "Noida and Greater Noida", "Gurugram (Gurgaon)"].map(
              (area) => (
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
              ),
            )}
          </div>
          <p className="mt-3 text-sm text-soft">
            We also take projects in Ghaziabad, Faridabad and other nearby
            areas. Contact us to discuss your site.
          </p>
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="See what’s possible"
              title="Tensile Structure Ideas"
              text="A look at tensile shades, roofs and outdoor structures for different settings."
            />
            <a
              href="/projects"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-brand"
            >
              More projects <LuArrowRight />
            </a>
          </div>
          <div className="mt-9 grid auto-rows-[190px] gap-3 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-12">
            {gallery.map(([src, alt], i) => (
              <figure
                key={alt}
                className={`group relative overflow-hidden rounded-3xl bg-surface ${i === 0 ? "sm:row-span-2 lg:col-span-5 lg:row-span-2" : i === 1 || i === 4 ? "lg:col-span-4" : "lg:col-span-3"}`}
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="pointer-events-none size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f24]/85 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 font-semibold text-white sm:p-5">
                  {alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-soft">
            Images are illustrative. Contact our team for available project
            references.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionTitle
              eyebrow="Helpful answers"
              title="FAQs about Tensile Structures in Delhi NCR"
              text="Answers to common questions about materials, timelines, costs and installation."
            />
            <a
              href="#site-visit"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand"
            >
              Ask us about your site <LuArrowRight />
            </a>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {tensileStructureManufacturersInDelhi.map(
              ([question, answer], i) => {
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
              },
            )}
          </div>
        </div>
      </section>

      <section
        id="site-visit"
        className="relative isolate scroll-mt-24 overflow-hidden bg-[#0a0f24] py-16 text-white sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none blueprint-grid absolute inset-0 opacity-30"
        />
        <div className="container-page relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="eyebrow !text-sky-300">Start with a site visit</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.23] font-bold">
              Planning a Tensile Structure in Delhi NCR?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Tell us about your site. We’ll get back to you to plan a free site
              visit and share a clear quote.
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
                <LuMapPin className="size-5 text-sky-300" />C 373 Ground Floor,
                DDA Flats, Jasola Vihar, Sarita Vihar, New Delhi 110025
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-surface p-6 text-ink shadow-[0_30px_90px_-35px_rgba(14,165,233,.4)] sm:p-8">
            <h3 className="font-display text-2xl font-bold">
              Request a free site visit
            </h3>
            <p className="mt-2 text-md text-soft">
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
                  Our team will contact you soon to discuss your site visit.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm({
                      name: "",
                      mobile: "",
                      city: "",
                      structureType: "",
                      area: "",
                      message: "",
                      website: "",
                    })
                    setFormError("")
                    setFormErrors({})
                    setFormState("idle")
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
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
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none transition-colors focus:border-brand"
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
                    pattern="[0-9+() -]{10,18}"
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none transition-colors focus:border-brand"
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
                    required
                    name="city"
                    value={form.city}
                    onChange={updateForm}
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none transition-colors focus:border-brand"
                    placeholder="e.g. Delhi"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Structure type
                  <select
                    name="structureType"
                    value={form.structureType}
                    onChange={updateForm}
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none transition-colors focus:border-brand"
                  >
                    <option value="">Select Service</option>
                    {structures.map(({ title }) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
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
                    className="w-full rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none transition-colors focus:border-brand"
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
                    className="w-full resize-y rounded-xl border border-line bg-page px-4 py-3 font-normal text-ink outline-none transition-colors focus:border-brand"
                    placeholder="Tell us a little about your site"
                  />
                  {formErrors.message && (
                    <span
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {formErrors.message}
                    </span>
                  )}
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
    </main>
  )
}
