import React from 'react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import MainSection from './components/MainSection';
import About from './components/About';
import Social from "./components/Social";
import Contact from './components/Contact';
import Contact2 from "./components/Contact2";

import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <CategoryCard />
      <About />
      <Social/>
      <Contact />
      <Contact2 />
      <Footer />
    </div>
  );
}

export default App;
