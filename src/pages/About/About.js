import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <section className="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="400vh"
          className="viedo"
        >
          <source src="/images/viedo.mp4" type="video/mp4" />
        </video>
        <div className="about">
          <div className="about-heading ">
            <h2 className="text-center py-3">
              About <span className="text-primary">Madhurdarshan</span>
            </h2>
            <hr className="w-25 m-auto my-2 mb-5" />
          </div>

          <div className="about-para">
            <p className="about-paragraph">
              Khaniyara got its name because of its slate deposits. It has slate
              mines and is a sight-seeing place. It is popular among local
              people as a picnic spot. Our home comes with 2 bedrooms with
              geysers which is specifically for 4 adults. Parking, Outdoor area,
              Wifi , Almiras,Badminton, King Size bed, Laundry, Guide(for
              Tracking),Bonfire, Bed &amp; Breakfast, Mini
              Fridge,Induction,Kettle,Dinning Table,Cutlerys, Extra bed can be
              provided. One of the best peaceful and calm place for a vacation
              trip. you can come and experince your self.
            </p>
            <p></p>
          </div>
        </div>

        <section className="people">
          <div className="container">
            <div class="card-b">
              <div class="img-container">
                <img src="/images/my.jpg" alt="" />
              </div>
              <div class="card-details">
                <h2>Manager</h2>
                <p className="inside-card">
                  Hello My name is Sumit and i handle the management and
                  bookings.
                </p>
                <p>
                  Email: <span>sumitthapa90@gmail.com</span>
                </p>
                <p>Phone no: 9816471775</p>
                <hr />
                <p>Profession: Software Developer</p>
              </div>
            </div>
            <div class="card-b">
              <div class="img-container">
                <img
                  src="https://1.bp.blogspot.com/-_CZgWfOuYr0/TglzjnHPpOI/AAAAAAAAEp4/_t4i2q0Y2Pg/s1600/Army%2Bman%2Band%2Bflag.jpg"
                  alt=""
                />
              </div>
              <div class="card-details">
                <h2>Owner</h2>
                <p>Maj Shiv Darshan Singh</p>
                <hr />
                <p>Profession: Ex Army Officer</p>
                <p>Regement: Gurkha</p>
              </div>
            </div>

            <div class="card-b">
              <div class="img-container">
                <img
                  src="https://i.pinimg.com/736x/c2/95/2e/c2952e8b9b73cc3ec0af89724e3cd37c--classic-german-shepherds.jpg"
                  alt=""
                />
              </div>
              <div class="card-details">
                <h2>Leo</h2>
                <p>
                  Hey my name is leo and i am very friendly and loveable with
                  all......
                </p>
                <hr />
                <p>Profession: Saving lifes and loyal towords my owner</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
