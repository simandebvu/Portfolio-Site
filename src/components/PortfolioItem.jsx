import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export const Portfolio = ({
  title, desc, image, github, demo,
}) => (
  <div className="column show col-12 col-lg-4 mt-3" key="">
    <div className="content">

      <form className="form">
        <div className="form__field">
          <Card>
            {' '}
            <Card.Img
              variant="top"
              src={image}
              style={{ maxHeight: '180px' }}
              alt={`Image : ${title}`}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <a className="button mx-2" type="button" href={`${demo}`} target="_blank" rel="noopener noreferrer">Demo</a>
        <a className="button" type="button" href={`${github}`} target="_blank" rel="noopener noreferrer">Code</a>
      </form>

    </div>
  </div>

);
export default Portfolio;

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};
