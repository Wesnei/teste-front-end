export default function Brands() {
  return (
    <section className="brands-container">
      <div className="title-container">
        <h3>Navegue por marcas</h3>
      </div>

      <nav className="circle-container">
        <button className="circle" type="button">
          <img src="/fav.png" loading="lazy" data-aos="fade-up" data-aos-duration="3000" alt="Econverse logo" />
        </button>
        <button className="circle" type="button">
          <img src="/fav.png" loading="lazy" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" alt="Econverse logo" />
        </button>
        <button className="circle" type="button">
          <img src="/fav.png" loading="lazy" data-aos="fade-left" data-aos-duration="3000" alt="Econverse logo" />
        </button>
        <button className="circle" type="button">
          <img src="/fav.png" loading="lazy" data-aos="fade-right" data-aos-duration="3000" alt="Econverse logo" />
        </button>
        <button className="circle" type="button">
          <img src="/fav.png" loading="lazy" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" alt="Econverse logo" />
        </button>
      </nav>
    </section>
  );
}
