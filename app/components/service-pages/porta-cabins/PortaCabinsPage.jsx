"use client";

import {
  LuArrowRight,
  LuCheck,
  LuClock3,
  LuHouse,
  LuMapPin,
  LuMove,
  LuPhone,
  LuRuler,
  LuShieldCheck,
  LuSnowflake,
  LuWrench,
} from "react-icons/lu";
import { portaCabinFaqs } from "../../../data/portaCabins";
import { images } from "../../../data/images";
import containerImage from "../../../assets/images/container.png";
import prefabImage from "../../../assets/images/prefab.png";
import InnerPageEnquiryForm from "../InnerPageEnquiryForm";
import InnerPageEnquiryIntro from "../InnerPageEnquiryIntro";

const types = [
  [
    "Site Office Cabins",
    "Sturdy cabins for engineers, supervisors and project teams.",
    "Construction sites, factories",
  ],
  [
    "Security Guard Cabins",
    "Compact cabins for gates and entry points.",
    "Societies, offices, plants, farmhouses",
  ],
  [
    "Labour Accommodation Cabins",
    "Safe rooms for workers, with space for beds and storage.",
    "Sites, factories, warehouses",
  ],
  [
    "Portable Office Cabins",
    "Professional cabins with partitions, electrical points and AC provision.",
    "Companies, startups, branch offices",
  ],
  [
    "Washroom and Toilet Cabins",
    "Ready-to-use cabins with fittings and drainage points.",
    "Sites, events, parks",
  ],
  [
    "Shop and Kiosk Cabins",
    "Attractive cabins for retail, food and service counters.",
    "Cafes, petrol pumps, markets",
  ],
  [
    "Farmhouse Cabins",
    "Weekend cabins planned with a bedroom, living area and washroom.",
    "Farmhouses, resorts, stay homes",
  ],
  [
    "Double-Storey Cabins",
    "Two-floor cabins that make better use of limited land.",
    "Large offices, sites, camps",
  ],
  [
    "Custom Cabins",
    "A layout, size and finish designed around your specific need.",
    "Special uses",
  ],
];
const uses = [
  "Construction Sites|Site offices, stores and labour rooms ready for project teams.",
  "Factories and Warehouses|Offices, supervisor rooms and rest areas within industrial sites.",
  "Societies and Gated Colonies|Guard cabins and maintenance rooms for gates and parks.",
  "Schools and Institutes|Temporary classrooms and offices while new buildings are built.",
  "Farmhouses and Resorts|Comfortable cabins for weekend stays and guest rooms.",
  "Petrol Pumps and Parking Areas|Small office, cash and rest cabins at highway and city sites.",
  "Cafes and Retail Outlets|Kiosk and shop cabins that can open quickly.",
  "Events and Exhibitions|Temporary offices, ticket counters and stalls.",
];
const build = [
  [
    LuShieldCheck,
    "Steel frame",
    "A strong, rust-protected steel frame carries the walls and roof and keeps the cabin stable when moved.",
  ],
  [
    LuSnowflake,
    "Insulated wall and roof panels",
    "PUF insulated sandwich panels or other options, selected to suit your budget and site conditions. See our PUF insulated panels service.",
  ],
  [
    LuHouse,
    "Flooring",
    "Durable options such as vinyl or tile, selected for how the cabin will be used.",
  ],
  [
    LuWrench,
    "Doors, windows and electrical",
    "Openings in the sizes you need, with wiring, lights, switches and provision for air conditioning.",
  ],
];
const process = [
  "Requirement and Site Check|We understand how you will use the cabin and check the site, access and ground.",
  "Design and Layout|You receive a floor plan with the size, doors, windows and partitions.",
  "Quote and Approval|We share a clear quote and schedule, then begin once you approve.",
  "Fabrication|The frame, panels and fittings are made to the approved design.",
  "Delivery and Installation|We transport the cabin, install it, check it and hand it over ready to use.",
];
const costs = [
  "Size|A larger floor area needs more steel, panels and work.",
  "Wall and roof panels|The type and thickness of insulation affect the price.",
  "Interior finish and fittings|Partitions, ceiling, electrical points, AC and furniture add to the cost.",
  "Single or double storey|A two-storey cabin needs a stronger frame and a staircase.",
  "Transport and site access|Distance, crane needs and road width affect delivery and installation.",
];

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`eyebrow font-bold uppercase tracking-[.16em] ${light ? "text-sky-300" : "text-brand"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-extrabold sm:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 max-w-2xl leading-relaxed text-lg ${light ? "text-white/70" : "text-soft"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default function PortaCabinsPage() {
  return (
    <main className="service-page-content">
      <section className="relative isolate overflow-hidden bg-[#0a0f24] text-white">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-30"
        />
        <div className="container-page relative grid min-h-[780px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <p className="eyebrow font-bold uppercase tracking-[.18em] text-sky-300">
              Designed, built and installed in Delhi NCR
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Porta Cabin Manufacturers in Delhi NCR
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/75">
              Site offices, security cabins, labour accommodation, shops and
              farmhouse cabins, made to your size and installed at your site.
              Skyrise has 25+ years of experience and 900+ projects across Delhi
              NCR.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#site-visit"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 font-bold text-white"
              >
                Get a Free Quote <LuArrowRight />
              </a>
              <a
                href="tel:+919312148849"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-bold text-white"
              >
                <LuPhone /> Call 93121 48849
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/70">
              {[
                "25+ years",
                "900+ projects",
                "120 professionals",
                "Delhi Â· Noida Â· Gurugram",
              ].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-2">
                  <LuCheck className="text-sky-300" />
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-sky-500/10 blur-2xl" />
            <img
              src={containerImage.src}
              alt="Prefabricated cabin structure for a site office"
              className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[460px]"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl border border-white/20 bg-[#111a36]/90 p-4 backdrop-blur">
              <p className="font-bold">Made for your site</p>
              <p className="mt-1 text-sm text-white/65">
                Custom size Â· insulated Â· install-ready
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="A practical space, made fast"
              title="What Is a Porta Cabin and Why Choose One?"
            />
            <p className="mt-5 leading-relaxed text-soft">
              A porta cabin, also called a portable cabin or prefabricated
              cabin, is a ready-made room built in a factory and delivered to
              your site. Because its walls, roof and floor are made in advance,
              installation is quick, there is little mess, and the cabin can be
              moved if your needs change. It is a practical choice for site
              offices, security posts, shops, labour housing and weekend
              farmhouses.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                LuClock3,
                "Quick installation",
                "The cabin is made in advance, so site work is short and clean.",
              ],
              [
                LuMove,
                "Movable",
                "Shift it to a new site or sell it on when your project ends.",
              ],
              [
                LuSnowflake,
                "Insulated and comfortable",
                "Insulated panels help keep the inside cooler in summer and warmer in winter.",
              ],
              [
                LuRuler,
                "Custom size and layout",
                "Choose the size, doors, windows and partitions to suit your use.",
              ],
            ].map(([Icon, title, text]) => (
              <article
                key={title}
                className="architectural-card rounded-3xl border border-line p-6"
              >
                <Icon className="size-7 text-brand" />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Built around the job"
            title="Types of Porta Cabins We Make in Delhi NCR"
            text="As a porta cabin manufacturer in Delhi, Skyrise makes these cabins and builds custom designs on request."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {types.map(([title, text, best], i) => (
              <article
                key={title}
                className="architectural-card rounded-3xl border border-line p-6"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-gradient font-mono font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-soft">
                  {text}
                </p>
                <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-soft">
                  <b className="text-brand">Best for:</b> {best}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Flexible applications"
            title="Where Porta Cabins Work Best"
            text="A portable room can support day-to-day operations, temporary needs and new projects across many settings."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {uses.map((line, i) => {
              const [title, text] = line.split("|");
              return (
                <article
                  key={title}
                  className="group overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={i % 2 === 0 ? images.houseDusk : containerImage.src}
                      alt={`${title} porta cabin use`}
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Built for the conditions"
            title="How Our Porta Cabins Are Built"
            text="A good cabin depends on its frame, walls and finishing. We recommend the right options after a site visit."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {build.map(([Icon, title, text]) => (
              <article
                key={title}
                className="architectural-card rounded-3xl border border-line p-6"
              >
                <Icon className="size-8 text-brand" />
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y relative isolate overflow-hidden bg-[#0a0f24] text-white">
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-40"
        />
        <div className="container-page relative">
          <SectionHeading
            light
            eyebrow="Experience from design to installation"
            title="Why Choose Skyrise for Porta Cabins in Delhi NCR"
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "Since 1998",
                "25+ years of construction experience and 900+ projects across Delhi NCR.",
              ],
              [
                "Made to your size",
                "We design the cabin around your space and how you will use it.",
              ],
              [
                "Comfortable in Delhi weather",
                "Insulation and ventilation are planned for hot summers and cold winters.",
              ],
              [
                "Interiors by our own team",
                "Add partitions, false ceiling, furniture or a pantry inside.",
              ],
              [
                "A team of 120",
                "Designers, engineers and site staff work together from design to installation.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[.05] p-5"
              >
                <LuCheck className="size-6 text-sky-300" />
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
          <SectionHeading
            eyebrow="From brief to handover"
            title="Our Porta Cabin Process"
            text="You review the layout, quote and schedule before fabrication starts."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((line, i) => {
              const [title, text] = line.split("|");
              return (
                <article
                  key={title}
                  className="architectural-card rounded-3xl border border-line p-5"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-gradient font-mono font-bold text-white">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">
                    {text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Plan your budget"
              title="What Decides the Cost of a Porta Cabin?"
              text="Every cabin is different, so we quote after a free site visit. These are the main factors:"
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {costs.map((line, i) => {
                const [title, text] = line.split("|");
                return (
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
                );
              })}
            </div>
          </div>
          <aside className="rounded-[2rem] bg-brand-gradient p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-white/70">
              Clear, project-specific pricing
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold">
              Get a cabin estimate
            </h3>
            <p className="mt-4 leading-relaxed text-white/80">
              We have not listed a starting rate because the price depends on
              your cabin specification and delivery site. Share your size and
              use to receive a clear quote.
            </p>
            <a
              href="#site-visit"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-brand-deep"
            >
              Request a quote <LuArrowRight />
            </a>
          </aside>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Local team, regional reach"
            title="Porta Cabin Supply and Installation Across Delhi NCR"
            text="From our office in New Delhi, we deliver and install cabins across the region."
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
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-5 font-display text-lg font-bold text-ink"
              >
                <LuMapPin className="text-brand" />
                {area}
              </a>
            ))}
          </div>
          <h3 className="mt-12 font-display text-2xl font-bold text-ink">
            Related services
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "PUF Insulated Panels",
                "Insulated panels used in our cabins.",
                "/services/puf-insulated-panels",
              ],
              [
                "Container Homes",
                "A steel-box alternative for homes and cafes.",
                "/services/container-homes",
              ],
              [
                "Prefabricated Modular Houses",
                "Permanent homes built fast.",
                "/services/prefabricated-modular-houses",
              ],
              [
                "Turnkey Interior Design",
                "Finish the inside of your cabin or office.",
                "/services/turnkey-interior-design-delhi-ncr",
              ],
            ].map(([title, text, href]) => (
              <a
                key={title}
                href={href}
                className="architectural-card rounded-2xl border border-line p-5 transition hover:border-brand/50"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  Explore service
                </span>
                <h4 className="mt-2 font-display text-lg font-bold text-ink">
                  {title}
                </h4>
                <p className="mt-2 text-sm text-soft">{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface-2/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Project inspiration"
            title="Porta Cabin Projects"
            text="Explore cabin types and applications. Contact us to discuss a design for your site."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                containerImage.src,
                "Prefabricated cabin structure for a site office",
              ],
              [prefabImage.src, "Portable cabin for a construction site"],
              [images.houseDusk, "Cabin concept for a farmhouse or resort"],
              [images.officeBoardroom, "Portable office interior planning"],
              [
                containerImage.src,
                "Insulated cabin structure with steel frame",
              ],
              [prefabImage.src, "Modular cabin layout for a project team"],
            ].map(([src, alt]) => (
              <figure
                key={alt}
                className="overflow-hidden rounded-3xl border border-line bg-surface"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <figcaption className="p-4 text-sm text-soft">{alt}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-sm text-soft">
            Images are illustrative. Ask us for photos of completed projects
            relevant to your cabin type.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Helpful answers"
            title="FAQs about Porta Cabins in Delhi NCR"
          />
          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {portaCabinFaqs.map(([question, answer]) => (
              <details
                key={question}
                className="architectural-card rounded-2xl border border-line p-5"
              >
                <summary className="cursor-pointer pr-4 font-display font-bold text-ink">
                  {question}
                </summary>
                <p className="mt-3 leading-relaxed text-soft">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="site-visit"
        className="section-y relative isolate overflow-hidden bg-[#0a0f24] text-white"
      >
        <div
          aria-hidden="true"
          className="blueprint-grid absolute inset-0 opacity-40"
        />
        <div className="container-page relative grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <InnerPageEnquiryIntro
            eyebrow="Start with a site visit"
            title="Need a Porta Cabin in Delhi NCR?"
            description="Tell us how you will use it and the size you need. We will get back to you to plan a free site visit and share a clear quote."
          />
          <div className="rounded-3xl bg-white p-6 text-ink shadow-2xl sm:p-8">
            <InnerPageEnquiryForm
              title="Request a Free Quote"
              submitLabel="Request Free Quote"
              categories={types.map(([title]) => title)}
              categoryLabel="Cabin type"
              categoryPlaceholder="Select cabin type"
              messagePlaceholder="Tell us about your porta cabin requirements"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
