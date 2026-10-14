import { LuArrowRight } from "react-icons/lu"
export default function AccentButton({
  href = "contact",
  children,
  tone = "brand",
  size = "md",
  className = "",
  onClick,
}) {
  const pill =
    tone === "brand"
      ? "bg-brand-gradient text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.7)] hover:shadow-[0_14px_40px_-6px_rgba(14,165,233,0.75)]"
      : "bg-white text-brand-deep shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
  const circle =
    tone === "brand"
      ? "bg-white text-brand-deep"
      : "bg-brand-gradient text-white"
  const dims =
    size === "md"
      ? "gap-5 pt-[8px] pb-[9px] pl-7 pr-1.5 text-[18px]"
      : "gap-3 py-1 pl-5 pr-1 text-sm"
  const dot = size === "md" ? "size-11" : "size-9"
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center rounded-full font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 ${dims} ${pill} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 ${dot} ${circle}`}
      >
        <LuArrowRight className="absolute size-5 transition-transform duration-300 group-hover:translate-x-8" />
        <LuArrowRight className="absolute size-5 -translate-x-8 transition-transform duration-300 group-hover:translate-x-0" />
      </span>
    </a>
  )
}
