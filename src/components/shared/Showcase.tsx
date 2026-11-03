import { useEffect, useState } from 'react';
import Products from './showcase/Products';
import { fallbackProducts, fetchProducts } from '../../services/products';

export default function Showcase() {
  const [productsObj, setProductsObj] = useState(fallbackProducts);

  useEffect(() => {
    let active = true;

    fetchProducts().then((data) => {
      if (active) {
        setProductsObj(data);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="showcase-container">
      <Products productsObj={productsObj} />
    </div>
  );
}
