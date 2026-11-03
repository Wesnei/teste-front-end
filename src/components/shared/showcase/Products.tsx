import { useEffect, useState } from 'react';
import type { Product, ProductsResponse } from '../../../types/product';
import Modal from '../Modal';
import Chevrons from './Chevrons';
import ProductsList from './ProductsList';

type Props = {
  productsObj: ProductsResponse;
};

export default function Products({ productsObj }: Props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [translateX, setTranslateX] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      document.body.style.right = '8px';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'relative';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.right = '0px';
      document.documentElement.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.right = '0px';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isPopupVisible]);

  return (
    <>
      <Chevrons translateX={translateX} setTranslateX={setTranslateX} />
      <ProductsList
        translateX={translateX}
        productsObj={productsObj}
        formatPrice={formatPrice}
        handleBuyClick={handleBuyClick}
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
