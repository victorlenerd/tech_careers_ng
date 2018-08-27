import React, { Component } from 'react';
import Chips from 'react-chips';
import { db } from '../util/firebase';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      minPrice: 0,
      maxPrice: 0,
      experienceJunior: false,
      experienceIntermediate: false,
      experienceSenior: false,
      chips: [],
      createdAt: 0,
      jobTitle: '',
      posted: false
    };
  }

  // populating the state with form inputs min price
  handleChangeMinPrice = (e) => {
    this.setState({
      minPrice: e.target.value
    });
  };

  // populating the state with form inputs max price
  handleChangeMaxPrice = (e) => {
    this.setState({
      maxPrice: e.target.value
    });
  };

  // Get the experience level
  handleCheckChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: !this.state[name]
    });
  };

  // Collect the tags input
  onChangeChips = (chips) => {
    this.setState({ chips });
  };

  //Button Post
  onPostJob = (e) => {
    e.preventDefault();
    const jobTitle = e.target.jobTitle.value.trim().toLowerCase();
    const companyName = e.target.name.value.trim().toLowerCase();
    const email = e.target.email.value.trim();
    const role = e.target.role.value.trim().toLowerCase();
    const jobType = e.target.jobType.value.trim().toLowerCase();
    const location = e.target.location.value.trim().toLowerCase();
    const jobDescription = e.target.description.value.trim();

    // Send the data to the database
    db.collection('jobs')
      .add({
        companyName,
        email,
        jobDescription,
        location,
        role,
        jobType,
        jobTitle,
        experienceJunior: this.state.experienceJunior,
        experienceIntermediate: this.state.experienceIntermediate,
        experienceSenior: this.state.experienceSenior,
        maxPrice: this.state.maxPrice,
        minPrice: this.state.minPrice,
        chips: this.state.chips,
        createdAt: new Date()
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        this.setState({
          posted: true,
          chips: []
        });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });

    // clear the input
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
                {this.state.posted && (
                  <div
                    className="alert alert-success mt-3 text-center"
                    role="alert">
                    <h3>Job Posted Successfully</h3>
                  </div>
                )}
                <label htmlFor="email">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  className="form-control"
                  id="job-title"
                  placeholder="Frontend Engineer"
                />
                <br />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Company name..."
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="e.g. example@example.com"
                      required
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
                      required
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
                        required
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
                        required
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
                          value="junior"
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
                          id="intermediate"
                          value="intermediate"
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
                          value="senior"
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>
                <br />
                <label htmlFor="chips">Tags</label>
                <Chips
                  id="chips"
                  value={this.state.chips}
                  onChange={this.onChangeChips}
                  suggestions={[
                    'Javascript',
                    'Data',
                    'React',
                    'Nodejs',
                    'Angular'
                  ]}
                />

                <div className=" form-row ">
                  <button
                    type="submit"
                    id="post-btn"
                    className="btn btn-large my-3 mx-auto">
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
