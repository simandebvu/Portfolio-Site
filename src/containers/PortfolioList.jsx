import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../components/PortfolioItem';
import '../styles/PortfolioSection.css';

export const PortfolioList = ({ portfolio }) => {
  const [filter, setFilter] = useState('All');
  const categoriesList = ['All', ...portfolio.map(i => i.category)];

  const handleSelectCategory = event => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const CategoryButton = ({ name, onSelect }) => {
    let mStyle = 'btn';
    if (name === filter) {
      mStyle += ' text-danger';
    }
    return (<input type="button" className={mStyle} onClick={onSelect} value={name} />);
  };

  CategoryButton.propTypes = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  const filtered = filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Feel free to browse though some of my work below!</p>
        </div>
        <div id="myBtnContainer" className="aos-init aos-animate">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <div id="portfolio-categories">
                {categoriesList.map(
                  p => (
                    <CategoryButton
                      key={p}
                      name={p}
                      onSelect={handleSelectCategory}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {filtered.map(p => (
            <PortfolioItem
              key={p.id}
              title={p.title}
              desc={p.description}
              tools={p.tools}
              image={p.image}
              github={p.github}
              demo={p.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

PortfolioList.propTypes = {
  portfolio: PropTypes.instanceOf(Object).isRequired,
};
export default PortfolioList;
