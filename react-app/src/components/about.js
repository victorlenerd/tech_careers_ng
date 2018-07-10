import React from 'react';

import ppp from '../images/profile-picture-placeholder.png';

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
        <div className="col-md-3 col-sm-6 pt-2 text-center">
          <div className="card shadow">
            <img className="card-img-top" height="200" src={ppp} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Yemisi Segun</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 pt-2 text-center">
          <div className="card shadow">
            <img className="card-img-top" height="200" src={ppp} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Yemisi Segun</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 pt-2 text-center">
          <div className="card shadow">
            <img className="card-img-top" height="200" src={ppp} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Yemisi Segun</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 pt-2 text-center">
          <div className="card shadow">
            <img className="card-img-top" height="200" src={ppp} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Yemisi Segun</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
