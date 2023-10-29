import React, { useState } from "react";
import { images } from "../../Constants";
import "./Footer.scss";
import axios from "axios";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, country, phone, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    axios
      .post("/send-email", formData)
      .then((response) => {
        setLoading(false);
        setIsFormSubmitted(true);
        console.log("Email sent successfully");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending email", error);
      });
  };

  return (
    <div id="contact" className="app__center">
      <div className="hh">
        <h2 className="head-text">
          Grab a coffee and let’s meet to solve your problems
        </h2>
      </div>

      <div className="footer row">
        <div className="col-6 moto">
          <div className="app__footer-cards">
            {/* <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:osman@projjexx.co" className="p-text">
              osman@projjexx.co
            </a>
          </div> */}
            <div>
              <p>
                <p className="head">We’d Make a Killer Team! </p> Let’s work together to build something
                special. Let us introduce you to the best services, innovations
                and get you the results you need. We can’t wait
                to hear from you!
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="wrapper">
                <div className="a">
                  <div className="app__flex app__form-row">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      required
                      value={name}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="app__flex app__form-row">
                    <input
                      className="p-text"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                      value={email}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="app__flex app__form-row">
                    <input
                      className="p-text"
                      type="text"
                      placeholder="Country"
                      name="country"
                      required
                      value={country}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="app__flex app__form-row">
                    <input
                      className="p-text"
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      required
                      value={phone}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="b">
                  <div className="app__form-row">
                    <textarea
                      className="p-text"
                      placeholder="Your Message"
                      value={message}
                      name="message"
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>

              <button type="button" className="p-text" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          ) : (
            <div className="submit-text">
              <h3 className="text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
