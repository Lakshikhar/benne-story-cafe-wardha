import { useEffect, useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { BRAND } from './data/menu.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Founders from './components/Founders.jsx'
import Menu from './components/Menu.jsx'
import Picker from './components/Picker.jsx'
import Faq from './components/Faq.jsx'
import OrderTray from './components/OrderTray.jsx'
import Ritual from './components/Ritual.jsx'
import Location from './components/Location.jsx'
import Partnership from './components/Partnership.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [cart, setCart] = useState({})
  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  const dec = (id) => setCart((c) => {
    const n = { ...c }
    if (n[id] > 1) n[id] -= 1
    else delete n[id]
    return n
  })

  useEffect(() => {
    // Reveal-on-scroll
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    // Light parallax: one CSS variable, updated per frame
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const root = document.documentElement
        root.style.setProperty('--sy', String(Math.min(window.scrollY, 900)))
        root.style.setProperty('--p', String(window.scrollY / Math.max(1, root.scrollHeight - window.innerHeight)))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <>
      <div className="curtain" aria-hidden="true"><img src="/logo.jpeg" alt="" width="140" height="140" /></div>
      <div className="progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Founders />
        <Menu cart={cart} onAdd={add} />
        <Picker onAdd={add} />
        <Ritual />
        <Faq />
        <Location />
        <Partnership />
      </main>
      <Footer />
      <OrderTray cart={cart} onAdd={add} onDec={dec} onClear={() => setCart({})} />
      <div className="callbar">
        <a href={`tel:${BRAND.phone}`}><Phone size={18} /> Call</a>
        <a href={BRAND.maps} target="_blank" rel="noreferrer"><MapPin size={18} /> Directions</a>
      </div>
    </>
  )
}
