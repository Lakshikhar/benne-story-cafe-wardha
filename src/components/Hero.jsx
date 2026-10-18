import { MapPin, Leaf } from 'lucide-react'
import { BRAND } from '../data/menu.js'

// Kolam-inspired woven motif, reused across the site
export function Motif() {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <rect x="40" y="40" width="120" height="120" rx="26" />
      <rect x="62" y="62" width="76" height="76" rx="16" />
      <circle cx="100" cy="100" r="26" />
      <circle cx="100" cy="100" r="7" />
      <path d="M100 8c26 0 26 32 0 32S74 8 100 8ZM100 192c26 0 26-32 0-32s-26 32 0 32ZM8 100c0 26 32 26 32 0S8 74 8 100ZM192 100c0 26-32 26-32 0s32-26 32 0Z" />
      <path d="M40 40C14 40 14 14 40 14c0 0 0 26 0 26ZM160 40c26 0 26-26 0-26 0 0 0 26 0 26ZM40 160c-26 0-26 26 0 26 0 0 0-26 0-26ZM160 160c26 0 26 26 0 26 0 0 0-26 0-26Z" />
    </svg>
  )
}

const ROW = 'Hot dosas ✦ Soft idlis ✦ Degree coffee ✦ Fresh chutneys ✦ Pure vegetarian ✦ Open from 7 AM ✦ '

export default function Hero() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <section id="home" className="hero" onMouseMove={onMove}>
      <div className="hero__motif" aria-hidden="true"><Motif /></div>
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__date"><Leaf size={18} /> 100% Pure Veg · Wardha</p>
          <h1><span className="line"><span>Made with</span></span> <span className="line"><span>South in</span></span> <span className="line"><span>the soul.</span></span></h1>
          <p className="hero__lead">Classic South Indian roots, crafted for your daily rush. Hot bites, degree coffee, and zero compromise on taste.</p>
          <p className="hero__where"><MapPin size={18} /> Civil Lines, near Head Post Office, Wardha</p>
          <div className="hero__cta">
            <a className="btn btn--brass" href="#menu">Explore the Menu</a>
            <a className="btn btn--ghost" href={BRAND.maps} target="_blank" rel="noreferrer">Get Directions</a>
          </div>
          <ul className="chips"><li>From 7 AM</li><li>Degree coffee</li><li>Dine-in</li></ul>
        </div>
        <div className="hero__card">
          <span className="steam" aria-hidden="true" /><span className="steam" aria-hidden="true" /><span className="steam" aria-hidden="true" />
          <img src="/logo.jpeg" alt={`${BRAND.name} logo: idli, dosa, coffee`} width="420" height="420" />
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">{[0, 1].map((k) => <span key={k}>{ROW}</span>)}</div>
        <div className="marquee__track marquee__track--rev">{[0, 1].map((k) => <span key={k}>{ROW}</span>)}</div>
      </div>
    </section>
  )
}
