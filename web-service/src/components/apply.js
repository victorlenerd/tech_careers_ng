import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMsg: false,
      email: true,
      subject: true
    };
  }

  componentWillMount() {
    console.log(this.props);

    let routeParam = this.props.location.search.replace('?', '');
    let newRouteParam = routeParam.split('=');
    console.log(newRouteParam);
    if (newRouteParam[0] === 'success' && newRouteParam[1] === 'true') {
      this.setState({
        displayMsg: true,
        email: false,
        subject: false
      });
    }
  }

  render() {
    return (
      <div className="container apply-page">
        <div className="row position-form">
          <div className="col-md-10 offset-md-1 col-sm-12 form-div rounded">
            <form
              encType="multipart/form-data"
              action="http://54.157.232.127:5555/apply"
              method="post"
              id="apply-form"
              className="border-0 px-5">
              {this.state.displayMsg && (
                <div
                  className="alert alert-success mt-3 text-center"
                  role="alert">
                  <h3>Application Submitted</h3>
                </div>
              )}
              {/* Hidden input value from the database */}
              {this.state.email && (
                <input
                  type="hidden"
                  id="employer-email"
                  name="to"
                  value={this.props.location.state.job.email}
                />
              )}
              {this.state.subject && (
                <input
                  type="hidden"
                  id="jobTitle"
                  name="jobTitle"
                  value={this.props.location.state.job.jobTitle}
                />
              )}
              <div className="form-row pt-4">
                <div className="form-group col-md-6 col-sm-12 pt-4">
                  <label htmlFor="firstname">Full Name</label>
                  <input
                    type="text"
                    className="form-control  "
                    id="firstname"
                    name="fullname"
                    required
                  />
                </div>

                <div className="form-group col-md-6 col-sm-12  pt-4">
                  <label htmlFor="lastname">Phone</label>
                  <input
                    type="phone"
                    className="form-control "
                    id="phone"
                    name="phone"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6 col-sm-12 pt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control "
                    id="Email"
                    name="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12  pt-4">
                  <label htmlFor="cv">Upload CV</label>
                  <input
                    type="file"
                    className="form-control "
                    id="cv"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
              </div>
              <div className=" form-group form-row  pt-4">
                <label htmlFor="coverletter">Cover Letter</label>
                <textarea
                  className="form-control"
                  rows="6"
                  id="coverletter"
                  name="coverletter"
                  required
                  autoComplete="off"
                />
              </div>

              <div className=" form-row ">
                <button
                  type="submit"
                  id="apply-btn"
                  className="btn btn-large my-3 mx-auto">
                  Apply
                </button>
              </div>
            </form>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Apply);
