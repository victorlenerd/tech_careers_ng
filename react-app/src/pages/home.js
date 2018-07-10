import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
  <section className="main">
    <Header />
    <Footer />
    <div className="jumbotron">
      <div className="overlay" />
      <div className="container">
        <h1>
          Discover The Best Jobs<br />Oppurtunities In Tech.
        </h1>
        <br />
        <br />
        <p>
          Tech careers is platform for employers<br />and job seekers to find
          the <br />perfect match.
        </p>
      </div>
    </div>
    <div className="job-search mx-auto p-2">
      <div className="row mx-auto pl-4">
        <div className="col-sm-9 py-2">
          <div className="row">
            <select className="col-sm-3 select-style">
              <option>Type...</option>
              <option>Fulltime</option>
              <option>Part-time</option>
              <option>Remote</option>
              <option>Freelance</option>
            </select>
            <select className="col-sm-3 select-style">
              <option>Role...</option>
              <option>Backend</option>
              <option>Front-End</option>
              <option>Full Stack</option>
            </select>
            <select className="col-sm-3 select-style">
              <option>Location...</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
            <select className="col-sm-3 select-style">
              <option>Experience...</option>
              <option>Junior</option>
              <option>Intermediate</option>
              <option>Senior</option>
            </select>
          </div>
        </div>
        <button className="col-sm-2  offset-sm-1 btn btn-block">Search</button>
      </div>
    </div>
  </section>
);
