import React from 'react';
import { NavLink } from 'react-router-dom';
import Apply from '../components/apply';


export default (props) => {

  return (
    <div className="container my-5">
      <div className="accordion mt-3" id="accordionExample">
        <div className="card">
          <div className="card-header" id={props.job.email}>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h5 className="font-weight-bold job-title">
                {props.job.companyName}
              </h5>
              <h5>3d</h5>
            </div>
            <div className="job-content d-inline-flex justify-content-start mt-2">
              <span className="job-location">{props.job.companyName} - {props.job.location}</span>
              <span className="text-color job-price ml-5">{props.job.minPrice}K - {props.job.maxPrice}K</span>
            </div>
            <div className="job-content mt-4">
              <span className="text-color mr-4">{props.job.jobType}</span>

              {props.job.chips.map((chip, i) => {
                return (
                  <span key={i} className="badge badge-pill badge-secondary mr-3">{chip}</span>
                )
              })}

            </div>
            <h5 className="mt-3">
              <button
                className="btn btn-more"
                type="button"
                data-toggle="collapse"
                data-target={props.job.email}
                aria-expanded="true"
                aria-controls={props.job.email}>
                Jobs Details
            </button>
            </h5>
          </div>
          <div
            id={props.job.email}
            className="collapse"
            aria-labelledby={props.job.email}
            data-parent="#accordionExample">
            <div className="card-body">
              <h5 className="card-title"> Your Responsibilities:</h5>
              <div className="card-text">
                <p>
                  {props.job.jobDescription}
                </p>
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
  )

}


