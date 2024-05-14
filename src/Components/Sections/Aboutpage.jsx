import React from "react";
import Image1 from "../../assets/img/add/IMG-20240413-WA0054.jpg";

function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                About
              </h1>
              <h1 className="mb-4 text-white">
                Shihumbu Girls: Where academic excellence is a way of life.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-graduation-cap text-danger mb-4"></i>
                  <h5 className="mb-3">Academics</h5>
                  <p>
                    At Shihumbu Girls, academic excellence is our standard. Join
                    us and thrive in a supportive environment dedicated to your
                    success.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-danger mb-4"></i>
                  <h5 className="mb-3">E - learning</h5>
                  <p>
                    Embark on a digital journey with e-learning at Shihumbu
                    Girls. Access quality education anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-medal text-danger mb-4"></i>
                  <h5 className="mb-3">Extra CO-Curriculum</h5>
                  <p>
                    Unlock passions beyond the classroom at Shihumbu Girls.
                    Engage in diverse extracurricular activities to enrich your
                    school experience.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-book-open text-danger mb-4"></i>
                  <h5 className="mb-3">Library</h5>
                  <p>
                    Unleash your potential with our wide array of books and
                    resources at Shihumbu Girls. Dive into learning with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={Image1}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="about-section-title bg-white text-start text- pe-3">
                About Us
              </h6>
              <h1 className="mb-4">Welcome to Shihumbu Girls</h1>
              <p className="mb-4">
                The school was founded in 2015, and the local M.P. then
                communicated with the Ministry of Education, Science, and
                Technology to get funding to begin construction of the facility.
              </p>
              <p className="mb-4">
                The MOEST funded the School with 16 million which helped to put
                up H classrooms, Twin labs, an administration block, toilets,
                and the Dining hall. Other facilities have been constructed by
                using maintenance and Infrastructure funds.
              </p>
              <p className="mb-4">
                The first students were admitted in 2017 - The first K-C-S-E
                exams were done in 2018.It started as a girls' boarding school,
                but today it has a full wing for day scholars. The school
                community and the NG-CDF also played an important role in the
                establishment.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-success me-2"></i>
                    Supportive Teaching Staff
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-success me-2"></i>
                    "Integrated Arr & Sports
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-successs me-2"></i>
                    Academic Curriculum
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Community-focused Learning
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-success me-2"></i>
                    Online Classes
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-success me-2"></i>
                    Technology-driven Education
                  </p>
                </div>
              </div>
              <a className="btn-get-started scrollto" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
