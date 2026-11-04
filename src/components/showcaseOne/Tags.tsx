import { productTagLinks } from '../../data/navLinks';

export default function Tags() {
  return (
    <nav aria-label="Filtros da vitrine" className="showcaseOne-tags-container">
      <ul>
        {productTagLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={link.featured ? 'showcaseOne-celular' : undefined}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
