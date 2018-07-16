import React from 'react';

import Header from '../components/header';
import NavTop from '../components/navTop';
import Apply from '../components/apply';
import Footer from '../components/footer';

export default () => (
  <div className="bg-body apply">
    <Header />
    <NavTop title="Apply" />
    <Apply />
    <Footer />
  </div>
);
