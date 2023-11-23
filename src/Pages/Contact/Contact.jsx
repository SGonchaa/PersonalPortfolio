import React from "react";
import "./Contact.css";
import { useFormik } from "formik";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaDribbble, FaFacebookF, FaTwitter} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please enter the name";
      }
      if (!values.email) {
        errors.email = "Please include email address";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Please include an '@' in the email address";
      }
      if (!values.message) {
        errors.message = "Please enter the message";
      }
      return errors;
    },
  });
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2 className="contact-center-text">
            GET <span>IN TOUCH</span>
          </h2>
          <div className="contact-text-subtitle">
            I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-info-part">
            <div className="contact-info-title">Phone</div>
            <div className="contact-info">
              <FaWhatsapp className="info-icon"></FaWhatsapp>
              +216 21 184 010
            </div>
            <div className="contact-info-title">Email</div>
            <div className="contact-info">
              <MdOutlineMailOutline className="info-icon"></MdOutlineMailOutline>
              info@daria.ua
            </div>
            <div className="contact-info-title">Instagram</div>
            <div className="contact-info">
              <FaInstagram className="info-icon"></FaInstagram>
              daria.198
            </div>
            <div className="contact-info-title">Dribbble</div>
            <div className="contact-info">
              <FaDribbble className="info-icon"></FaDribbble>
              daria.dribble
            </div>
            <div className="contact-info-title">Social Profiles</div>
            <div className="social-info">
              <div className="icon-background">
                <FaFacebookF className="social-icon"></FaFacebookF>
              </div>
              <div className="icon-background">
                <FaTwitter className="social-icon"></FaTwitter>
              </div>
              <div className="icon-background">
                <TfiYoutube className="social-icon"></TfiYoutube>
              </div>
              <div className="icon-background">
                <FaDribbble className="social-icon"></FaDribbble>
              </div>
            </div>
          </div>
          <div className="contact-form-part">
            <p>
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-name-email">
                <div className="area">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="YOUR NAME"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div
                      className="error"
                      style={{ color: "darkred", textAlign: "left" }}
                    >
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="area">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div
                      className="error"
                      style={{ color: "darkred", textAlign: "left" }}
                    >
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="message-area">
                <div className="message">
                  <textarea
                    name="message"
                    id="message"
                    type="text"
                    placeholder="YOUR MESSAGE"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div
                      className="error"
                      style={{ color: "darkred", textAlign: "left" }}
                    >
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
              </div>
              <button type="submit" className="send-btn">
                <FaTelegramPlane className="send-icon" />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
