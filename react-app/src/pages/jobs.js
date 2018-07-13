import React, { Component } from 'react';

import Header from '../components/header';
import NavTop from '../components/navTop';
import Job from '../components/job';
import Footer from '../components/footer';
import JobFilter from '../components/jobFilter';
import { db } from '../util/firebase';

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };
  }
  componentWillMount() {
    db.collection('jobs')
      .orderBy('createdAt', 'desc')
      .get()
      .then((docs) => {
        console.log(docs);
        docs.forEach((doc) => {
          this.setState({
            jobs: this.state.jobs.concat({ id: doc.id, ...doc.data() })
          });
        });
      });
  }
  render() {
    return (
      <div className="jobs">
        <Header />
        <NavTop title={'Available Jobs'} />
        <div className="container mb-5">
          <JobFilter />
        </div>
        {this.state.jobs.map((job, i) => {
          return <Job job={job} key={i} />;
        })}
        <Footer />
      </div>
    );
  }
}

export default Jobs;
