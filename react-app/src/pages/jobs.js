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
    }
  }
  componentWillMount() {
    db.collection("jobs").get()
      .then((docs) => {
        console.log(docs);
        docs.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          this.setState({
            jobs: this.state.jobs.concat(doc.data())
          })
        });
      });
  }
  render() {
    return (
      <div>
        <Header />
        <NavTop title ={"Jobs"}/>
        <h1 className="job-page-heading font-weight-light m-5">Availabe Jobs</h1>
        {this.state.jobs.map((job, i) => {
          return (
            <Job job={job} key={i} />
          )
        })}
        <Footer />
      </div>
    )
  }
}

export default Jobs;
