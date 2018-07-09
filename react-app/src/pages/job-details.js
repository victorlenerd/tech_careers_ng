import React from 'react';
import Header from '../components/header';

export default () => (
    <div className="container">
        <Header />
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <h5 className="font-weight-bold job-title">Senior Front-end Engineer</h5>
                    <div className="job-content d-inline-flex justify-content-start mt-2">
                        <span className="job-location">Konga - Ikeja, Lagos</span>
                        <span className="text-color job-price ml-5">NGN 300k - 450k</span>
                    </div>
                    <div className="job-content mt-4">
                        <span className="text-color mr-4">Fulltime</span>
                        <span className="badge badge-pill mr-3">Javascript</span>
                        <span className="badge badge-pill mr-3">Elastic Search</span>
                        <span className="badge badge-pill mr-3">3d.js</span>
                    </div>
                    <div className="experience-level">
                        <p className="text-color mr-1">Experience Level:-</p>
                        <p className="level">Mid-Level, Senior</p>
                    </div>
                </div>
                <div className="col-md-2 btn-div">
                    <button type="button" className="btn btn-block  my-5 mx-auto">Apply</button>
                </div>
            </div>
            <hr />
            <div className="paragraph">
                <p>
                    Your Responsibilities:
            </p>
                <p>In this position, you will strengthen one of our agile development teams and create user friendly single-page
                    B2B web applications and highly performant JavaScript plugins to be used on our customer’s websites.
            </p>
                <p>Get involved in all phases of the product lifecycle: requirement analysis, design process, implementation & testing
                    Develop new & optimize existing modules/libraries with an eye on usability, responsiveness & maintenance
                    Create proof of concepts and MVP’s The assets you bring to the team:
            </p>
                <p>+3 years of relevant experience in software development with JavaScript Solid knowledge of jQuery, LESS, HTML5,
                    CSS3, ES6 & Typescript +2 years of professional experience with AngularJS or another JS framework / library
                    Experience with relevant Workflow-Tools, e.g. Bower, npm, Git, Grunt, Gulp, ESLint, Yarn, webpack, rollup
                    Good knowledge of test automation (e.g. Karma, Jasmine, Mocha), ideally, also with Continuous Integration
                    & Deployment using Jenkins, Gitflow, Node.js Willingness to ensure compliance with coding standards through
                    regular code reviews and pair programming Ability to learn quickly, outstanding analytical skills, creative
                    mindset Team spirit and enjoyment for agile procedures, preferably with Kanban experience Very good level
                    of English, German language skills are a big plus We offer you:
            </p>
                <p>Prospect: We are a continuously growing team with experts in the most future-oriented fields of customer intelligence.
                    We are dealing with real big data scenarios and data from various business models and industries. Apart from
                    interesting tasks we offer you considerable freedom for your ideas and perspectives for the development of
                    your professional and management skills. Team oriented atmosphere: Our culture embraces integrity, team work
                    and innovation. Our employees value the friendly atmosphere that is the most powerful driver within our company.
                    Goodies: Individual trainings, company tickets, team events, table soccer, fresh fruits and a sunny roof
                    terrace. TechCulture:Work with experienced developers who share the ambition for well-written and clean code.
                    Choose your hardware, OS and IDE. Bring in your own ideas, work with open source and have fun at product
                    demos, hackathons and meetups.
            </p>
            </div>
            <div className="row mt-5">
                <div className="col-xs-6 col-sm-4 col-md-2 offset-xs-2 offset-md-5 offset-sm-4">
                    <button type="button" className="btn btn-block">Apply</button>
                </div>
            </div>
        </div>
    </div>
)