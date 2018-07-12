import React, { Component } from 'react';

const background = {
  background: '#d8d8d8'
};

class Apply extends Component {
  submit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const coveLetter = event.target.coverletter.value;
    console.log(firstName, lastName, email, coveLetter);
  };

  render() {
    return (
      <div className="container apply-page">
        <div className="row position-form">
          <div className="col-md-10 offset-md-1 col-sm-12 form-div rounded">
            <form
              id="apply-form"
              className="border-0 px-5"
              onSubmit={this.submit}>
              <div className="form-row pt-4">
                <div className="form-group col-md-6 col-sm-12 pt-4">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    className="form-control  "
                    id="firstname"
                    name="firstName"
                    required
                  />
                </div>

                <div className="form-group col-md-6 col-sm-12  pt-4">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    className="form-control "
                    id="lastname"
                    name="lastName"
                    required
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
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12  pt-4">
                  <label htmlFor="cv">Upload CV</label>
                  <input
                    type="file"
                    className="form-control "
                    id="cv"
                    name="resume"
                    accept=".pdf,.doc"
                    onChange={this.uploadFile}
                    style={background}
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
