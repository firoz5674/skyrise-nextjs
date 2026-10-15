export default function JsonLd({ graph }) {
  const data = { '@context': 'https://schema.org', '@graph': graph.filter(Boolean) };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
