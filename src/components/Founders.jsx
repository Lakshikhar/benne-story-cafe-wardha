import { useState } from 'react'
import { FOUNDERS } from '../data/menu.js'

function Portrait({ f }) {
  const [failed, setFailed] = useState(false)
  const initials = f.name.split(' ').map((w) => w[0]).join('')
  return failed ? (
    <div className="founder__ph" role="img" aria-label={f.name}>{initials}</div>
  ) : (
    <img className="founder__img" src={`/founders/${f.photo}`} alt={`${f.name}, ${f.role} of Benne Story`} loading="lazy" decoding="async" width="160" height="160" onError={() => setFailed(true)} />
  )
}

export default function Founders() {
  return (
    <section id="founders" className="section founders">
      <div className="wrap">
        <h2 className="reveal">The people behind the table.</h2>
        <div className="founders__grid">
          {FOUNDERS.map((f) => (
            <article key={f.id} className="founder reveal">
              <Portrait f={f} />
              <h3>{f.name}</h3>
              <p className="founder__role">{f.role}</p>
              {f.bio.map((t) => <p key={t}>{t}</p>)}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
