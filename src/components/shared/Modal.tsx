import { Minus, Plus, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import type { Product } from '../../types/product';

type Props = {
  product: Product;
  formatPrice: (value: number) => string;
  closePopup: () => void;
};

export default function Modal({ product, formatPrice, closePopup }: Props) {
  const [quantity, setQuantity] = useState(1);
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const formatQuantity = (qty: number): string => {
    return qty < 10 ? `0${qty}` : `${qty}`;
  };

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closePopup]);

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="popup-container"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="img-container">
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className="popup-description">
          <h2 id={titleId}>{product.productName}</h2>
          <p className="price">{formatPrice(product.price)}</p>
          <p id={descriptionId} className="long-description">
            {product.descriptionShort}
          </p>
          <a className="details" href="#vitrine-principal">
            Veja mais detalhes do produto &gt;
          </a>
          <div className="comprar-button-row">
            <div className="quantity-menu-container">
              <button onClick={decreaseQuantity} aria-label="Diminuir quantidade" type="button">
                <Minus size={20} color="#271C47" aria-hidden="true" />
              </button>
              <span aria-live="polite">{formatQuantity(quantity)}</span>
              <button onClick={increaseQuantity} aria-label="Aumentar quantidade" type="button">
                <Plus size={20} color="#271C47" aria-hidden="true" />
              </button>
            </div>

            <button className="comprar-button" type="button">
              Comprar
            </button>
          </div>
        </div>
        <button
          ref={closeButtonRef}
          className="close-button-container"
          aria-label="Fechar detalhes do produto"
          onClick={closePopup}
          type="button"
        >
          <X size={16} color="#707070" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
