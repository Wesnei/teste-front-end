import Content from './Content'

export default function Banner() {
  return (
    <section className="banner-container">
      <img
        className="banner-img"
        loading="lazy"
        src="/Banner.png"
        alt="Econverse banner showcasing discounts on electronics"
        aria-labelledby="banner-heading"
      />
      <Content />
    </section>
  );
}
