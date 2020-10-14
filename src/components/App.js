import React from 'react';
import './App.css';
import AOS from 'aos';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import 'aos/dist/aos.css';
import { SideBar } from '../containers/SideBar';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { PortfolioList } from '../containers/PortfolioList';
import { mPortfolio } from '../objects/PortfolioObject';

function App() {
  AOS.init(
    {
      duration: 1000,
      easing: 'ease-in-out-back',
      once: true,
    },
  );
  return (
    <Router>
      <Route path="/" exact>
        <SideBar />
        <HeroSection />
        <main id="main">
          <AboutSection />
          <PortfolioList portfolio={mPortfolio} />
          <ContactSection />
        </main>
      </Route>
    </Router>
  );
}

export default App;
