import React, { Component } from 'react';

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
    role: ''
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
            jobs: this.state.jobs.concat({ id: doc.id, ...doc.data() })
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

        {moreFilteredQuery.map((job, i) => {
          return <Job job={job} key={i} />;
        })}
        <Footer />
      </div>
    );
  }
}

export default Jobs;
