import React, { Component } from 'react';

class Job extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="accordion mt-3" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5 className="font-weight-bold job-title">
                  Senior Front-end Engineer
            </h5>
                <h5>3d</h5>
              </div>
              <div className="job-content d-inline-flex justify-content-start mt-2">
                <span className="job-location">Konga - Ikeja, Lagos</span>
                <span className="text-color job-price ml-5">NGN 300k - 450k</span>
              </div>
              <div className="job-content mt-4">
                <span className="text-color mr-4">Fulltime</span>
                <span className="badge badge-pill badge-secondary mr-3">
                  Javascript
            </span>
                <span className="badge badge-pill badge-secondary mr-3">React</span>
                <span className="badge badge-pill badge-secondary mr-3">3d.js</span>
              </div>
              <h5 className="mt-3">
                <button
                  className="btn btn-more"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  Jobs Details
            </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample">
              <div className="card-body">
                <h5 className="card-title"> Your Responsibilities:</h5>
                <div className="card-text">
                  <p>
                    In this position, you will strengthen one of our agile
                    development teams and create user friendly single-page B2B web
                    applications and highly performant JavaScript plugins to be used
                    on our customer’s websites.
              </p>
                  <p>
                    Get involved in all phases of the product lifecycle: requirement
                    analysis, design process, implementation & testing Develop new &
                    optimize existing modules/libraries with an eye on usability,
                    responsiveness & maintenance Create proof of concepts and MVP’s
                    The assets you bring to the team:
              </p>
                  <p>
                    +3 years of relevant experience in software development with
                    JavaScript Solid knowledge of jQuery, LESS, HTML5, CSS3, ES6 &
                    Typescript +2 years of professional experience with AngularJS or
                    another JS framework / library Experience with relevant
                    Workflow-Tools, e.g. Bower, npm, Git, Grunt, Gulp, ESLint, Yarn,
                    webpack, rollup Good knowledge of test automation (e.g. Karma,
                    Jasmine, Mocha), ideally, also with Continuous Integration &
                    Deployment using Jenkins, Gitflow, Node.js Willingness to ensure
                    compliance with coding standards through regular code reviews
                    and pair programming Ability to learn quickly, outstanding
                    analytical skills, creative mindset Team spirit and enjoyment
                    for agile procedures, preferably with Kanban experience Very
                    good level of English, German language skills are a big plus We
                    offer you:
              </p>
                </div>
                <div className="row mt-5">
                  <div className="col-xs-6 col-sm-4 col-md-2 offset-xs-2 offset-md-5 offset-sm-4">
                    <a href="#" role="button" className="btn btn-block">
                      Apply
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Job;
