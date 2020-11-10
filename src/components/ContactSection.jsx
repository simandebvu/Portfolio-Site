/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/ContactSection.css';

export const ContactSection = () => (
  <section id="contact" className="contact">
    <footer className="container">

      <div className="section-title">
        <h3>Contact</h3>
        <p>Please contact me if you are interested in working together.</p>
      </div>

      <div className="row" data-aos="fade-in">

        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="icofont-google-map" />
              <h4>Location:</h4>
              <p>Greencroft, ZW</p>
            </div>

            <div className="email">
              <i className="icofont-envelope" />
              <h4>Email:</h4>
              <p>simandebvu@icloud.com</p>
            </div>

            <div className="phone">
              <i className="icofont-phone" />
              <h4>Call:</h4>
              <p>+263 772 770 994</p>
            </div>
          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="https://formspree.io/f/mknpjvvw" method="POST" className="php-email-form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" name="message" id="message" rows="10" data-rule="required" data-msg="Please write something for us" />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit" className="font-weight-bolder" style={{ backgroundColor: '#000' }}>Send Message</button></div>
          </form>
        </div>

      </div>

    </footer>
  </section>
);

export default ContactSection;
