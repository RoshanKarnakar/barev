import { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'

export default function Logo({ className = '' }: { className?: string }) {
  const [hasImage, setHasImage] = useState(true)
  return (
    <Link to="/" aria-label={`${siteConfig.name} home`} className={`inline-flex items-center gap-2.5 ${className}`}>
      {hasImage ? (
        <img
          src={siteConfig.logoSrc}
          alt={siteConfig.name}
          className="h-9 w-auto"
          onError={() => setHasImage(false)}
        />
      ) : (
        <>
          <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
            <rect width="40" height="40" rx="8" fill="#2EE68E" />
            <path d="M22.5 6 10 23h8l-2.5 11L30 16h-8.5z" fill="#151917" />
          </svg>
          <span className="font-display text-3xl font-extrabold leading-none tracking-wide text-white">BAR</span>
        </>
      )}
    </Link>
  )
}
