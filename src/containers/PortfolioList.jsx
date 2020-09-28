import React, { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import { mPortfolio } from '../objects/PortfolioObject';

export const PortfolioList = () => {
  const [portfolio, setMPortfolio] = useState(mPortfolio);
  return (
    <div className="container-fluid mt-4">
      <h3>My Portfolio</h3>
      <div id="myBtnContainer" className="mt-4">
        <button type="submit" className="btn active" onClick=""> Show all</button>
        <button type="submit" className="btn" onClick=""> Nature</button>
        <button type="submit" className="btn" onClick=""> Cars</button>
        <button type="submit" className="btn" onClick=""> People</button>
      </div>
      <div className="row">
        {portfolio.map(p => (
          <PortfolioItem key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
