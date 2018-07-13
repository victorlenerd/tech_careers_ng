import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

export default (props) => {
  const start = moment(new Date(props.job.createdAt.seconds * 1000));
  const now = moment(new Date());
  console.log('from job --->', start.from(now, true));
  return (
    <div className="container mb-2">
      <div className="accordion mt-3" id="jobAccordion">
        <div className="card">
          <div className="card-header" id={props.job.email}>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h5 className="font-weight-bold job-title text-capitalize">
                {props.job.jobTitle}
              </h5>
              <h5>{start.from(now, true)}</h5>
            </div>
            <div className="job-content d-flex justify-content-sm-start justify-content-md-between mt-2">
              <span className="job-location text-capitalize">
                {props.job.companyName} - {props.job.location}
              </span>
              <span className=" text-color job-price text-right">
                {props.job.minPrice}K - {props.job.maxPrice}K
              </span>
            </div>
            <div className="job-content mt-4">
              <span className="text-color mr-4">{props.job.jobType}</span>

              {props.job.chips.map((chip, i) => {
                return (
                  <span
                    key={i}
                    className="badge badge-pill badge-secondary text-capitalize mr-3">
                    {chip}
                  </span>
                );
              })}
            </div>
            <h5 className="mt-3">
              <button
                className="btn btn-more"
                type="button"
                data-toggle="collapse"
                data-target={`#${props.job.id}`}
                aria-expanded="true"
                aria-controls={props.job.id}>
                Jobs Details
              </button>
            </h5>
          </div>
          <div
            id={props.job.id}
            className="collapse"
            aria-labelledby={props.job.id}
            data-parent="#jobAccordion">
            <div className="card-body">
              <h5 className="card-title"> Your Responsibilities:</h5>
              <div className="card-text">
                <p>{props.job.jobDescription}</p>
              </div>
              <div className="row mt-5">
                <div className="col-xs-6 col-sm-4 col-md-2 offset-xs-2 offset-md-5 offset-sm-4">
                  <NavLink to="/apply" role="button" className="btn btn-block">
                    Apply
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
