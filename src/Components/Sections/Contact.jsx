import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_fecn2o6",
        "template_gzcqjyy",
        event.target,
        "RFG8hpt-rjgQw3EXR"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setIsSent(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setIsSubmitting(false);
          setError(null);
          alert("Your message has been sent. Thank you!");
        },
        (error) => {
          console.error("Error sending email:", error);
          setIsSent(false);
          setIsSubmitting(false);
          setError(error.message); // Assuming emailjs.com returns an error object
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          {" "}
          <h2>Contact Us</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-about">
              <h3>Shihumbu Girls High School</h3>
              <p>
                Contact Us For admissions, inquiries, or visits, reach out via
                phone, email, or social media. Visit our school to learn more.
                We're eager to assist you."
              </p>
              <div className="social-links">
                <a
                  href="https://wa.me/254799300106?text=Hello i Would like to Make an Inquiry"
                  class="whatsapp"
                >
                  <i className="bi bi-whatsapp flex-shrink-0"></i>
                </a>
                <a href="#" class="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" class="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="info">
              <div>
                <i className="ri-map-pin-line"></i>
                <p>KHAYEGA KAKAMEGA</p>
              </div>

              <div>
                <i className="ri-mail-send-line"></i>
                <p>
                  <a href="mailto:junesolutionsltd@gmail.com?subject=Inquiry&body=Hello i Would like to Make an Inquiry">
                    shihumbugee@yahoo.com
                  </a>
                </p>
              </div>

              <div>
                <i className="ri-phone-line"></i>
                <p>
                  <a href="tel:+254799300106">07000000000</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <form
              action=""
              method="post"
              role="form"
              className="php-email-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className={isSubmitting ? "loading" : ""}>
                  {isSubmitting && "Loading"}
                </div>
                <div className="error-message">{error}</div>
                <div className={isSent ? "sent-message" : ""}>
                  {isSent && "Your message has been sent. Thank you!"}
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
