import { MapPin, Phone } from 'lucide-react'
import { BRAND } from '../data/menu.js'

export default function Location() {
  return (
    <section id="find" className="section find">
      <div className="wrap find__grid">
        <div className="reveal">
          <h2>Find us in Civil Lines.</h2>
          <p className="find__addr">{BRAND.address}</p>
          <p>Look for us near the Head Post Office.</p>
          <p className="find__phone">Call or WhatsApp: <a href={`tel:${BRAND.phone}`}>{BRAND.phoneDisplay}</a></p>
          <div className="hero__cta">
            <a className="btn btn--green" href={BRAND.maps} target="_blank" rel="noreferrer"><MapPin size={18} /> Open in Maps</a>
            <a className="btn btn--outline" href={`tel:${BRAND.phone}`}><Phone size={18} /> Call Café</a>
          </div>
        </div>
        <div className="map reveal" role="img" aria-label="Illustrated map: café near the Head Post Office, Civil Lines, Wardha">
          <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="320" fill="#efe4cf" />
            <g stroke="#fbf6ec" strokeWidth="16" fill="none"><path d="M-10 200 L410 150" /><path d="M150 -10 L190 330" /><path d="M-10 70 L410 100" /></g>
            <g stroke="#fbf6ec" strokeWidth="8" fill="none"><path d="M280 -10 L300 330" /><path d="M-10 270 L410 290" /></g>
            <rect x="215" y="195" width="50" height="40" rx="6" fill="#d9c7a3" />
            <rect x="40" y="110" width="80" height="50" rx="6" fill="#c9d4bd" />
            <rect x="310" y="210" width="70" height="60" rx="6" fill="#c9d4bd" />
            <text x="205" y="252" fontSize="11" fill="#5a2000" fontFamily="sans-serif">Head Post Office</text>
            <text x="30" y="188" fontSize="11" fill="#5a2000" fontFamily="sans-serif">Civil Lines</text>
          </svg>
          <div className="pin"><MapPin size={22} /><span>{BRAND.name}</span></div>
        </div>
      </div>
    </section>
  )
}
