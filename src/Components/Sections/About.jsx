import React from "react";
import Image1 from "../../assets/img/add/principal.jpg";
import Image2 from "../../assets/img/add/Dp.jpg";
import "../../style/about.css";

function About() {
  const doc1 = `${process.env.PUBLIC_URL}/pdfs/Kennedy.pdf`;
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Principal</h2>
          </div>
          <div className="row">
            <div className="col-lg-5 pt-4 pt-lg-0 content">
              <div className="about-text">
                <h1 className="mb-4">
                  As the principal of Shihumbu Girls, it's my privilege to
                  welcome you to our vibrant community.
                </h1>
                <p className="mb-4">
                  As the Principal, I am honored to lead a dedicated team of
                  educators who are passionate about nurturing academic
                  excellence and personal growth. Our curriculum is designed to
                  inspire curiosity, foster creativity, and develop critical
                  thinking skills, preparing students for success in the
                  classroom and beyond.
                </p>
                <p className="mb-4">
                  Here at Shihumbu Girls, we believe in the power of holistic
                  education. Our comprehensive approach encompasses not only
                  rigorous academics but also a wide range of extracurricular
                  activities, sports, and community initiatives. Through these
                  diverse opportunities, students have the chance to explore
                  their passions, develop leadership skills, and build lifelong
                  friendships.
                </p>
                <p className="mb-4">
                  I invite you to explore our website to learn more about the
                  exciting programs and opportunities available at Shihumbu
                  Girls. Whether you are a prospective student, parent, or
                  member of our community, we look forward to welcoming you into
                  the Shihumbu family.
                </p>
                <h4 className="mb-4">
                  Together, let us strive for excellence and make a positive
                  impact in the world
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={Image1}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={Image2}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="col-lg-5 pt-4 pt-lg-0 content">
              <div className="about-text">
                <div className="section-title">
                  <h2>Deputy Principal</h2>
                </div>
                <h1 className="mb-4">
                  Hi there, I'm Jacob Okell, the Deputy Principal. Welcome to
                  Shihumbu Girls.
                </h1>
                <p className="mb-4">
                  I oversee discipline here at Shihumbu Girls. Our focus is on
                  maintaining a safe, respectful, and conducive learning
                  environment for all students.
                </p>
                <p className="mb-4">
                  Discipline is key to success, and I work closely with
                  teachers, staff, and students to ensure that our school
                  operates smoothly. By setting clear expectations, enforcing
                  rules consistently, and providing guidance and support, we aim
                  to instill a culture of respect, responsibility, and
                  self-discipline among our students.
                </p>
                <p className="mb-4">
                  At Shihumbu Girls, we believe that a disciplined environment
                  is essential for academic achievement and personal growth.
                  Together, let's create a positive and nurturing atmosphere
                  where every student can thrive.
                </p>
                <h4 className="mb-4">
                  Thank you for your support in promoting discipline and
                  excellence at Shihumbu Girls.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
