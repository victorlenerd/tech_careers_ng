import React from 'react';
import Header from '../components/header';

export default () => (
    <section className="main">
        <Header />
        <div className="jumbotron">
            <div className="overlay"></div>
            <div className="container">
                <h1>Discover The Best Jobs<br />Oppurtunities In Tech.</h1>
                <br />
                <br />
                <p>Tech careers is  platform for employers<br />and job seekers to find the <br />perfect match.</p>
            </div>
        </div>
        <div className="container">
            <div className="job-search row">
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <input type="text" className="control" placeholder="Type: e.g., fulltime..." aria-label="Type" aria-describedby="basic-addon1" />
                </div>
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <input type="text" className="control" placeholder="Role: e.g., backend..." aria-label="Role" aria-describedby="basic-addon1" />
                </div>
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <input type="text" className="control" placeholder="Location: e.g., Lagos..." aria-label="Location" aria-describedby="basic-addon1" />
                </div>
                <div className="col-lg-2 col-md-2 col-md-6 col-xs-12">
                    <select placeholder="Experience: e.g., senior...">
                    </select>
                </div>
                <div className="col-lg-2 col-md-2">
                    <button type="submit" className="btn search-btn">SEARCH</button>
                </div>
            </div>
        </div>
    </section>
);