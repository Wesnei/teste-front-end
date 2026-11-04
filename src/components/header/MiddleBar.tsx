import { Search } from 'lucide-react';
import type { FormEvent } from 'react';

export default function MiddleBar() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="middle-bar">
      <div className="middle-bar-menu">
        <div className="middle-bar-left-box">
          <a href="/" aria-label="Página inicial da Econverse">
            <img src="/fav.png" alt="Econverse" width={139} height={46} />
          </a>
        </div>

        <form
          className="middle-bar-center-box"
          role="search"
          onSubmit={handleSearch}
        >
          <label htmlFor="search-input" className="sr-only">
            Buscar produtos
          </label>
          <input
            id="search-input"
            name="q"
            type="search"
            placeholder="O que você está buscando?"
            autoComplete="off"
          />
          <button type="submit" aria-label="Buscar produtos">
            <Search size={28} color="#9F9F9F" aria-hidden="true" />
          </button>
        </form>

        <nav className="middle-bar-right-box" aria-label="Conta e pedidos">
          <a href="/pedidos" aria-label="Meus pedidos">
            <img src="/Box.png" alt="" width={32} height={32} />
          </a>
          <a href="/favoritos" aria-label="Favoritos">
            <img src="/Heart.png" alt="" width={32} height={32} />
          </a>
          <a href="/perfil" aria-label="Perfil do usuário">
            <img src="/UserCircle.png" alt="" width={32} height={32} />
          </a>
          <a href="/carrinho" aria-label="Carrinho de compras">
            <img src="/ShoppingCart.png" alt="" width={32} height={32} />
          </a>
        </nav>
      </div>
    </div>
  );
}
