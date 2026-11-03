import React, { useEffect } from 'react';
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
    AOS.init({
      duration: 800, // Duração da animação
      once: true,    // Anima apenas uma vez ao rolar
    });
  }, []);

  return (
    <main className="App">
      <header className="App-header">
        <Header />
      </header>
      <Banner />
      <Categories />
      <ShowcaseOne />
      <Partners />
      <ShowcaseTwo />
      <Partners />
      <Brands />
      <ShowcaseTwo />
      <Footer />
    </main>
  );
}

export default App;