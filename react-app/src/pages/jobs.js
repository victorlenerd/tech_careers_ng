import React, { Component } from 'react';

import Header from '../components/header';
import NavTop from '../components/navTop';
import Job from '../components/job';
import Footer from '../components/footer';
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
      <div className="pb-5">
        <Header />
        <NavTop title={'Jobs'} />
        <h1 className="job-page-heading font-weight-light m-5">
          <div className="container">Availabe Jobs</div>
        </h1>
        {this.state.jobs.map((job, i) => {
          return <Job job={job} key={i} />;
        })}
        <Footer />
      </div>
    );
  }
}

export default Jobs;
