import { useState } from 'react'
import { ShoppingBag, Plus, Minus, MessageCircle } from 'lucide-react'
import { MENU, BRAND } from '../data/menu.js'

export default function OrderTray({ cart, onAdd, onDec, onClear }) {
  const [open, setOpen] = useState(false)
  const rows = Object.entries(cart).map(([id, qty]) => ({ item: MENU.find((m) => m.id === Number(id)), qty }))
  const count = rows.reduce((a, r) => a + r.qty, 0)
  if (!count) return null
  const text = `Hi ${BRAND.name}! I'd like to order:\n` + rows.map((r) => `${r.qty} x ${r.item.name}`).join('\n')
  return (
    <div className="tray">
      <div className={open ? 'tray__panel tray__panel--open' : 'tray__panel'} role="dialog" aria-label="Your order">
        <h3>Your order</h3>
        <ul>
          {rows.map(({ item, qty }) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span className="qty">
                <button onClick={() => onDec(item.id)} aria-label={`Remove one ${item.name}`}><Minus size={14} /></button>
                <b>{qty}</b>
                <button onClick={() => onAdd(item.id)} aria-label={`Add one ${item.name}`}><Plus size={14} /></button>
              </span>
            </li>
          ))}
        </ul>
        <a className="btn btn--green" href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Send on WhatsApp</a>
        <button className="tray__clear" onClick={() => { onClear(); setOpen(false) }}>Clear order</button>
      </div>
      <button className="tray__btn" onClick={() => setOpen(!open)} aria-expanded={open}><ShoppingBag size={18} /> My order <span className="tray__count">{count}</span></button>
    </div>
  )
}
