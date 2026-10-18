import JsonLd from "../../components/JsonLd"
import TurnkeyInteriorPage from "../../components/service-pages/turnkey-interior-design/TurnkeyInteriorPage"
import { turnkeyInteriorFaqs } from "../../data/turnkeyInterior"
import { breadcrumb, faqSchema, serviceSchema } from "../../lib/schema"

const path = "/services/turnkey-interior-design-delhi-ncr"
const title = "Turnkey Interior Designers in Delhi NCR | Skyrise"
const description = "Skyrise offers turnkey interior design in Delhi NCR for homes, offices and shops: design, 3D views, execution and handover. Get a free site visit today!"

export const metadata = {
  title,
  description,
  alternates: { canonical: `https://www.skyriseconstruction.in${path}` },
  openGraph: { title, description, url: `https://www.skyriseconstruction.in${path}`, type: "website", locale: "en_IN" },
}

export default function TurnkeyInteriorDesignPage() {
  return <>
    <JsonLd graph={[
      serviceSchema({ name: "Turnkey Interior Design", description, path }),
      breadcrumb([["Home", "/"], ["Services", "/services"], ["Turnkey Interior Design", path]]),
      faqSchema(turnkeyInteriorFaqs),
    ]} />
    <TurnkeyInteriorPage />
  </>
}
