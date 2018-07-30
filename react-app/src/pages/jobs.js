import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import Header from '../components/header';
import NavTop from '../components/navTop';
import Job from '../components/job';
import Footer from '../components/footer';
import JobFilter from '../components/jobFilter';
import { db } from '../util/firebase';

class Jobs extends Component {
  state = {
    jobs: [],
    type: '',
    role: '',
    loading: true
  };

  componentWillMount() {
    const {
      location: { state }
    } = this.props;
    try {
      const { type, role } = state;

      this.setState({
        type: type ? type : '',
        role: role ? role : ''
      });
    } catch (err) {}

    this.fetchJobs();
  }

  // get the filter parameter
  filterJobs = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  // Read the data from the database
  fetchJobs = () => {
    db.collection('jobs')
      .orderBy('createdAt', 'desc')
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          this.setState({
            jobs: this.state.jobs.concat({ id: doc.id, ...doc.data() }),
            loading: false
          });
        });
      });
  };

  render() {
    const { role, type } = this.state;

    // filter by job type
    const filteredQuery = this.state.jobs.filter((data) => {
      if (type === '' || type.toLowerCase() === data.jobType.toLowerCase()) {
        return true;
      }
      return false;
    });

    // filter by role
    const moreFilteredQuery = filteredQuery.filter((data) => {
      if (role === '' || data.role.toLowerCase() === role.toLowerCase()) {
        return true;
      }
      return false;
    });

    return (
      <div className="jobs">
        <Header />
        <NavTop title={'Available Jobs'} />
        <div className="container mb-5">
          <JobFilter filterJobs={this.filterJobs} type={type} role={role} />
        </div>

        {this.state.loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Loader type="Circles" color="#f58b3b" height="100" width="100" />
          </div>
        ) : (
          moreFilteredQuery.map((job, i) => {
            return <Job job={job} key={i} />;
          })
        )}
        <ScrollUpButton
          style={{
            border: '5px solid #f58b3b',
            backgroundColor: '#f58b3b'
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default Jobs;
