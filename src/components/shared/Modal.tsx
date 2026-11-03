import { Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../../types/product';

type Props = {
  product: Product;
  formatPrice: (value: number) => string;
  closePopup: () => void;
};

export default function Modal({ product, formatPrice, closePopup }: Props) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const formatQuantity = (qty: number): string => {
    return qty < 10 ? `0${qty}` : `${qty}`;
  };

  return (
    <div
      role="dialog"
      aria-labelledby={product.productName}
      aria-describedby={product.productName}
      className="popup-overlay"
      aria-modal="true"
      tabIndex={-1}
    >
      <div className="popup-container">
        <div className="img-container">
          <img src={product.photo} loading="lazy" alt={product.productName} />
        </div>
        <div className="popup-description">
          <h2>{product.productName}</h2>
          <p className="price">{`${formatPrice(product.price)}`}</p>
          <p className="long-description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <p className="details">Veja mais detalhes do produto &gt;</p>
          <div className="comprar-button-row">
            <div className="quantity-menu-container">
              <button onClick={decreaseQuantity} aria-label="Decrease quantity" type="button">
                <Minus size={20} color="#271C47" />
              </button>
              <span>{formatQuantity(quantity)}</span>
              <button onClick={increaseQuantity} aria-label="Increase quantity" type="button">
                <Plus size={20} color="#271C47" />
              </button>
            </div>

            <button className="comprar-button" type="button">
              Comprar
            </button>
          </div>
        </div>
        <button
          className="close-button-container"
          aria-label="Close popup"
          onClick={closePopup}
          type="button"
        >
          <X size={16} color="#707070" />
        </button>
      </div>
    </div>
  );
}
