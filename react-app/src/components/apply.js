import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const background = {
    background: '#d8d8d8'
};

class Apply extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log(this.props);
    }

    // submit = (event) => {
    //     event.preventDefault();
    //     const firstName = event.target.firstName.value;
    //     const lastName = event.target.lastName.value;
    //     const email = event.target.email.value;
    //     const coveLetter = event.target.coverletter.value;
    //     console.log(firstName, lastName, email, coveLetter);
    // };


onHandleApply = (event) => {
    event.preventDefault();
    const to = this.props.location.state.job.email;
    const jobTitle = this.props.location.state.job.jobTitle;    
    const fullname = event.target.fullname.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const coverLetter = event.target.coverletter.value;
    const resume = event.target.resume.value;
    let application = {fullname, phone, email, coverLetter, to, jobTitle};
    
    
    let data = new FormData();
    data.append("myjsonkey", JSON.stringify(application));

  fetch('http://localhost:5555/apply', {
    method: 'POST',
    body: JSON.stringify(application),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function(response) {
        return response;
      }).then(function(body) {
        // console.log(body);
      });
      event.target.reset();
  }



    render() {
        return (
            <div className="container apply-page">
                <div className="row position-form">
                    <div className="col-md-10 offset-md-1 col-sm-12 form-div rounded">
                        <form
                            id="apply-form"
                            className="border-0 px-5"
                            onSubmit={this.onHandleApply}>
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
                                        // onChange={this.uploadFile}
                                    // style={background}
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

export default withRouter(Apply);
