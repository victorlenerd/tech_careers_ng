import React, { Component } from 'react';

class Post extends Component {
  constructor(){
    super();
    this.state = {
      companyName: '',
      email: '',
      role:'',
      experienceLevel: "",
      minPrice: 0,
      maxPrice: 0,
      jobType: '',
      location: '',
      jobDescription: ''
    }
  }

  //populating the state with form inputs
  //min price
  handleChangeMinPrice = (e) => {
    this.setState({
      minPrice: e.target.value
    });
  };
  //max price
  handleChangeMaxPrice = (e) => {
    this.setState({
      maxPrice: e.target.value
    });
  };
  //company name
  inputCompanyName = (e) => {
    this.setState({
      companyName: e.target.value
    });
  }
  //company email
  inputCompanyEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  //role
  inputRole = (e) => {
    this.setState({
      role: e.target.value
    });
  }
  //job type
  inputJobType = (e) => {
    this.setState({
      jobType: e.target.value
    });
  }
  //Location
  inputLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  }
  //JobDescription
  inputDescription = (e) => {
    this.setState({
      jobDescription: e.target.value
    });
  }

//experience level
experienceSelect = (e) => {
  let level = [0];
  level.concat(e.target.value);
  console.log(level);
  
  }


  //Button Post
  onPostJob = (e) => {
    e.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <div className="container mb-5">
          <div className="row position-form rounded">
            <div className="col-md-10 col-sm-12 offset-md-1 form-div rounded">
              <form id="post-form" className=" border-0 px-4 pt-5" onSubmit= {this.onPostJob}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Company Name</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={this.inputCompanyName} />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" id="email" onChange={this.inputCompanyEmail} />
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
                      onChange = {this.inputRole}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <div id="slider" >
                      <label htmlFor="min-price">Min & Max Salary</label>
                      <br />
                      <input
                        className="slider"
                        type="range"
                        name="price-min"
                        id="min-price"
                        min="0"
                        max="1000"
                        onChange = { this.handleChangeMinPrice }
                      />
                      <span className="price">{this.state.minPrice}K</span>

                      <br />
                      <input
                        className="slider"
                        type="range"
                        name="price-max"
                        id="max-price"
                        min="0"
                        max="1000"
                        onChange = { this.handleChangeMaxPrice }
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
                          value="1"
                          onChange= {this.experienceSelect}
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
                          value="2"
                          onChange= {this.experienceSelect}
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
                          value="3"
                          onChange= {this.experienceSelect}
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
                    <label htmlFor="name">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="Fulltime, Contract..."
                      onChange = {this.inputJobType}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="e.g Lagos, Kano, Enugu..."
                      onChange={this.inputLocation}
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
                      onChange= {this.inputDescription}
                    />
                  </div>
                </div>
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
