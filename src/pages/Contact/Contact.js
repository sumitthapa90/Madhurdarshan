import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [toggle, setToggle] = useState(true);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nubz5qh",
        "template_c4qssim",
        e.target,
        "LlpK40rUHyx2cYgwA"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function handleBtn() {
    setTimeout(() => {
      setToggle(!toggle);
    }, 1000);
  }
  return (
    <>
      <div className="contact">
        <section className="hero-sec">
          <video
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            height="400vh"
            className="viedo"
          >
            <source src="/images/viedo3.mp4" type="video/mp4" />
          </video>

          <div className="about">
            <div className="about-heading ">
              <h2 className="text-center py-3">
                Contact <span className="text-primary">Madhurdarshan</span>
              </h2>
              <hr className="w-25 m-auto my-2 mb-5" />
            </div>

            <div className="d-flex justify-content-center align-items-center my-4">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3375.7198829826057!2d76.35363191510447!3d32.21177786989741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d32.2104102!2d76.3521509!4m5!1s0x391b515a8bf27d85%3A0xa090ae1e527e7953!2smadhurdarshan%20home%20stay!3m2!1d32.209733799999995!2d76.35946179999999!5e0!3m2!1sen!2sin!4v1675437460725!5m2!1sen!2sin"
                width="80%"
                height="500px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="outer-div">
              <div className="about-heading ">
                <h2 className="text-center py-3">
                  For <span className="text-primary">Quries</span>
                </h2>
                <hr className="w-25 m-auto my-2 mb-5" />
              </div>
            </div>

            <div className="contact-form">
              <form className="contact-input" onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Enter you name"
                  name="name"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  autoComplete="off"
                />
                <input
                  type="number"
                  placeholder="Phone no"
                  name="phone"
                  required
                  autoComplete="off"
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  cols="30"
                  rows="6"
                  name="message"
                  required
                  autoComplete="off"
                />
                {toggle ? (
                  <button className="submit-btn" onClick={handleBtn}>
                    Send email
                  </button>
                ) : (
                  <div className="text-center fs-4">
                    <p>Your message has been send Kindly refresh</p>
                    <p>Sumit thapa will contact you ASAP &#x1F60A;</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
