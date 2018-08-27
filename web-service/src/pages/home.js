import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';

class Home extends PureComponent {
  state = {
    type: '',
    role: ''
  };

  searchJob = () => {
    const { type, role } = this.state;

    this.props.history.push('jobs', {
      type,
      role
    })
  }

  updateOption = ({ target: {  name, value }  }) => this.setState({  [name]: value })

  render() {
    return (
      <section className="main">
        <Header />
        <div className="jumbotron d-flex flex-column justify-content-center align-items-center">
          <div className="overlay" />
          <div className="container mb-5">
            <h1>
              Discover The Best Jobs<br />Opportunities In Tech.
            </h1>
            <br />
            <p>
              Tech careers is platform for employers<br />and job seekers to find
              the <br />perfect match.
            </p>
          </div>

          <div className="container">
            <div className="job-filter search-filter row p-2">
              <select onChange={this.updateOption} name="type" className="col-md-4 filter-control search-filter">
                <option value="">Select Type...</option>
                <option value="fulltime">Fulltime</option>
                <option value="parttime">Parttime</option>
                <option value="remote">Remote</option>
                <option value="freelance">Freelance</option>
              </select>
              <select onChange={this.updateOption} name="role" className="col-md-5 filter-control search-filter">
                <option value="">Select Role...</option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="fullstack">Fullstack</option>
                <option value="designer">Designer</option>
              </select>
              <div className="col-md-3 filter-control py-0 btn-search-div">
                <div className="w-100 d-flex justify-content-center justify-content-md-end">
                  <div onClick={this.searchJob} className="btn btn-search">
                    Search
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Home);
