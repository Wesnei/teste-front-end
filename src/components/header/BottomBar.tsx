import { Crown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { categoryNavLinks } from '../../data/navLinks';

export default function BottomBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bottom-bar" aria-label="Categorias">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="menu-categorias"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        <span>{open ? 'Fechar menu' : 'Abrir menu'}</span>
      </button>

      <ul id="menu-categorias" className={`bottom-bar-menu${open ? ' is-open' : ''}`}>
        {categoryNavLinks.map((link) => (
          <li key={link.href} className={link.icon === 'crown' ? 'bottom-bar-last-box' : undefined}>
            {link.icon === 'crown' ? <Crown size={20} aria-hidden="true" /> : null}
            <a href={link.href} className={link.featured ? 'ofertas' : undefined}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
