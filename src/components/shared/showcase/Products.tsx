import { useEffect, useState } from 'react';
import type { Product, ProductsResponse } from '../../../types/product';
import { formatPrice } from '../../../utils/formatPrice';
import Modal from '../Modal';
import Chevrons from './Chevrons';
import ProductsList from './ProductsList';

type Props = {
  productsObj: ProductsResponse;
};

const CARD_STEP = 322;
const CARD_WIDTH = 304;

export default function Products({ productsObj }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const maxTranslate = Math.min(
    0,
    -CARD_STEP * Math.max(productsObj.products.length - visibleCount, 0),
  );

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const updateVisibleCount = () => {
      const available = Math.min(window.innerWidth - 48, 1292);
      setVisibleCount(Math.max(1, Math.floor((available + 18) / CARD_STEP)));
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    setTranslateX((current) => Math.max(current, maxTranslate));
  }, [maxTranslate]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isPopupVisible]);

  return (
    <>
      <Chevrons
        translateX={translateX}
        setTranslateX={setTranslateX}
        maxTranslate={maxTranslate}
        step={CARD_STEP}
      />
      <ProductsList
        translateX={translateX}
        productsObj={productsObj}
        formatPrice={formatPrice}
        handleBuyClick={handleBuyClick}
        cardWidth={CARD_WIDTH}
      />

      {isPopupVisible && selectedProduct && (
        <Modal
          product={selectedProduct}
          formatPrice={formatPrice}
          closePopup={closePopup}
        />
      )}
    </>
  );
}
