import JsonLd from "../../components/JsonLd"
import PortaCabinsPage from "../../components/service-pages/porta-cabins"
import { breadcrumb, faqSchema, serviceSchema } from "../../lib/schema"
import { portaCabinFaqs } from "../../data/portaCabins"

const path = "/services/porta-cabin-manufacturers-in-delhi"
const title = "Porta Cabin Manufacturers in Delhi NCR | Skyrise"
const description = "Skyrise makes porta cabins in Delhi NCR: site offices, security cabins, labour accommodation and more. PUF insulated, custom sizes. Get a free quote today!"

export const metadata = {
  title,
  description,
  alternates: { canonical: `https://www.skyriseconstruction.in${path}` },
  openGraph: { title, description, url: `https://www.skyriseconstruction.in${path}`, type: "website", locale: "en_IN" },
}

export default function PortaCabinManufacturersPage() {
  return <>
    <JsonLd graph={[
      serviceSchema({ name: "Porta Cabin Design, Manufacture and Installation", description, path }),
      breadcrumb([["Home", "/"], ["Services", "/services"], ["Porta Cabins", path]]),
      faqSchema(portaCabinFaqs),
    ]} />
    <PortaCabinsPage />
  </>
}
