import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from './components/banner/Banner';
import Brands from './components/brands/Brands';
import Categories from './components/categories/Categories';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Partners from './components/shared/Partners';
import ShowcaseOne from './components/showcaseOne/ShowcaseOne';
import ShowcaseTwo from './components/showcaseTwo/ShowcaseTwo';

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    AOS.init({
      duration: 800,
      once: true,
      disable: prefersReducedMotion,
    });
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal">
        <Banner />
        <Categories />
        <ShowcaseOne />
        <Partners headingId="parceiros-1" />
        <ShowcaseTwo headingId="vitrine-relacionados-2" />
        <Partners headingId="parceiros-2" />
        <Brands />
        <ShowcaseTwo headingId="vitrine-relacionados-3" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
