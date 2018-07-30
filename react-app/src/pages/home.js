import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header';

const Home = () => (
  <section className="main">
    <Header />
    <div className="jumbotron d-flex flex-column justify-content-center align-items-center">
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

      <div className="job-search mx-auto mt-3 p-2">
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
                <option>Experience...</option>
                <option>Junior</option>
                <option>Intermediate</option>
                <option>Senior</option>
              </select>
            </div>
          </div>
          <Link
            to="/jobs"
            role="button"
            className="col-sm-2  offset-sm-1 btn search-btn">
            Search
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
