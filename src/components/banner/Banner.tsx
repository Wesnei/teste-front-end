import Content from './Content';

export default function Banner() {
  return (
    <section className="banner-container" aria-labelledby="banner-heading">
      <img
        className="banner-img"
        src="/Banner.png"
        alt=""
        width={1440}
        height={390}
        fetchPriority="high"
      />
      <Content />
    </section>
  );
}
