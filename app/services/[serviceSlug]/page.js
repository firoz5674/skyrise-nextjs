import { notFound } from "next/navigation"
import { unfinishedServicePages } from "../../components/service-pages"
import { servicePageSlugs } from "../../data/servicePageSlugs"

export const metadata = {
  title: "We are currently designing this page | Skyrise",
}

export function generateStaticParams() {
  return servicePageSlugs.map((serviceSlug) => ({ serviceSlug }))
}

export default async function ServiceUnderConstruction({ params }) {
  const { serviceSlug } = await params
  const ServicePage = unfinishedServicePages[serviceSlug]
  if (!servicePageSlugs.includes(serviceSlug) || !ServicePage) notFound()
  return <ServicePage />
}
