import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 p-3">
      <div className="text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3  mx-auto mt-3">
            <Link to="/" className="text-decoration-none text-white">
              <img className="logo-img" src="./images/logo.png" alt="foot" />
              <h1 className="fw-bold"> मधुरदर्शन</h1>
              <p>Luxury is not a place, Its an Experince</p>
            </Link>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6>Menu</h6>
            <Link to="/" className="text-decoration-none text-white">
              <p>Home</p>
            </Link>
            <Link to="/about" className="text-decoration-none text-white">
              <p>About</p>
            </Link>
            <Link to="/rooms" className="text-decoration-none text-white">
              <p>Rooms</p>
            </Link>
            <Link to="/contact" className="text-decoration-none text-white">
              <p>Contact</p>
            </Link>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3  d-flex flex-column gap-2 ">
            <h6>Social Links</h6>

            <div>
              <a href="https://www.facebook.com/sami.rocker.18">
                <i className="fa-brands fa-facebook mx-2 text-white fs-3"></i>
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/madhurdarshan/">
                <i className="fa-brands fa-instagram mx-2 text-white fs-3 "></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3  d-flex flex-column gap-3 ">
            <h6 className="fw-bold">Contact Us</h6>
            <div>
              <i className="fa-solid fa-phone mx-2"></i> 9816471775
            </div>
            <div>
              <i className="fa-regular fa-envelope mx-2 "></i>
              Email- sumitthapa90@gmail.com
            </div>
            <div>
              <i class="fa-brands fa-whatsapp mx-2"></i> 9816471775
            </div>

            <div>
              <i class="fa-solid fa-location-dot mx-2"></i>Khaniyara
              Teh-Dharamshala-Distt-Kangra
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
