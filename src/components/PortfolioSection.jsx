import React, { useState } from 'react';
import '../styles/PortfolioSection.css';

export const PortfolioSection = () => {
  const [filter, setFilter] = useState('All');
  const handleSelectCategory = event => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Feel free to browse though some of my work below!</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters1">
              <li data-filter="*" className="filter-active">All</li>
              <li onSelect={handleSelectCategory}>App</li>
              <li onSelect={handleSelectCategory}>Card</li>
              <li onSelect={handleSelectCategory}>Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
