import type { Product, ProductsResponse } from '../../../types/product';

type Props = {
  translateX: number;
  productsObj: ProductsResponse;
  formatPrice: (price: number) => string;
  handleBuyClick: (product: Product) => void;
};

export default function ProductsList({
  translateX,
  productsObj,
  formatPrice,
  handleBuyClick,
}: Props) {
  return (
    <div className="slider-container" data-aos="fade-up" data-aos-delay="200">
      <ul
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 0.5s ease-out',
        }}
        className="showcase-products-container"
      >
        {productsObj.products.map((product, index) => (
          <li key={`${product.productName}-${index}`}>
            <img src={product.photo} alt={product.productName} loading="lazy" />
            <h4 className="product-name">{product.productName}</h4>
            <p className="old-price">{`${formatPrice(product.price + 200)}`}</p>
            <p className="price">{`${formatPrice(product.price)}`}</p>
            <p className="price-interest">{`ou 5x de ${formatPrice(
              (product.price * 1.15) / 5,
            )} sem juros`}</p>
            <p className="free-delivery">Frete grátis</p>
            <button
              className="buy-button"
              onClick={() => handleBuyClick(product)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleBuyClick(product);
                }
              }}
            >
              <p>Comprar</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
