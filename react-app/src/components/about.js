import React from 'react';

export default () => (
  <div>
    <div className="container my-5 pb-5 main">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-sm-12 about-div mt-5">
          <h1 className="text-center about-theme">TechCareers NG</h1>
          <p className=" about-text about-info">
            Tech is a popular industry to work in, partly because most tech jobs
            pay very well or the freedom it gives you to unleash your creativity
            and learn new things everyday. But where can you find jobs with
            great tech companies? Well,
            <strong className="about-theme font-italic">
              {' '}
              TechCareers NG{' '}
            </strong>
            is one place you can start. We put together the list of the best
            tech job opportunities so you can quickly and easily find jobs in
            your city to apply to. There is always a job form for every area of
            interests, experience level and technology stack.
          </p>
        </div>
      </div>

      <h1 className="text-center about-theme mt-5">The Team</h1>

      <div className="row">
        <div className="col-lg-3 col-md-6 pt-2 text-center mt-3">
          <div className="card shadow">
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/w3bh4ck/image/upload/v1532427692/techcareers/okwukwe.jpg"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">
                Okwukwe Ewurum <br />
                <span className="about-theme font-weight-bold">Team Lead</span>
              </h5>
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
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/w3bh4ck/image/upload/v1532427693/techcareers/img.jpg"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">
                Temilola Kutelu
                <br />
                <span className="about-color font-weight-bold">Developer</span>
              </h5>
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
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/w3bh4ck/image/upload/v1532427691/techcareers/lucky.jpg"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">
                Lucky Amadi
                <br />
                <span className="about-color font-weight-bold">Developer</span>
              </h5>
              <p className="card-text" />
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
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/w3bh4ck/image/upload/v1532427698/techcareers/pelumi.jpg"
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">
                Pelumi Adebayo
                <br />
                <span className="about-color font-weight-bold">Developer</span>
              </h5>
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
