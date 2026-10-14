import Reveal from "./Reveal"
export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className = "",
}) {
  return (
    <Reveal
      className={`${
        align === "center" ? "mx-auto text-center" : ""
      } max-w-4xl ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-gradient text-[clamp(1.4rem,4vw,3rem)] leading-[1.4] md:leading-[1.23] font-bold">
        {title}
      </h2>
      {text && (
        <p className="mt-5 max-w-3xl text-xl leading-relaxed text-soft">
          {text}
        </p>
      )}
    </Reveal>
  )
}
