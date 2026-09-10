import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'

const DURATION = 1200
const RADIUS = 34
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function Intro({ onFinish }) {
  const [percent, setPercent] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const startRef = useRef(null)

  useEffect(() => {
    let raf

    const tick = (timestamp) => {
      if (startRef.current === null) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / DURATION, 1)
      setPercent(Math.round(progress * 100))

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setLeaving(true)
        setTimeout(() => onFinish?.(), 900)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onFinish])

  const offset = CIRCUMFERENCE * (1 - percent / 100)

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-[#fdfaf7] transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        leaving ? 'pointer-events-none -translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,199,205,0.3),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(232,210,186,0.35),transparent_60%),radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.02),transparent_65%)]" />

      <img
        src={logo}
        alt="Samara Pires Beauty"
        className={`w-[98vw] max-w-[1400px] select-none transition-opacity duration-300 ease-out ${
          leaving ? 'opacity-0' : 'opacity-100 animate-[fadeIn_1.1s_ease-out]'
        }`}
        draggable="false"
      />

      <div className="absolute bottom-8 right-8 flex items-center gap-5 sm:bottom-12 sm:right-12">
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          <svg
            viewBox="0 0 80 80"
            className="h-full w-full -rotate-90"
          >
            <circle
              cx="40"
              cy="40"
              r={RADIUS}
              fill="none"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="5"
            />
            <circle
              cx="40"
              cy="40"
              r={RADIUS}
              fill="none"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 80ms linear' }}
            />
          </svg>
        </div>

        <span className="font-bold text-black text-4xl sm:text-5xl tabular-nums">
          {percent}%
        </span>
      </div>
    </div>
  )
}
