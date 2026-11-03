import { Crown } from 'lucide-react';

export default function BottomBar() {
  return (
    <nav className="bottom-bar" aria-label="Main navigation">
      <ul className="bottom-bar-menu">
        <li>
          <a href="/categorias">Todas categorias</a>
        </li>
        <li>
          <a href="/supermercado">Supermercado</a>
        </li>
        <li>
          <a href="/livros">Livros</a>
        </li>
        <li>
          <a href="/moda">Moda</a>
        </li>
        <li>
          <a href="/lancamentos">Lançamentos</a>
        </li>
        <li>
          <a href="/ofertas" className="ofertas">
            Ofertas do Dia
          </a>
        </li>
        <li className="bottom-bar-last-box">
          <Crown size={20} />
          <a href="/assinatura">Assinatura</a>
        </li>
      </ul>
    </nav>
  );
}
