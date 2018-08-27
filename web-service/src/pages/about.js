import React from 'react';

import NavTop from '../components/navTop';
import Header from '../components/header';
import About from '../components/about';
import Footer from '../components/footer';

export default () => (
  <div className="about pb-5">
    <Header />
    <NavTop title="About Us" />
    <About />
    <Footer />
  </div>
);
