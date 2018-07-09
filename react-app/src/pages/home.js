<<<<<<< HEAD
import React from 'react';
import Header from '../components/header';

export default () => (
  <section className="main">
    <Header />
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
=======
import React from 'react';

import Header from '../components/header';

export default () => (
    <section className="main">
        <Header />
        <div className="jumbotron">
            <div className="overlay"></div>
            <div className="container">
                <h1>Discover The Best Job<br />Oppurtunities In Tech.</h1>
                <br />
                <br />
                <p>Tech careers is  platform for employers<br />and job seekers to find the <br />perfect match.</p>
            </div>
        </div>
        <div className="container">
            <div className="job-search row">
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <input type="text" className="control" placeholder="Type: e.g., fulltime..." aria-label="Type" aria-describedby="basic-addon1" />
                </div>
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <input type="text" className="control" placeholder="Role: e.g., backend..." aria-label="Role" aria-describedby="basic-addon1" />
                </div>
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <input type="text" className="control" placeholder="Location: e.g., Lagos..." aria-label="Location" aria-describedby="basic-addon1" />
                </div>
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <select placeholder="Experience: e.g., senior...">
                    </select>
                </div>
                <div className="col-lg-2 col-md-2">
                    <button type="submit" className="btn search-btn">SEARCH</button>
                </div>
            </div>
        </div>
    </section>
);
>>>>>>> eba2ddecc1c502cba7446fed7561d9aa32f37c01
