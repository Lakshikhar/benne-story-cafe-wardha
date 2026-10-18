import { useState } from 'react'
import { Sparkles, RefreshCw, Plus } from 'lucide-react'
import { MENU } from '../data/menu.js'

const MOODS = [['Quick bite', [8, 7, 5]], ['Proper meal', [1, 9, 6]], ['Bring the heat', [3, 2, 5]], ['Cool and light', [15, 12, 11]], ['Coffee time', [13, 14]]]

export default function Picker({ onAdd }) {
  const [mood, setMood] = useState(null)
  const [n, setN] = useState(0)
  const ids = mood === null ? [] : MOODS[mood][1]
  const item = ids.length ? MENU.find((m) => m.id === ids[n % ids.length]) : null
  return (
    <section className="section picker">
      <div className="wrap picker__inner reveal">
        <p className="picker__kicker"><Sparkles size={18} /> Can’t decide?</p>
        <h2>What are you in the mood for?</h2>
        <div className="picker__moods" role="group" aria-label="Pick a mood">
          {MOODS.map(([label], i) => (
            <button key={label} className={mood === i ? 'chip chip--on' : 'chip'} onClick={() => { setMood(i); setN(0) }}>{label}</button>
          ))}
        </div>
        <div className="picker__result" aria-live="polite">
          {item ? (
            <div className="pick" key={item.id}>
              <div><p className="pick__label">Try this</p><h3>{item.name}</h3><p>{item.desc}</p></div>
              <div className="pick__actions">
                <button className="btn btn--brass" onClick={() => onAdd(item.id)}><Plus size={18} /> Add to my order</button>
                {ids.length > 1 && <button className="btn btn--ghost" onClick={() => setN(n + 1)}><RefreshCw size={16} /> Another</button>}
              </div>
            </div>
          ) : <p className="picker__hint">Pick a mood and we’ll suggest something.</p>}
        </div>
      </div>
    </section>
  )
}
