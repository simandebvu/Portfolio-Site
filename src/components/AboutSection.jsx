import React from 'react';
import '../styles/AboutSection.css';
// eslint-disable-next-line no-unused-vars
import Icofont from 'react-icofont';
import Me from '../images/Me.png';

export const AboutSection = () => (
  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <p>
          Developer skilled in HTML5,
          CSS3, Databases, Ruby on Rails,
          Python, Django, Ruby, Javascript,
          React and Redux, Remote Working, Pair Programming
        </p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src={Me} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Full Stack Developer.</h3>
          <p className="font-italic">
            I am a creative, analytical
            and passionate developer
            who lives, breathes,
            eats and sleeps in code.
            I am also an avid believer
            in code efficiency and
            test-driven development.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="icofont-rounded-right" />
                  {' '}
                  <strong>Birthday:</strong>
                  {' '}
                  25 October
                </li>
                <li>
                  <i className="icofont-rounded-right" />
                  {' '}
                  <strong>Phone:</strong>
                  {' '}
                  +263 772 770 994
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="icofont-rounded-right" />
                  {' '}
                  <strong>Email:</strong>
                  {' '}
                  simandebvu@icloud.com
                </li>
                <li>
                  <i className="icofont-rounded-right" />
                  {' '}
                  <strong>Opportunities:</strong>
                  {' '}
                  Available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default AboutSection;
