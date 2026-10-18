import { Instagram, Phone, MapPin } from 'lucide-react'
import { BRAND } from '../data/menu.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__name">{BRAND.name}</p>
          <p>{BRAND.tag}</p>
          <p>Civil Lines, Wardha</p>
          <p className="footer__bio">Real Southern soul, zero wait. 100% pure veg. Dine-in.</p>
          <p>@bennestory2</p>
        </div>
        <ul className="footer__links">
          <li><a href={BRAND.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a></li>
          <li><a href={`tel:${BRAND.phone}`}><Phone size={18} /> {BRAND.phoneDisplay}</a></li>
          <li><a href={BRAND.maps} target="_blank" rel="noreferrer"><MapPin size={18} /> Location</a></li>
        </ul>
        <p className="footer__open">Idli · Dosa · Coffee</p>
      </div>
    </footer>
  )
}
