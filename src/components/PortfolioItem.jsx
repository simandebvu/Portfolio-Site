import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './PortfolioItem.css';

export const Portfolio = ({ title, desc, tools }) => (
  <div className="column show col-12 col-lg-4 mt-3" key="">
    <div className="content">

      <form className="form">
        <div className="form__field">
          <Card>
            {' '}
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              style={{ maxHeight: '180px' }}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <button className="button mx-2" type="button">Demo</button>
        <button className="button" type="button">Code</button>
      </form>

    </div>
  </div>

);
export default Portfolio;

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tools: PropTypes.instanceOf(Array).isRequired,
};
