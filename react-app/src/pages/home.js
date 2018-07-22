import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header';

const Home = () => (
  <section className="main">
    <Header />
    <div className="jumbotron d-flex flex-column justify-content-center align-items-center">
      <div className="overlay" />
      <div className="container mb-5">
        <h1>
          Discover The Best Jobs<br />Opportunities In Tech.
        </h1>
        <br />
        <p>
          Tech careers is platform for employers<br />and job seekers to find
          the <br />perfect match.
        </p>
      </div>

      {/* <div className="container">
        <div className="job-search mx-auto mt-3 p-2">
          <div className="row mx-auto pl-4">
            <div className="col-sm-12 col-md-10 py-2">
              <div className="row">
                <select className="col-sm-6 select-style">
                  <option>Type...</option>
                  <option>Fulltime</option>
                  <option>Part-time</option>
                  <option>Remote</option>
                  <option>Freelance</option>
                </select>
                <select className="col-sm-6 select-style">
                  <option>Role...</option>
                  <option>Backend</option>
                  <option>Front-End</option>
                  <option>Full Stack</option>
                </select>
              </div>
            </div>
            <Link
              to="/jobs"
              role="button"
              className="col-sm-4 col-md-2 offset-sm-4 btn btn-search">
              Search
            </Link>
          </div>
        </div>
      </div> */}

      <div className="container job-filter search-filter row p-2">
        <select name="type" className="col-md-4 filter-control search-filter">
          <option value="">Select Type...</option>
          <option value="fulltime">Fulltime</option>
          <option value="parttime">Parttime</option>
          <option value="remote">Remote</option>
          <option value="freelance">Freelance</option>
        </select>
        <select name="role" className="col-md-5 filter-control search-filter">
          <option value="">Select Role...</option>
          <option value="backend">Backend</option>
          <option value="frontend">Frontend</option>
          <option value="fullstack">Fullstack</option>
          <option value="designer">Designer</option>
        </select>
        <div className="col-md-3 filter-control py-0 btn-search-div">
          <div className="w-100 d-flex justify-content-center justify-content-md-end">
            <Link to="/jobs" role="button" className="btn btn-search">
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
