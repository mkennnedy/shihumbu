import React from "react";
import Image2 from "../../assets/img/add/Dp.jpg";
function Team() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="about-section-title bg-white text-center text-primary px-3 mb-5">
            Management
          </h6>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src={Image2}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              ></div>
              <div className="text-center p-4">
                <h5 className="mb-0">Jacob OKELLO</h5>
                <small>B.O.G Charman Person</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src={Image2}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              ></div>
              <div className="text-center p-4">
                <h5 className="mb-0">Onyango Henry</h5>
                <small>PTA Chairperson </small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src={Image2}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              ></div>
              <div className="text-center p-4">
                <h5 className="mb-0">Sheila Wanjiru</h5>
                <small>School Charplain</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src={Image2}
                  alt=""
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              ></div>
              <div className="text-center p-4">
                <h5 className="mb-0">Rose Wanjala</h5>
                <small>School Matron</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
