import { Dumbbell, HeartPulse, Shirt, Smartphone } from 'lucide-react';

export default function Categories() {
  return (
    <section className="categories-container" data-aos="fade-up" aria-label="categories">
      <ul>
        <li className="tecnologia">
          <button aria-label="go to tecnologia category" className="categories-img-container">
                <img src="/Devices.png" alt="saúde" />
          </button>
          <h3 className="titulo-tecnologia">Tecnologia</h3>
        </li>

        <li className="supermercado">
          <button aria-label="go to supermercados category" className="categories-img-container">
            <img src="/Supermercados.png" alt="supermercados" />
          </button>
          <h3>Supermercado</h3>
        </li>

        <li className="bebidas">
          <button aria-label="go to bebidas category" className="categories-img-container">
            <img src="/Bebidas.png" alt="bebidas" />
          </button>
          <h3>Bebidas</h3>
        </li>

        <li className="ferramentas">
          <button aria-label="go to ferramentas category" className="categories-img-container">
            <img src="/Ferramentas.png" alt="ferramentas" />
          </button>
          <h3>Ferramentas</h3>
        </li>

        <li className="saude">
          <button aria-label="go to saúde category" className="categories-img-container">
            <img src="/Saude.png" alt="saúde" />
          </button>
          <h3>Saúde</h3>
        </li>

        <li className="esportes">
          <button aria-label="go to esportes e fitness category" className="categories-img-container">
            <img src="/Esportes.png" alt="esportes e fitness" />
          </button>
          <h3>Esportes e Fitness</h3>
        </li>

        <li className="moda">
          <button aria-label="go to moda category" className="categories-img-container">
            <img src="/Moda.png" alt="moda" className="moda-logo" />
          </button>
          <h3>Moda</h3>
        </li>
      </ul>
    </section>
  );
}

