import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <div className="container-fluid">
        <section className="hero">
          <figure>
            <img
              src="/images/homepage.jpg"
              alt="2"
              className="home-img img-fluid"
            />
          </figure>
        </section>

        <section className="about my-4">
          <div className="container-fluid">
            <div className="about-heading ">
              <h2 className="text-center py-3">
                About <span className="text-primary">Madhurdarshan</span>
              </h2>
              <hr className="w-25 m-auto my-2 mb-5" />
            </div>

            <div className="row py-1">
              <div className="col-sm-12 col-md-12 col-lg-6 col-12 m-auto">
                <figure>
                  <img
                    src="/images/hf.jpg"
                    alt="2"
                    className="aboutImg img-fluid rounded-5"
                  />
                </figure>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                <h3 className="about-title col-sm-12 ">MadhurDarshan </h3>
                <p className="about-decs">
                  Madhurdarshan Khaniyara got its name because of its slate
                  deposits. It has slate mines and is a sight-seeing place. It
                  is popular among local people as a picnic spot. Our home comes
                  with 2 bedrooms with geysers which is specifically for 4
                  adults. Parking, Outdoor area, Wifi , Almiras,Badminton, King
                  Size bed, Laundry, Guide(for Tracking),Bonfire, Bed and
                  Breakfast, Mini Fridge,Induction,Kettle,Dinning
                  Table,Cutlerys, Extra bed can be provided. One of the best
                  peaceful and calm place for a vacation trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rooms my-4">
          <div className="about-heading ">
            <h2 className="text-center py-3">
              Rooms <span className="text-primary">We Offer</span>
            </h2>
            <hr className="w-25 m-auto my-2 mb-5" />
          </div>

          <div className="row gap-4 text-center">
            <div className="col-sm-12 col-md-3 col-lg-3 col-12 m-auto single-card ">
              <Card style={{ width: "100%" }} className="card-hover">
                <Card.Img
                  variant="top"
                  src="images/room5.jpg"
                  className="img-fluid w-10vh"
                />
              </Card>
            </div>
            <div className=" col-sm-12 col-md-3 col-lg-3 col-12 m-auto single-card  ">
              <Card style={{ width: "100%" }} className="card-hover">
                <Card.Img
                  variant="top"
                  src="images/room1.jpg"
                  className="img-fluid"
                />
              </Card>
            </div>

            <div className=" col-sm-12 col-md-3 col-lg-3 col-12 m-auto single-card ">
              <Card style={{ width: "100%" }} className="card-hover">
                <Card.Img
                  variant="top"
                  src="images/room3.jpg"
                  className="img-fluid"
                />
              </Card>
            </div>

            <Link to="/rooms">
              <Button className="header-btn-book-room py-2 mt-3" variant="info">
                Check All Room And Amenites
              </Button>
            </Link>
          </div>
        </section>

        <section className="feature my-4">
          <div className="about-heading ">
            <h2 className="text-center py-3">
              Feature <span className="text-primary">We offer</span>
            </h2>
            <hr className="w-25 m-auto my-2 mb-5" />
          </div>

          <div className="row">
            <div className="col text-center gap-5">
              <div className="flex-d">
                <div className="box-icons">
                  <img
                    className="margin-bottom"
                    src="/images/wifi.svg"
                    alt="7"
                  />
                  <h3>Wifi</h3>
                </div>
                <div className="box-icons">
                  <img
                    src="/images/parking.svg"
                    alt="7"
                    className="margin-bottom"
                  />
                  <h3>Free Parking</h3>
                </div>
                <div className="box-icons">
                  <img
                    src="/images/hot-water.svg"
                    alt="7"
                    className="margin-bottom"
                  />
                  <h3>Geyser</h3>
                </div>
                <div className="box-icons">
                  <img
                    src="/images/breakfast.svg"
                    alt="7"
                    className="margin-bottom"
                  />
                  <h3> Breakfast</h3>
                </div>
              </div>

              <div className="flex-d">
                <div className="box-icons">
                  <img
                    src="/images/yoga.svg"
                    alt="7"
                    className="margin-bottom"
                  />
                  <h3>Yoga Space</h3>
                </div>
                <div className="box-icons">
                  <img
                    src="/images/fridge.svg"
                    alt="7"
                    className="margin-bottom"
                  />
                  <h3>Min Fridge</h3>
                </div>
                <div className="box-icons">
                  <img
                    src="/images/co-space.svg"
                    alt="7"
                    className="margin-bottom"
                  />
                  <h3>Co-Space</h3>
                </div>

                <div className="box-icons">
                  <img
                    src="/images/kitchen.svg"
                    alt="7"
                    className="margin-bottom"
                  />
                  <h3>Kitchen</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="img-section">
          <div className="bg-image"></div>
        </section>

        <section className="near-attractions my-4">
          <div className="about-heading ">
            <h2 className="text-center py-3">
              Near by <span className="text-primary">Attractions</span>
            </h2>
            <hr className="w-25 m-auto my-2 mb-5" />
          </div>

          <div className="attractions">
            <div className="row">
              <div className="col">
                <div class="cards">
                  <div class="card">
                    <h2>Karmapa Monestery</h2>
                    <img
                      src="/images/karmapa1.png"
                      alt="dfg"
                      className="att-img"
                    />
                    <p class="card-desc">
                      With the generosity and help of the Sikkim royal family
                      and the local folks of Sikkim, it was built by the 16th
                      Karmapa as his main seat in exile . After four years,
                      construction of the monastery was completed.
                    </p>
                  </div>
                  <div class="card">
                    <h2>Aghanger Mahadev</h2>
                    <img
                      src="/images/aghanger.jpg"
                      alt="gh"
                      className="att-img"
                    />
                    <p class="card-desc">
                      Akhangar Mahadev Temple is situated in the foothills of
                      Dhaulahar mountain. This temple has a rich history from
                      Arjun in Mahabharat to Maharaja Ranjit Singh to till
                      present time.
                    </p>
                  </div>
                  <div class="card">
                    <h2>Paragliding</h2>
                    <img
                      src="/images/paragliding.webp"
                      alt="j"
                      className="att-img"
                    />
                    <p class="card-desc">
                      Among various adventurous activities hosted in the area,
                      paragliding in Dharamshala has become a hot favourite
                      among tourists. Dharamshala paragliding excursions usually
                      take place in Bir, a small town surrounded by vast
                      mountains on all sides.
                    </p>
                  </div>
                </div>

                <div class="cards">
                  <div class="card">
                    <h2>Triund</h2>
                    <img src="/images/t.jpg" alt="dfg" className="att-img" />
                    <p class="card-desc">
                      Triund is a small hill station in the Kangra district in
                      the state of Himachal Pradesh, India. Triund is a part of
                      Dharamkot. Triund is at the foot of the Dhauladhar ranges
                      and is at a height of 2,828 metres.
                    </p>
                  </div>
                  <div class="card">
                    <h2>Thatarna</h2>
                    <img src="/images/trek.jpeg" alt="gh" className="att-img" />
                    <p class="card-desc">
                      Thatharana Trek is a trek in Himachal Pradesh that most
                      people don’t know of yet. Here is A Complete Guide to
                      Thatharana Trek. With a brilliant 360 degrees view of
                      Kangra valley and a thrilling route, it climbs up to be
                      one of the best-unexplored treks. If you are someone who
                      hates crowded treks where there’s more of noise than peace
                      then you have to try this trek.
                    </p>
                  </div>
                  <div class="card">
                    <h2>Stadium</h2>
                    <img
                      src="/images/stadium.jfif"
                      alt="j"
                      className="att-img"
                    />
                    <p class="card-desc">
                      Dharamshala Cricket Stadium, also known as Himachal
                      Pradesh Cricket Association Stadium, is a picturesque
                      cricket ground located in the town of Dharamshala in
                      Himachal Pradesh. The stadium is home to the Himachal
                      Pradesh state cricket team and the Indian Premier League
                      franchise Kings XI Punjab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
