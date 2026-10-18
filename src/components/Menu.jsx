import { useState } from 'react'
import { Search } from 'lucide-react'
import MenuCard from './MenuCard.jsx'
import { MENU, CATEGORIES } from '../data/menu.js'

export default function Menu({ cart, onAdd }) {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const term = q.trim().toLowerCase()
  const items = MENU.filter((m) => (cat === 'All' || m.cat === cat) && (!term || `${m.name} ${m.desc}`.toLowerCase().includes(term)))
  return (
    <section id="menu" className="section menu">
      <div className="wrap">
        <div className="menu__head reveal">
          <h2>The menu</h2>
          <p>Hot off the tawa and the steamer. Pure vegetarian, all day. Tap “Add” to build your order.</p>
        </div>
        <div className="menu__tools reveal">
          <div className="tabs" role="tablist" aria-label="Menu categories">
            {CATEGORIES.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'tab tab--on' : 'tab'} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <label className="search"><Search size={18} /><input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dosa, coffee…" aria-label="Search the menu" /></label>
        </div>
        <div className="grid" key={cat + term}>
          {items.map((it, i) => <MenuCard key={it.id} item={it} index={i} qty={cart[it.id] || 0} onAdd={onAdd} />)}
        </div>
        {items.length === 0 && <p className="empty">Nothing matches “{q}”. Try another word.</p>}
      </div>
    </section>
  )
}
