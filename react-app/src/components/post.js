import React, { Component } from 'react';
import Chips, { Chip } from 'react-chips';
import { firebase, db } from '../util/firebase';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      companyName: '',
      jobtitle: '',
      email: '',
      role: '',
      experienceLevel: '',
      minPrice: 0,
      maxPrice: 0,
      jobType: '',
      location: '',
      jobDescription: '',
      experienceJunior: false,
      experienceIntermediate: false,
      experienceSenior: false,
      chips: [],
      createdAt: 0
    };
  }

  //populating the state with form inputs
  //min price
  handleChangeMinPrice = (e) => {
    this.setState({
      minPrice: +e.target.value
    });
  };
  //max price
  handleChangeMaxPrice = (e) => {
    this.setState({
      maxPrice: +e.target.value
    });
  };

  handleCheckChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState(
      {
        [name]: !this.state[name]
      }
      // () => {
      //   console.log(this.state);
      // }
    );
  };

  onChangeChips = (chips) => {
    this.setState({ chips });
  };

  //Button Post
  onPostJob = (e) => {
    e.preventDefault();
    let companyName = e.target.name.value.trim();
    let jobtitle = e.target.jobtitle.value.trim();
    let email = e.target.email.value.trim();
    let role = e.target.role.value.trim();
    let jobType = e.target.jobType.value.trim();
    let location = e.target.location.value.trim();
    let jobDescription = e.target.description.value.trim();

    this.setState(
      (prevstate) => ({
        companyName: (prevstate.companyName = companyName),
        jobtitle: (prevstate.jobtitle = jobtitle),
        email: (prevstate.email = email),
        role: (prevstate.role = role),
        jobType: (prevstate.jobType = jobType),
        location: (prevstate.location = location),
        jobDescription: (prevstate.jobDescription = jobDescription)
      }),
      () => {
        console.log('This final information', this.state);
        db.collection('jobs')
          .add({
            companyName: this.state.companyName,
            jobtitle: this.state.jobtitle,
            email: this.state.email,
            experienceJunior: this.state.experienceJunior,
            experienceIntermediate: this.state.experienceIntermediate,
            experienceSenior: this.state.experienceSenior,
            jobDescription: this.state.jobDescription,
            location: this.state.location,
            maxPrice: this.state.maxPrice,
            minPrice: this.state.minPrice,
            role: this.state.role,
            chips: this.state.chips,
            jobType: this.state.jobType,
            createdAt: new Date()
          })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      }
    );

    e.target.reset();
  };

  render() {
    return (
      <div>
        <div className="container mb-5">
          <div className="row position-form rounded">
            <div className="col-md-10 col-sm-12 offset-md-1 form-div rounded">
              <form
                id="post-form"
                className=" border-0 px-4 pt-5"
                onSubmit={this.onPostJob}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                    />
                    <label htmlFor="name">Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="jobtitle"
                      id="jobtitle"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                    />
                  </div>
                </div>
                <div className="form-row pt-4">
                  <div className="form-group col-md-6">
                    <label htmlFor="role">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      id="role"
                      placeholder="Fullstack, Backend, Designer...."
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <div id="slider">
                      <label htmlFor="min-price">Min & Max Salary (NGN)</label>
                      <br />
                      <input
                        className="slider"
                        type="range"
                        name="minPrice"
                        id="min-price"
                        onChange={this.handleChangeMinPrice}
                        min="0"
                        max="1000"
                      />
                      <span className="price">{this.state.minPrice}K</span>

                      <br />
                      <input
                        className="slider"
                        type="range"
                        name="maxPrice"
                        id="max-price"
                        min="0"
                        max="1000"
                        onChange={this.handleChangeMaxPrice}
                      />
                      <span className="price">{this.state.maxPrice}K</span>
                    </div>
                  </div>
                </div>
                <div className="form-row pt-4">
                  <div className="col-md-4">
                    <label>Experience Level</label>
                  </div>
                  <div className="col-md-8 checks text-center">
                    <div className="row">
                      <div className="form-check form-check-inline col-md-4">
                        <input
                          className="form-check-input checks"
                          type="checkbox"
                          id="junior"
                          value="experienceJunior"
                          onChange={this.handleCheckChange}
                          name="experienceJunior"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1">
                          Junior
                        </label>
                      </div>
                      <div className="form-check form-check-inline col-md-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Intermediate"
                          value="experienceIntermediate"
                          name="experienceIntermediate"
                          onChange={this.handleCheckChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2">
                          Intermediate
                        </label>
                      </div>
                      <div className="form-check form-check-inline col-md-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Senior"
                          value="experienceSenior"
                          name="experienceSenior"
                          onChange={this.handleCheckChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox3">
                          Senior
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row pt-4">
                  <div className="form-group col-md-6">
                    <label htmlFor="type">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="Fulltime, Contract..."
                      name="jobType"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      placeholder="e.g Lagos, Kano, Enugu..."
                    />
                  </div>
                </div>
                <div className="form-row pt-4">
                  <div className="col-md-12">
                    <label htmlFor="description">Job Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="description"
                      rows="5"
                    />
                  </div>
                </div>
                <br />
                <label htmlFor="chips">Tags</label>
                <Chips
                  id="chips"
                  value={this.state.chips}
                  onChange={this.onChangeChips}
                  suggestions={['javascript', 'Data', 'fulltime']}
                />

                <div className=" form-row ">
                  <button
                    type="submit"
                    id="post-btn"
                    className="large-button btn col-sm-4 offset-sm-8 my-3 text-white mx-auto">
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
