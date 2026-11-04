import { categories } from '../../data/categories';

export default function Categories() {
  return (
    <section className="categories-container" data-aos="fade-up" aria-labelledby="categorias-titulo">
      <h2 id="categorias-titulo" className="sr-only">
        Categorias
      </h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <a href={category.href} className="category-link">
              <span className="categories-img-container">
                <img src={category.image} alt="" width={61} height={61} />
              </span>
              <span className={category.featured ? 'titulo-tecnologia' : undefined}>
                {category.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
