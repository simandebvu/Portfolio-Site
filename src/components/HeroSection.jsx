import React, { useEffect } from 'react';
import '../styles/HeroSection.css';
import Typed from 'typed.js';

export const HeroSection = () => {
  const text = [' create!', ' implement!', ' code!'];
  useEffect(() => {
    const options = {
      strings: text,
      typeSpeed: 50,
      backSpeed: 50,
    };
    const typed = new Typed('#typedStuff', options);

    return () => {
      typed.destroy();
    };
  }, [text]);
  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" style={{ backgroundColor: '#000000', padding: 10 }} data-aos="fade-in">
          <h1>Shingirayi Mandebvu</h1>
          <h2 className="font-weight-bold text-white">
            I love to
            {' '}
            <span id="typedStuff" />
          </h2>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
