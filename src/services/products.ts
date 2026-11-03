import type { ProductsResponse } from '../types/product';

const PRODUCTS_URL =
  '/econverse-api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const fallbackProducts: ProductsResponse = {
  success: true,
  products: [
    {
      productName: 'Iphone 11 PRO MAX BRANCO 1',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 15000,
    },
    {
      productName: 'IPHONE 13 MINI 1',
      descriptionShort: 'IPHONE 13 MINI 1',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 9000,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 2',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 14990,
    },
    {
      productName: 'IPHONE 13 MINI 2',
      descriptionShort: 'IPHONE 13 MINI 2',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 12000,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 3',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 4550,
    },
    {
      productName: 'IPHONE 13 MINI 3',
      descriptionShort: 'IPHONE 13 MINI 3',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 38000,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 4',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 4',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 42000,
    },
    {
      productName: 'IPHONE 13 MINI 4',
      descriptionShort: 'IPHONE 13 MINI 4',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 520,
    },
    {
      productName: 'Iphone 11 PRO MAX BRANCO 5',
      descriptionShort: 'Iphone 11 PRO MAX BRANCO 5',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 149990,
    },
    {
      productName: 'IPHONE 13 MINI 5',
      descriptionShort: 'IPHONE 13 MINI 5',
      photo:
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
      price: 100000,
    },
  ],
};

export async function fetchProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch(PRODUCTS_URL);
    if (!response.ok) {
      return fallbackProducts;
    }
    const data = (await response.json()) as ProductsResponse;
    if (!data?.products?.length) {
      return fallbackProducts;
    }
    return data;
  } catch {
    return fallbackProducts;
  }
}
