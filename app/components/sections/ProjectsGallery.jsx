import { LuArrowUpRight } from "react-icons/lu"
import { projects, projectsContent } from "../../data/content"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
export default function ProjectsGallery() {
  return (
    <section id="projects" className="section-y">
      <div className="container-page">
        <SectionHeading title={projectsContent.title} />
        <div className="mt-12 grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.alt}
              delay={(i % 3) * 90}
              className={`${p.cls} h-full`}
            >
              <figure className="group relative h-full overflow-hidden rounded-3xl bg-surface-2">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                  <span className="font-display text-xl leading-tight font-semibold">
                    {p.alt}
                  </span>
                  <span className="grid size-10 shrink-0 translate-y-3 place-items-center rounded-full bg-white text-brand-deep opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <LuArrowUpRight className="size-5" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
