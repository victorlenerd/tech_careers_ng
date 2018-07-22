import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';

class Job extends Component {
  constructor(props) {
    super(props);
    this.pushProps = this.pushProps.bind(this);

    this.state = {
      start: moment(new Date(this.props.job.createdAt.seconds * 1000)),
      now: moment(new Date())
    };
  }

  // Send employer's email with the apply form
  pushProps(e) {
    e.preventDefault();
    this.props.history.push('/apply', {
      job: this.props.job
    });
  }
  render() {
    return (
      <div className="container mb-2">
        <div className="accordion mt-3" id="jobAccordion">
          <div className="card">
            <div className="card-header" id={this.props.job.email}>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5 className="font-weight-bold job-title text-capitalize">
                  {this.props.job.jobTitle}
                </h5>
                <h5>{this.state.start.from(this.state.now, true)}</h5>
              </div>
              <div className="job-content d-flex justify-content-sm-start justify-content-md-between mt-2">
                <span className="job-location text-capitalize">
                  {this.props.job.companyName} - {this.props.job.location}
                </span>
                <span className=" text-color job-price text-right">
                  {this.props.job.minPrice}K - {this.props.job.maxPrice}K
                </span>
              </div>
              <div className="job-content d-flex justify-content-start mt-2">
                {this.props.job.experienceJunior && (
                  <p className="badge badge-info text-capitalize ml-1">
                    Junior
                  </p>
                )}
                {this.props.job.experienceIntermediate && (
                  <p className="badge badge-info text-capitalize ml-1">
                    Intermediate
                  </p>
                )}
                {this.props.job.experienceSenior && (
                  <p className="badge badge-info text-capitalize ml-1">
                    Senior
                  </p>
                )}
              </div>
              <div className="job-content text-capitalize">
                <span className="text-color mr-4">
                  {this.props.job.jobType}
                </span>

                {this.props.job.chips.map((chip, i) => {
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
                <div className="d-flex justify-content-center justify-content-md-end job-detail-btn">
                  <button
                    className="btn btn-more"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${this.props.job.id}`}
                    aria-expanded="true"
                    aria-controls={this.props.job.id}>
                    Jobs Details
                  </button>
                </div>
              </h5>
            </div>
            <div
              id={this.props.job.id}
              className="collapse"
              aria-labelledby={this.props.job.id}
              data-parent="#jobAccordion">
              <div className="card-body">
                <h5 className="card-title"> Your Responsibilities:</h5>
                <div className="card-text">
                  <p>{this.props.job.jobDescription}</p>
                </div>
                <div className="d-flex justify-content-center">
                  <NavLink
                    to="/apply"
                    role="button"
                    className="btn btn-more"
                    onClick={this.pushProps}>
                    Apply
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Job);
