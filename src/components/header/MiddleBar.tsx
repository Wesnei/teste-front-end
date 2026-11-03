import { Heart, Package, Search, ShoppingCart, UserCircle } from 'lucide-react';

export default function MiddleBar() {
  return (
    <div className="middle-bar">
      <nav className="middle-bar-menu" aria-label="Main navigation">
        <div className="middle-bar-left-box">
          <a href="/" aria-label="Econverse home">
            <img src="/fav.png" alt="Econverse logo" />
          </a>
        </div>

        <form
          className="middle-bar-center-box"
          action="/search"
          method="GET"
          aria-label="Search form"
        >
          <label htmlFor="search-input" style={{ display: 'none' }}>
            Buscar produtos
          </label>
          <input
            id="search-input"
            name="q"
            type="text"
            placeholder="O que você está buscando?"
            aria-label="Digite o que você está buscando"
            required
          />
          <button type="submit" aria-label="Buscar">
            <Search size={28} color="#9F9F9F" />
          </button>
        </form>

        <div className="middle-bar-right-box" aria-label="User actions">
          <a href="/orders" aria-label="Minhas compras">
              <img src="/Box.png" alt="caixa" />
          </a>
          <a href="/favorites" aria-label="Favoritos">
            <img src="/Heart.png" alt="favoritos" />
          </a>
          <a href="/profile" aria-label="Perfil do usuário">
            <img src="/UserCircle.png" alt="perfil do usuário" />
          </a>
          <a href="/cart" aria-label="Carrinho de compras">
            <img src="/ShoppingCart.png" alt="carrinho de compras" />
          </a>
        </div>
      </nav>
    </div>
  );
}
