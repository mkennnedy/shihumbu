import React from "react";

const FeatureSection = () => {
  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>01</span>
              <h3>Academics</h3>
              <p></p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>02</span>
              <h3>Books & Library</h3>
              <p>Explore our vast collection of books and learning material.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>03</span>
              <h3>Extracurricular </h3>
              <p>Engage in a variety of clubs and societies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
