import { useEffect, useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { BRAND } from '../data/menu.js'

const LINKS = [['Home', '#home'], ['Our Story', '#story'], ['Menu', '#menu'], ['Visit Us', '#ritual'], ['Find Us', '#find']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__bar wrap">
        <a href="#home" className="nav__brand" aria-label={`${BRAND.name} home`}>
          <img src="/logo.jpeg" alt="" width="44" height="44" />
          <span>{BRAND.name}</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
        </nav>
        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>
      <nav className={`drawer ${open ? 'drawer--open' : ''}`} aria-label="Mobile">
        {LINKS.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
        <a className="btn btn--brass" href={BRAND.maps} target="_blank" rel="noreferrer">Get Directions</a>
      </nav>
    </header>
  )
}
