import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import LazyLoad from 'react-lazy-load';

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
    this.fetchJobs();
  }

  filterJobs = (name, value) => {
    this.setState({
      [name]: value
    });
  };

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
    const filteredQuery = this.state.jobs.filter((data) => {
      if (
        this.state.type === '' ||
        this.state.type.toLowerCase() === data.jobType.toLowerCase()
      ) {
        return true;
      }
      return false;
    });

    const moreFilteredQuery = filteredQuery.filter((data) => {
      if (
        this.state.role === '' ||
        data.role.toLowerCase() === this.state.role.toLowerCase()
      ) {
        return true;
      }
      return false;
    });

    return (
      <div className="jobs">
        <Header />
        <NavTop title={'Available Jobs'} />
        <div className="container mb-5">
          <JobFilter filterJobs={this.filterJobs} />
        </div>

        {this.state.loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Loader type="Circles" color="#f58b3b" height="100" width="100" />
          </div>
        ) : (
          moreFilteredQuery.map((job, i) => {
            return (
              <LazyLoad key={i} height={270} offset={100}>
                <Job job={job} key={i} />
              </LazyLoad>
            );
          })
        )}

        <Footer />
      </div>
    );
  }
}

export default Jobs;
