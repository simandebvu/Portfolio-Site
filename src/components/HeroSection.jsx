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
        <div className="hero-container" data-aos="fade-in">
          <h1>Shingirayi Mandebvu</h1>
          <p>
            I love to
            {' '}
            <span id="typedStuff" />
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
