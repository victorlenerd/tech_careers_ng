import React from 'react';

import ppp from '../images/profile-picture-placeholder.png';
import okwukwe from '../images/okwukwe.jpg';
// import lola from '../images/lola.jpg';
import lucky from '../images/lucky.jpg';
import pelumi from '../images/pelumi.jpg';
import img from '../images/img.jpg';

export default () => (
  <div>
    <div className="container my-5 pb-5 main">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-sm-12 about-div">
          <p className="text-center about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt.
          </p>
        </div>
      </div>

      <h1 className="text-center">The Team</h1>

      <div className="row">
        <div className="col-lg-3 col-md-6 pt-2 text-center mt-3">
          <div className="card shadow">
            <img className="card-img-top" src={okwukwe} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">
                Okwukwe Ewurum <br />
                <span className="about-color font-weight-bold">Team Lead</span>
              </h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <a
                href="https://www.linkedin.com/in/okwukwe-ewurum-1625a338/"
                className="btn btn-linkedin">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pt-2 text-center mt-3">
          <div className="card shadow">
            <img className="card-img-top" src={img} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">
                Temilola Kutelu
                <br />
                <span className="about-color font-weight-bold">Developer</span>
              </h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <a
                href="https://www.linkedin.com/in/temilola-kutelu-714761a4/"
                className="btn btn-linkedin">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 pt-2 text-center mt-3">
          <div className="card shadow">
            <img className="card-img-top" src={lucky} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">
                Lucky Amadi
                <br />
                <span className="about-color font-weight-bold">Developer</span>
              </h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <a
                href="https://www.linkedin.com/in/lucky-amadi-40408b41/"
                className="btn btn-linkedin">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pt-2 text-center mt-3">
          <div className="card shadow">
            <img className="card-img-top" src={pelumi} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">
                Pelumi Adebayo
                <br />
                <span className="about-color font-weight-bold">Developer</span>
              </h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              <a
                href="https://www.linkedin.com/in/adepelumi/"
                className="btn btn-linkedin">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
