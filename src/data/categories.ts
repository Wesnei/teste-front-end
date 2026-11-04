export type Category = {
  id: string;
  name: string;
  href: string;
  image: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    id: 'tecnologia',
    name: 'Tecnologia',
    href: '/tecnologia',
    image: '/Devices.png',
    featured: true,
  },
  {
    id: 'supermercado',
    name: 'Supermercado',
    href: '/supermercado',
    image: '/Supermercados.png',
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    href: '/bebidas',
    image: '/Bebidas.png',
  },
  {
    id: 'ferramentas',
    name: 'Ferramentas',
    href: '/ferramentas',
    image: '/Ferramentas.png',
  },
  {
    id: 'saude',
    name: 'Saúde',
    href: '/saude',
    image: '/Saude.png',
  },
  {
    id: 'esportes',
    name: 'Esportes e Fitness',
    href: '/esportes',
    image: '/Esportes.png',
  },
  {
    id: 'moda',
    name: 'Moda',
    href: '/moda',
    image: '/Moda.png',
  },
];
