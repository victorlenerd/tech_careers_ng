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
              <option>Here is the first option</option>
              <option>The second option</option>
              <option>The third option</option>
            </select>
            <select className="col-sm-3 select-style">
              <option>Here is the first option</option>
              <option>The second option</option>
              <option>The third option</option>
            </select>
            <select className="col-sm-3 select-style">
              <option>Here is the first option</option>
              <option>The second option</option>
              <option>The third option</option>
            </select>
            <select className="col-sm-3 select-style">
              <option>Here is the first option</option>
              <option>The second option</option>
              <option>The third option</option>
            </select>
          </div>
        </div>
        <button className="col-sm-2  offset-sm-1 btn btn-block">Search</button>
      </div>
    </div>
  </section>
);
