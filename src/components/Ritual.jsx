import { Sunrise, Timer, Leaf } from 'lucide-react'

const POINTS = [
  [Sunrise, 'Fresh from 7 AM', 'Batter ground, chutneys made, first tawa hot.'],
  [Timer, 'Fast, never rushed', 'Quick enough for your break, calm enough to linger.'],
  [Leaf, 'Pure vegetarian', 'Every dish, every day.'],
]

export default function Ritual() {
  return (
    <section id="ritual" className="ritual">
      <div className="wrap">
        <h2 className="reveal">Your table. Your time.</h2>
        <ul className="ritual__points">
          {POINTS.map(([Icon, t, d], i) => (
            <li key={t} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}><Icon size={28} /><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ul>
      </div>
      <div className="coffee" aria-label="Degree coffee">
        <span className="coffee__word" aria-hidden="true">DEGREE COFFEE</span>
        <div className="wrap coffee__grid">
          <div className="coffee__inner reveal">
            <h3>Degree coffee.</h3>
            <p>Thick decoction, hot milk, a high pour for the froth. Served in a steel tumbler and davara, the way it’s meant to be.</p>
          </div>
          <svg className="cup reveal" viewBox="0 0 240 260" role="img" aria-label="Filter coffee in a steel tumbler and davara">
            <defs>
              <linearGradient id="steel" x1="0" x2="1"><stop offset="0" stopColor="#9a9486" /><stop offset=".4" stopColor="#f1ede2" /><stop offset="1" stopColor="#8a8476" /></linearGradient>
            </defs>
            <path className="steam-line" d="M92 96C80 78 104 66 92 46" />
            <path className="steam-line" d="M120 92C108 72 132 60 120 38" />
            <path className="steam-line" d="M148 96C136 78 160 66 148 46" />
            <path d="M62 112h116l-12 100q-2 12-14 12H88q-12 0-14-12Z" fill="url(#steel)" />
            <ellipse cx="120" cy="112" rx="58" ry="9" fill="#2a1005" stroke="#d8d2c6" strokeWidth="3" />
            <ellipse cx="120" cy="110" rx="46" ry="5" fill="#9b5a24" />
            <path d="M34 210Q34 248 120 248T206 210Z" fill="url(#steel)" />
            <path d="M34 210h172" stroke="#fbf6ec" strokeOpacity=".6" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
