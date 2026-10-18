import { useState } from 'react'
import { Plus, Check } from 'lucide-react'
import { Motif } from './Hero.jsx'

export default function MenuCard({ item, index = 0, qty = 0, onAdd }) {
  const [failed, setFailed] = useState(false)
  const tilt = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    e.currentTarget.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`)
    e.currentTarget.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
  }
  const reset = (e) => { e.currentTarget.style.setProperty('--rx', '0deg'); e.currentTarget.style.setProperty('--ry', '0deg') }
  return (
    <article className="card" style={{ animationDelay: `${index * 70}ms` }} onMouseMove={tilt} onMouseLeave={reset}>
      <div className="card__img">
        <span className="veg" title="Pure vegetarian" aria-label="Pure vegetarian" />
        {failed ? (
          <div className="card__ph" role="img" aria-label={item.name}><Motif /><span>{item.name}</span></div>
        ) : (
          <img src={`/images/${item.image}`} alt={`${item.name} at Benne Story, Wardha`} loading="lazy" decoding="async" width="480" height="360" onError={() => setFailed(true)} />
        )}
      </div>
      <div className="card__body">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <button className={qty ? 'add add--on' : 'add'} onClick={() => onAdd(item.id)}>
          {qty ? <><Check size={16} /> Added · {qty}</> : <><Plus size={16} /> Add to my order</>}
        </button>
      </div>
    </article>
  )
}
