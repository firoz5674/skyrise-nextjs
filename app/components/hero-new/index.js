const lines = [
  'M20 380H500',
  'M70 380V250H130V150H400V250H330V380',
  'M130 250H330',
  'M110 138H420V150H110Z',
  'M400 250V380',
  'M100 285H200V350H100Z', 'M150 285V350',
  'M235 380V292H285V380',
  'M160 178H270V226H160Z', 'M215 178V226',
  'M300 178H370V226H300Z',
  'M70 405H330', 'M70 397V413', 'M330 397V413',
  'M450 380V138', 'M442 138H458', 'M442 380H458',
];

export default function HeroNew() {
  return (
    <section className="bg-blueprint text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Construction and interior design in Delhi NCR, from first sketch to final handover
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Skyrise designs and builds homes, offices and shops across Delhi, Noida, Gurugram, Ghaziabad and Faridabad. One team, one schedule, one point of contact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-saffron px-7 py-3.5 font-bold text-ink hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Book a free site visit
            </a>
            <a href="#services" className="rounded-full border-2 border-white/60 px-7 py-3 font-semibold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              See our services
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/80">
            <li>300+ projects delivered</li>
            <li>25+ years of experience</li>
            <li>Serving 10+ cities</li>
          </ul>
        </div>

        <figure className="border-2 border-white/70 bg-blue/60">
          <svg viewBox="0 0 520 440" role="img" aria-label="Architectural elevation drawing of a modern two-storey house" className="w-full" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round">
            <rect className="glow" x="160" y="178" width="110" height="48" fill="#FFB703" stroke="none" />
            {lines.map((d, i) => (
              <path key={d} d={d} pathLength="1" className="draw" style={{ animationDelay: `${i * 0.09}s` }} />
            ))}
            <g fill="#fff" stroke="none" fontSize="13" opacity=".85">
              <text x="200" y="432" textAnchor="middle">12.0 m</text>
              <text transform="translate(480 262) rotate(90)" textAnchor="middle">7.2 m</text>
            </g>
          </svg>
          <figcaption className="grid grid-cols-3 border-t-2 border-white/70 text-xs text-white/85">
            <span className="border-r border-white/50 p-3 font-bold">SKYRISE</span>
            <span className="border-r border-white/50 p-3">Elevation A-01</span>
            <span className="p-3">Since 1998</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
