export type NavLink = {
  href: string;
  label: string;
  featured?: boolean;
  icon?: 'crown';
};

export const categoryNavLinks: NavLink[] = [
  { href: '/categorias', label: 'Todas categorias' },
  { href: '/supermercado', label: 'Supermercado' },
  { href: '/livros', label: 'Livros' },
  { href: '/moda', label: 'Moda' },
  { href: '/lancamentos', label: 'Lançamentos' },
  { href: '/ofertas', label: 'Ofertas do Dia', featured: true },
  { href: '/assinatura', label: 'Assinatura', icon: 'crown' },
];

export const productTagLinks: NavLink[] = [
  { href: '/celular', label: 'Celular', featured: true },
  { href: '/acessorios', label: 'Acessórios' },
  { href: '/tablets', label: 'Tablets' },
  { href: '/notebooks', label: 'Notebooks' },
  { href: '/tvs', label: 'Tvs' },
  { href: '/produtos', label: 'Ver Todos' },
];
