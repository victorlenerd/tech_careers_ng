import React, { Component } from 'react';

class Apply extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        resume: '',
        coveLetter: ''
    }

    submit = (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const coveLetter = event.target.coverletter.value;
        console.log(firstName, lastName, email, coveLetter);
        this.setState({
            firstName,
            lastName,
            email,
            coveLetter
        })
        event.target.firstName.value = '';
        event.target.lastName.value = '';
        event.target.email.value = '';
        event.target.files = '';
        event.target.coverletter.value = '';
    }

    uploadFile = (event) => {
        let resume = event.target.files[0].name;
        console.log(resume);
        if (file) {
            let data = new FormData();
            data.append('file', file);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row position-form">
                    <div className="col-md-10 offset-md-1 col-sm-12 form-div rounded">

                        <form id="apply-form" className="border-0 px-5 " onSubmit={this.submit} >
                            <div className="form-row pt-4">
                                <div className="form-group col-md-6 col-sm-12 pt-4">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" id="firstname" name='firstName' required />
                                </div>

                                <div className="form-group col-md-6 col-sm-12  pt-4">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control " id="lastname" name='lastName' required />

                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6 col-sm-12 pt-4">
                                    <label htmlFor="email">Email</label>
                                    <input type='email' className="form-control " id="Email" name='email' required />
                                </div>
                                <div className="form-group col-md-6 col-sm-12  pt-4">
                                    <label htmlFor="cv">Upload Resume</label>
                                    <input type="file" className="form-control " id="cv" name='resume' accept=".pdf,.doc" onChange={this.uploadFile} required />
                                </div>
                            </div>
                            <div className=" form-group form-row  pt-4">
                                <label htmlFor="resume">Cover Letter</label>
                                <textarea className="form-control" rows="6" id="coverLetter" name="coverletter" required></textarea>
                            </div>

                            <div className=" form-row ">
                                <button id="apply-btn" className="large-button btn col-sm-4 offset-sm-8 my-3 text-white mx-auto">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Apply;
