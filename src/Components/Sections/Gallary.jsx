import React from "react";
import Image1 from "../../assets/img/add/IMG-20240413-WA0054.jpg";

function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Here at Shihumbu High School, the images are a glimpse into the rich
            fabric of our school's daily existence. Welcome to the Gallery.
            Enter a universe where every picture perfectly encapsulates the
            spirit of youth, friendship, and shared experiences.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-1.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-3.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-4.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-5.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-6.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-7.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-8.jpg"
                className="galelry-lightbox"
              >
                <img src={Image1} className="img-b img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
