import React, { useState, useRef } from 'react'
import ContactImg from '../assets/ContactImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';

function Contact({ contactOpen, setContactOpen }) {
  // const [contactOpen, setContactOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_5ei0ik5",
        "template_1i2ajw8",
        form.current,
        "FHcwu10LECmUbdMB0"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log("worked!!!");
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email server is temporaly unavailable. Please contact me directly to info@asavancouver.com"
        );
      });
  };

  return (
    <div id="contact">
      <div
        className={
          contactOpen ? "contact_background open" : "contact_background"
        }
      ></div>
      <div
        className={contactOpen ? "contact_container open" : "contact_container"}
      >
        <div className="contact-wrapper">
          <div className="contact_header">
            <button onClick={() => setContactOpen(false)}>
              <FontAwesomeIcon icon="fa-xmark" />
            </button>
          </div>
          <div className="contact_body">
            <div className="contact_half-img">
              <img src={ContactImg} alt="" />
            </div>
            <div className="contact_half-form">
              <h3>Let's have a chat!</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="form__item">
                  <label className="form_item-label">Name</label>
                  <input
                    className="input"
                    name="user_name"
                    type="text"
                    required
                  ></input>
                </div>
                <div className="form__item">
                  <label className="form_item-label">Email</label>
                  <input
                    className="input"
                    name="user_email"
                    type="email"
                    required
                  ></input>
                </div>
                <div className="form__item">
                  <label className="form_item-label">Inquiry</label>
                  <textarea
                    className="input"
                    name="message"
                    type="text"
                    required
                  ></textarea>
                </div>
                <button id="contact_submit" className="form_submit">
                  Submit!
                </button>
              </form>
              <div className="modal__overlay modal__overlay--loading">
                <FontAwesomeIcon icon="fa-spinner" />
              </div>
              <div className="modal__overlay modal__overlay--success font02">
                Thank you for the message!
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="#">
        <button
          className="mail_btn"
          onClick={() => setContactOpen(!contactOpen)}
        >
          <FontAwesomeIcon icon="fa-envelope" />
        </button>
      </Link>
    </div>
  );
}

export default Contact