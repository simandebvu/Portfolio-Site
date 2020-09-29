import React from 'react';
import PropTypes from 'prop-types';

export const Portfolio = ({ title, desc }) => (
  <div className="column show" key="">
    <div className="content">
      <img src="/w3images/mountains.jpg" alt="" style={{ width: '100%' }} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);
export default Portfolio;

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
