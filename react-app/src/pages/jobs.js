import React from 'react';

import Header from '../components/header';
import NavTop from '../components/navTop';
import Job from '../components/job';
import Footer from '../components/footer';

export default () => (
  <div>
    <Header />
    <NavTop />
    <h1 className="job-page-heading font-weight-light m-5">Availabe Jobs</h1>
    <Job />
    <Footer />
  </div>
);
