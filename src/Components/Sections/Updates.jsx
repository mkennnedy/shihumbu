import React from "react";
import Image1 from "../../assets/img/add/IMG-20240413-WA0054.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LatestNewsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 card on smaller screens (e.g., phones)
        },
      },
    ],
  };

  return (
    <section className="section-news section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest News</h2>
              </div>
              <div className="title-link">
                <a href="blog-grid.html">
                  All News
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="news-carousel" className="swiper">
          <div className="swiper-wrapper">
            <Slider {...settings}>
              <div className="carousel-item-c swiper-slide">
                <div className="card-box-b card-shadow news-box">
                  <div className="img-box-b">
                    <img src={Image1} className="img-b img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-header-b">
                      <div className="card-category-b">
                        <a href="#" className="category-b">
                          Sport
                        </a>
                      </div>
                      <div className="card-title-b">
                        <h2 className="title-2">
                          <a href="blog-single.html">
                            Games
                            <br /> new
                          </a>
                        </h2>
                      </div>
                      <div className="card-date">
                        <span className="date-b">18 Sep. 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item-c swiper-slide">
                <div className="card-box-b card-shadow news-box">
                  <div className="img-box-b">
                    <img src={Image1} className="img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-header-b">
                      <div className="card-category-b">
                        <a href="#" className="category-b">
                          Academics
                        </a>
                      </div>
                      <div className="card-title-b">
                        <h2 className="title-2">
                          <a href="blog-single.html">
                            Exams
                            <br /> new
                          </a>
                        </h2>
                      </div>
                      <div className="card-date">
                        <span className="date-b">18 Sep. 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item-c swiper-slide">
                <div className="card-box-b card-shadow news-box">
                  <div className="img-box-b">
                    <img src={Image1} className="img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-header-b">
                      <div className="card-category-b">
                        <a href="#" className="category-b">
                          Clubs
                        </a>
                      </div>
                      <div className="card-title-b">
                        <h2 className="title-2">
                          <a href="blog-single.html">
                            Clubs and Society Meeting
                            <br /> new
                          </a>
                        </h2>
                      </div>
                      <div className="card-date">
                        <span className="date-b">18 Sep. 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item-c swiper-slide">
                <div className="card-box-b card-shadow news-box">
                  <div className="img-box-b">
                    <img src={Image1} className="img-b img-fluid" />
                  </div>
                  <div className="card-overlay">
                    <div className="card-header-b">
                      <div className="card-category-b">
                        <a href="#" className="category-b">
                          Outings
                        </a>
                      </div>
                      <div className="card-title-b">
                        <h2 className="title-2">
                          <a href="#">
                            Trips and recreation
                            <br /> new
                          </a>
                        </h2>
                      </div>
                      <div className="card-date">
                        <span className="date-b">18 Sep. 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="news-carousel-pagination carousel-pagination"></div>
      </div>
    </section>
  );
}

export default LatestNewsSection;
