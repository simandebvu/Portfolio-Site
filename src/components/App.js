import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  FaTwitter, FaGithub, FaLinkedin, FaStackOverflow, FaMailBulk, FaCheck,
} from 'react-icons/fa';
import Background from '../images/texture.jpg';
import Me from '../images/Me.png';
import { NavBar } from './NavBar';
import { PortfolioList } from '../containers/PortfolioList';
import { mPortfolio } from '../objects/PortfolioObject';

function App() {
  return (
    <>
      <NavBar />
      <Container fluid className="px-0">
        <div
          style={{
            background: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', width: '100%',
          }}
          className="d-flex flex-column flex-lg-row"
        >
          <div className="social-sidebar col-lg-3 col-sm-12 px-0">
            <ListGroup className="border-0 rounded-0">
              <ListGroup.Item className="border-0 text-center"><img src={Me} alt="" style={{ height: '180px' }} className="rounded-circle mx-auto border-0" /></ListGroup.Item>
              <ListGroup.Item className="border-0 font-weight-bold">Shingirayi Mandebvu</ListGroup.Item>
              <ListGroup.Item className="border-0">Full Stack Developer | LEMP, Rails, Django | React & Redux | he/his</ListGroup.Item>
              <ListGroup.Item className="border-0">
                <FaCheck className="mr-1 pb-1" style={{ color: 'green' }} />
                Open to opportunities
              </ListGroup.Item>
              <ListGroup.Item className="border-0 d-flex justify-content-between">
                <FaTwitter className="social-button" />
                <FaLinkedin className="social-button" />
                <FaStackOverflow className="social-button" />
                <FaGithub className="social-button" />
                <FaMailBulk className="social-button" />
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="intro-text mt-5  px-2">

            <div className="text-light bg-dark header-text p-2 mb-4 text-white text-sm-black rounded font-weight-bold">
              <h2>Hi, I&apos;m Shingirayi Mandebvu</h2>
              <p>
                I’m a full-stack software developer. I received my BSc in Computer
                And Information Systems from Africa University
                and currently a student at Microverse.
                I can help you build a product, feature, or website.
                Feel free to contact me.
              </p>
            </div>
            <div className="w-100 text-center p-0 mx-auto">
              <div className="portfolio-invite w-25 mx-auto"><span>Portfolio</span></div>
            </div>
          </div>
        </div>
        <PortfolioList portfolio={mPortfolio} />
      </Container>
    </>
  );
}

export default App;
