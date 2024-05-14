import React from "react";

function Home() {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>DREAM, BELIEVE, ACHIEVE</h1>
          <p>
            <h2>Welcome to Shihumbu Girls Secondary School</h2>
          </p>
          <a href="#about" className="btn-get-started scrollto">
            Learn More
          </a>
        </div>
      </section>

      <main id="main">
        {/* Why Us Section */}
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Shihumbu is best</h3>
                  <p>
                    Shihumbu Girls Secondary School is the best choice because
                    we empower students to dream, believe, and achieve. With
                    dedicated faculty, top-notch facilities, and a supportive
                    community, we inspire excellence and prepare students to
                    become confident leaders.we offer exceptional education that
                    unlocks potential and shapes futures.
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Vision</h4>
                        <p>
                          Empowering leaders through academic excellence and
                          holistic development.
                        </p>
                      </div>
                    </div>

                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Mission</h4>
                        <p>
                          Nurturing growth through innovative education,
                          equipping students for success in a changing world
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Core Values </h4>
                        <p>
                          Excellence Integrity Compassion Resilience Community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
