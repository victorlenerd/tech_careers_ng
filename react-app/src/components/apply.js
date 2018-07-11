import React, { Component } from 'react';
import { firebase, db } from '../util/firebase';

const background = {
  background: '#d8d8d8'
};

class Apply extends Component {
  render() {
    return (
      <div className="container">
        <div className="row position-form">
          <div className="col-md-10 offset-md-1 col-sm-12 form-div rounded">
            <form id="apply-form" className="border-0 px-5 ">
              <div className="form-row pt-4">
                <div className="form-group col-md-6 col-sm-12 pt-4">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" className="form-control  " id="firstname" />
                </div>

                <div className="form-group col-md-6 col-sm-12  pt-4">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control " id="lastname" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6 col-sm-12 pt-4">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control " id="Email" />
                </div>
                <div className="form-group col-md-6 col-sm-12  pt-4">
                  <label htmlFor="cv">Upload CV</label>
                  <input
                    type="file"
                    className="form-control "
                    id="cv"
                    style={background} />
                </div>
              </div>
              <div className=" form-group form-row  pt-4">
                <label htmlFor="resume">Cover Letter</label>
                <textarea
                  className="form-control"
                  rows="6"
                  id="resume"
                  name="text"
                />
              </div>

              <div className=" form-row ">
                <button
                  type="submit"
                  id="apply-btn"
                  className="large-button btn col-sm-4 offset-sm-8 my-3 text-white mx-auto">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Apply;
