import { Handshake } from 'lucide-react'
import { Motif } from './Hero.jsx'
import { BRAND } from '../data/menu.js'

export default function Partnership() {
  return (
    <section className="partner">
      <div className="wrap partner__inner reveal">
        <div className="partner__motif" aria-hidden="true"><Motif /></div>
        <Handshake size={34} />
        <h2>Want to bring {BRAND.name} to your city?</h2>
        <p>We’re building a small family of South Indian cafés. If you love good food and good operations, let’s talk.</p>
        <a className="btn btn--brass" href={`tel:${BRAND.phone}`}>Partner with us</a>
      </div>
    </section>
  )
}
