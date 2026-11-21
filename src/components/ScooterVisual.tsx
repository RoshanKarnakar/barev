import { useId } from 'react'

interface Props {
  color?: string
  accent?: string
  className?: string
  spin?: boolean
  road?: boolean
}

// Original SVG scooter illustration used until real product photos are added.
export default function ScooterVisual({ color = '#0F4A35', accent = '#2EE68E', className = '', spin = true, road = false }: Props) {
  const uid = useId().replace(/:/g, '')
  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={265} r={50} fill="#0C0F0E" />
      <circle cx={cx} cy={265} r={36} fill="#2A312E" />
      <g className={spin ? 'wheel-spin' : undefined}>
        <circle cx={cx} cy={265} r={30} fill="none" stroke="#5B6662" strokeWidth={2} />
        {[0, 60, 120].map((a) => (
          <line key={a} x1={cx} y1={265 - 30} x2={cx} y2={265 + 30} stroke="#8A9591" strokeWidth={3} strokeLinecap="round" transform={`rotate(${a} ${cx} 265)`} />
        ))}
      </g>
      <circle cx={cx} cy={265} r={9} fill={accent} />
    </g>
  )
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label="BAR electric scooter illustration" className={className}>
      <defs>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor="#0A2B1F" />
        </linearGradient>
        <radialGradient id={`glow-${uid}`}>
          <stop offset="0" stopColor={accent} stopOpacity="0.55" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      {road && (
        <line x1="20" y1="324" x2="620" y2="324" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" strokeDasharray="40 20" className="road-dash" />
      )}
      <ellipse cx="320" cy="322" rx="250" ry="11" fill="#000" opacity="0.35" />
      <circle cx="505" cy="118" r="70" fill={`url(#glow-${uid})`} className="glow-pulse" />
      {wheel(150)}
      {wheel(490)}
      {/* swingarm + fork */}
      <path d="M150 265 L250 232" stroke="#2A312E" strokeWidth="12" strokeLinecap="round" />
      <path d="M478 150 L490 265" stroke="#3A4440" strokeWidth="10" strokeLinecap="round" />
      {/* rear body */}
      <path d="M86 218 C80 184 98 170 128 170 L268 166 L292 214 L276 234 C232 222 178 222 142 234 C112 240 92 234 86 218 Z" fill={`url(#body-${uid})`} />
      {/* seat */}
      <path d="M104 164 Q104 138 146 138 L252 138 Q276 138 272 160 L266 170 L112 176 Z" fill="#151917" />
      {/* floorboard */}
      <path d="M270 236 L412 236 L420 258 L276 258 Z" fill="#1D2220" />
      <rect x="288" y="246" width="116" height="4" rx="2" fill={accent} />
      {/* front shield */}
      <path d="M410 258 C404 206 418 150 440 98 L478 104 C462 152 466 204 476 238 L460 262 Z" fill={`url(#body-${uid})`} />
      {/* front fender */}
      <path d="M440 232 C452 196 520 196 540 232 L528 238 C514 214 466 214 454 240 Z" fill={color} />
      {/* stem, bars, headlight */}
      <path d="M462 102 L476 64" stroke="#2A312E" strokeWidth="11" strokeLinecap="round" />
      <path d="M452 58 L506 52" stroke="#151917" strokeWidth="9" strokeLinecap="round" />
      <path d="M492 112 L516 106 L520 126 L496 130 Z" fill={accent} />
      {/* tail light */}
      <rect x="84" y="196" width="14" height="6" rx="3" fill={accent} />
      {/* BAR mark on body */}
      <text x="150" y="212" fontFamily="'Barlow Condensed', Arial Narrow, sans-serif" fontWeight="800" fontSize="30" fill="#ffffff" fillOpacity="0.9" letterSpacing="3">BAR</text>
    </svg>
  )
}
