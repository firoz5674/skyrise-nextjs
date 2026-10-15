"use client";
import { useEffect, useState } from "react"
import { useInView } from "../../hooks/useInView"
export default function CountUp({ value, suffix = "", duration = 1600 }) {
  const { ref, inView } = useInView(0.4)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
