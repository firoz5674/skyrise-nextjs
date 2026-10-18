import { servicePageSlugs } from "./data/servicePageSlugs"

const baseUrl = "https://www.skyriseconstruction.in"

const staticRoutes = [
  { route: "", priority: 1 },
  { route: "/about", priority: 0.8 },
  { route: "/contact", priority: 0.8 },
  { route: "/services", priority: 0.8 },
  { route: "/projects", priority: 0.7 },
  { route: "/areas/delhi", priority: 0.7 },
  { route: "/areas/noida", priority: 0.7 },
  { route: "/areas/gurugram", priority: 0.7 },
  { route: "/services/tensile-structure-manufacturers-in-delhi", priority: 0.8 },
]

export default function sitemap() {
  const serviceRoutes = servicePageSlugs.map((slug) => ({
    route: `/services/${slug}`,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority,
  }))
}
