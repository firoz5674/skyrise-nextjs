import JsonLd from "../../components/JsonLd"
import TensilePage from "../../components/service-pages/tensile-structure-manufacturers-in-delhi"
import { breadcrumb, faqSchema, serviceSchema } from "../../lib/schema"
import { tensileStructureManufacturersInDelhi } from "../../data/tensile"

const path = "/services/tensile-structure-manufacturers-in-delhi"
const title = "Tensile Structure Manufacturers in Delhi NCR | Skyrise"
const description = "Skyrise designs and installs tensile structures in Delhi NCR: car parking shades, roofs, canopies, gazebos and domes. 25+ years. Get a free site visit!"

export const metadata = {
  title,
  description,
  alternates: { canonical: `https://www.skyriseconstruction.in${path}` },
  openGraph: {
    title,
    description,
    url: `https://www.skyriseconstruction.in${path}`,
    type: "website",
    locale: "en_IN",
  },
}

export default function TensileStructuresPage() {
  return <>
    <JsonLd graph={[
      serviceSchema({ name: "Tensile Structure Design and Installation", description, path }),
      breadcrumb([["Home", "/"], ["Services", "/services"], ["Tensile Structures", path]]),
      faqSchema(tensileStructureManufacturersInDelhi),
    ]} />
    <TensilePage />
  </>
}
