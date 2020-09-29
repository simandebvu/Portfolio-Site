import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../components/PortfolioItem';

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
      mStyle += ' active';
    }
    return (<input type="button" className={mStyle} onClick={onSelect} value={name} />);
  };

  CategoryButton.propTypes = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  const filtered = filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);

  return (
    <div className="container-fluid mt-4">
      <h3>My Portfolio</h3>
      <div id="myBtnContainer" className="mt-4">
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
      <div className="row">
        {filtered.map(p => (
          <PortfolioItem key={p.id} title={p.title} desc={p.description} />
        ))}
      </div>
    </div>
  );
};

PortfolioList.propTypes = {
  portfolio: PropTypes.instanceOf(Object).isRequired,
};
export default PortfolioList;
