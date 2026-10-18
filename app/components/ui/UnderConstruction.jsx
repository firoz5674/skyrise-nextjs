export default function UnderConstruction() {
  return (
    <main className="relative isolate min-h-[72vh] overflow-hidden pt-28 lg:pt-36">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-24 size-[26rem] rounded-full bg-sky-400/15 blur-[110px]" />
      <div className="container-page relative z-10 grid min-h-[60vh] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h1 style={{ lineHeight: "calc(0.98em + 10px)" }} className="text-gradient text-[clamp(2.6rem,6.5vw,4.4rem)] font-extrabold">
            We are currently designing this page
          </h1>
          <p className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">
            We are working on it!
          </p>
        </div>
        <div aria-hidden="true" className="mx-auto w-full max-w-xl">
          <svg viewBox="0 0 600 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-[0_24px_50px_rgba(37,99,235,.14)]">
            <rect x="35" y="35" width="530" height="370" rx="36" className="fill-surface stroke-line" strokeWidth="2" />
            <path d="M78 355H520" className="stroke-line" strokeWidth="3" strokeLinecap="round" />
            <path d="M133 355V243L202 206V355M202 355V173L270 137V355M270 355V224L338 188V355" className="stroke-brand" strokeWidth="5" strokeLinejoin="round" />
            <path d="M150 260H185M150 284H185M150 308H185M220 194H253M220 220H253M220 246H253M220 272H253M220 298H253M287 242H321M287 268H321M287 294H321" className="stroke-brand/40" strokeWidth="4" strokeLinecap="round" />
            <path d="M111 182H341L304 151H166L111 182Z" className="fill-brand/10 stroke-brand" strokeWidth="4" strokeLinejoin="round" />
            <path d="M161 182V125H299V151M161 125L198 92H336V151M336 151V182" className="stroke-brand" strokeWidth="5" strokeLinejoin="round" />
            <path d="M336 151H424M424 151V201M424 151L472 151" className="stroke-ink" strokeWidth="5" strokeLinecap="round" />
            <path d="M409 202C409 194 416 187 424 187C432 187 439 194 439 202" className="stroke-sky-500" strokeWidth="5" strokeLinecap="round" />
            <path d="M385 216H463L448 236H400L385 216Z" className="fill-sky-400/20 stroke-sky-500" strokeWidth="4" strokeLinejoin="round" />
            <path d="M393 236L382 295M455 236L467 295M382 295H467" className="stroke-sky-500" strokeWidth="4" strokeLinecap="round" />
            <circle cx="105" cy="100" r="8" className="fill-sky-400" />
            <circle cx="490" cy="116" r="12" className="fill-brand/15 stroke-brand/50" strokeWidth="3" />
            <path d="M76 142H112M94 124V160M476 321H512M494 303V339" className="stroke-brand/40" strokeWidth="3" strokeLinecap="round" />
            <path d="M139 355L119 386H174L190 355M329 355L312 386H368L350 355" className="fill-sky-400/10 stroke-line" strokeWidth="3" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </main>
  )
}
