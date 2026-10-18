import { notFound } from "next/navigation"
import UnderConstruction from "../../components/ui/UnderConstruction"

const cities = ["delhi", "noida", "gurugram"]

export function generateStaticParams() {
  return cities.map((city) => ({ city }))
}

export default async function AreaUnderConstruction({ params }) {
  const { city } = await params
  if (!cities.includes(city)) notFound()
  return <UnderConstruction />
}
