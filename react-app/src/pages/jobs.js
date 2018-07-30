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
    role: '',
    experience: ''
  };

  componentWillMount() {
    this.fetchJobs();
  }

  filterJobs = (type, role, experience) => {
    if (type || role || experience) {
      this.setState({
        type: type,
        role: role,
        experience: experience
      });
    }
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
    console.log(this.state);

    const filteredQuery = this.state.jobs.filter((data) => {
      if (this.state.type === '' && this.state.role === '') {
        return true;
      }
      if (
        data.jobType.toLowerCase() === this.state.type.toLowerCase() ||
        data.role.toLowerCase() === this.state.role.toLowerCase()
      )
        return true;
      return false;
    });

    console.log('Filtered Query', filteredQuery);

    return (
      <div className="jobs">
        <Header />
        <NavTop title={'Available Jobs'} />
        <div className="container mb-5">
          <JobFilter filterJobs={this.filterJobs} />
        </div>

        {filteredQuery.map((job, i) => {
          return <Job job={job} key={i} />;
        })}
        <Footer />
      </div>
    );
  }
}

export default Jobs;
