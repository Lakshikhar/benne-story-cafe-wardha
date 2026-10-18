import { BRAND } from '../data/menu.js'

const FAQS = [
  ['Is Benne Story pure vegetarian?', 'Yes. Every dish on our menu is 100% pure vegetarian.'],
  ['Where are you in Wardha?', BRAND.address + '. Tap “Open in Maps” below for directions.'],
  ['What time do you start serving?', 'Our first tawa goes on from 7 AM, so breakfast is fresh and hot.'],
  ['Is there dine-in?', 'Yes. Come in, grab a table and take your time. Quick service, never rushed.'],
  ['What makes degree coffee different?', 'A strong filter decoction, fresh hot milk and a high pour for the froth, served in a steel tumbler and davara.'],
  ['Can I open a Benne Story in my city?', 'We’d love to talk. Call us or use the Partner with us button.'],
]

export default function Faq() {
  return (
    <section className="section faq">
      <div className="wrap faq__grid">
        <h2 className="reveal">Good to know.</h2>
        <div className="faq__list reveal">
          {FAQS.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
    </section>
  )
}
