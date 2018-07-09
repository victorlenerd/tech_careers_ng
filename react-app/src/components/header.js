<<<<<<< HEAD
import React from 'react';

export default () => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <a
        className="navbar-brand d-inline-flex flex-column justify-content-end text-white"
        href="index.html">
        <span className="brand-one font-weight-bold">TechCareers</span>
        <span className="brand-two pt-0">By NESA</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarText">
        <ul className="navbar-nav">
          <li className="nav-item mx-2 active">
            <a className="nav-link text-white" href="index.html">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-white" href="job-list.html">
              Jobs
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-white" href="post-jobs.html">
              Post Jobs
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-white" href="about.html">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
=======
import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <NavLink className="navbar-brand d-inline-flex flex-column justify-content-end text-white" to="#">
                <span className="brand-one font-weight-bold">TechCareers</span>
                <span className="brand-two pt-0">By NESA</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                <ul className="navbar-nav">
                    <li className="nav-item mx-2 active">
                        <NavLink className="nav-NavLink text-white" to="/home">Home
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-NavLink text-white" to="/jobs">Jobs</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-NavLink text-white" to="/postjobs">Post Jobs</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-NavLink text-white" to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
>>>>>>> eba2ddecc1c502cba7446fed7561d9aa32f37c01
