import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import $ from "jquery";

import "./slick/slick.js";

import Footer from "./Footer";
import Menu from "./Menu";

const About = () => {
  useEffect(() => {
    $(".carousel-about").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }, []);

  return (
    <div>
      <Menu />
      <section className="carousel-about-wrapper">
        <div className="carousel-about">
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/images/generic-on-sale.jpg" alt="generic" />
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/images/nfl.jpg" alt="nfl" />
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/images/sunset.jpg" alt="sunset" />
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/images/football.jpg" alt="football" />
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/images/theater.jpg" alt="theater" />
            </div>
          </div>
        </div>

        <div className="carousel-caption">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="about-hero">
        <img src="assets/images/wave.png" alt="" className="wave" />
        <h2>What's Love1ticket?</h2>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-img">
            <img src="assets/images/search-tickets.png" alt="search tickets" />
          </div>
          <div className="feature-text">
            <div className="small">SEARCH TICKETS</div>
            <h4>The largest inventory on the web</h4>
            <p>
              SeatGeek is a ticket search engine that makes finding tickets to
              live entertainment a cinch. We search dozens of the biggest ticket
              sites and present the results all in one place.
            </p>
          </div>
        </div>
        <div className="feature reverse">
          <div className="feature-img">
            <img src="assets/images/save-money.png" alt="save money" />
          </div>
          <div className="feature-text">
            <div className="small">SAVE MONEY</div>
            <h4>The most bang for your dollar</h4>
            <p>
              SeatGeek’s Deal Score system analyzes thousands of ticket listings
              and rates the best bargains. The higher the Deal Score, the better
              the value.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src="assets/images/be-seated.png" alt="be seated" />
          </div>
          <div className="feature-text">
            <div className="small">BE SEATED</div>
            <h4>Know where you'll sit</h4>
            <p>
              Our gorgeous interactive maps with 3D views make finding the
              perfect seat simple. No more seats behind a concrete pillar. To
              make things easier, we display the Deal Score on every row.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="service">
          <div className="service-img">
            <img
              src="assets/images/recommendations.png"
              alt="recommendations"
            />
          </div>
          <div className="service-text">
            <h4>Recommendations</h4>
            <p>
              Track your favorite teams and artists to receive personal
              recommendations for upcoming events.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img src="assets/images/notifications.png" alt="notifications" />
          </div>
          <div className="service-text">
            <h4>Notifications</h4>
            <p>
              Get notified when your teams or favorite artists announce a new
              event in your city.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-img">
            <img src="assets/images/mobile-ready.png" alt="mobile ready" />
          </div>
          <div className="service-text">
            <h4>Available on Mobile</h4>
            <p>
              Android? iPhone? Mobile web? Android? iPad? Tablet? Phablet? We've
              We've got you covered.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default withRouter(About);
