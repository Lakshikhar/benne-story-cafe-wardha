import { useEffect, useRef, useState } from 'react'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const step = (t) => {
        const p = Math.min(1, (t - t0) / 1200)
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <b ref={ref}>{v}{suffix}</b>
}

export default function Story() {
  return (
    <section id="story" className="section story">
      <div className="wrap story__grid">
        <div className="reveal">
          <h2>Tradition, without the fuss.</h2>
        </div>
        <div className="story__text reveal">
          <p>Some food doesn’t need a reinvention. It needs to be made well, made hot, and served without a long wait. That’s all we’re doing in Wardha.</p>
          <p>It’s the plate of dosa before you head to work. The steel tumbler of filter coffee when the evening slows down. A quick idli stop between errands. A table where the whole family orders too much and nobody minds.</p>
          <p>We cook the way South Indian kitchens have always cooked: fermented batter, fresh chutneys, sambar that’s actually hot. Come in as you are. Stay for one more coffee.</p>
          <ul className="story__moments">
            <li>Breakfast before work</li><li>Evening filter coffee</li><li>A quick dosa</li><li>Family meals</li><li>Easy conversations</li>
          </ul>
        </div>
      </div>
      <div className="wrap">
        <ul className="facts">
          <li className="reveal"><b>20+</b><span>dishes on the menu</span></li>
          <li className="reveal"><Counter to={100} suffix="%" /><span>pure vegetarian</span></li>
          <li className="reveal"><Counter to={7} suffix=" AM" /><span>first tawa goes on</span></li>
        </ul>
        <div className="divider" aria-hidden="true" />
        <p className="story__quote reveal">Real Southern soul, zero wait.</p>
      </div>
    </section>
  )
}
