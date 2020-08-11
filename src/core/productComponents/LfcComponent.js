import React, { useEffect } from "react";

import $ from "jquery";


import { getProducts } from '../apiCore';


const Lfc = () => {

  return (
    <div>
     
      <section className="categories">
    
      {/* CHELSEA START */}
      <section className="carousel-team">
          <h3>Lfc</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Everton,</h4>
                <p>Wednesday December 4, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Southampton,</h4>
                <p>Saturday February 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Chelsea,</h4>
                <p>Saturday May 9, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Manchester City,</h4>
                <p>Saturday November 9, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Hove Albion FC,</h4>
                <p>Saturday November 30, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Leicester City,</h4>
                <p>Saturday October 5, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Tottenham Hotspur,</h4>
                <p>Sunday October 27, 2019 4:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Aston Villa,</h4>
                <p>Saturday April 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Sheffield United,</h4>
                <p>Wednesday January 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Watford FC,</h4>
                <p>Saturday December 14, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Crystal Palace,</h4>
                <p>Saturday March 21, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v AFC Bournemouth,</h4>
                <p>Saturday March 7, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Manchestor United,</h4>
                <p>Saturday Januray 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Burnley FC,</h4>
                <p>Saturday April 25, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Wolverhampton Wanderers,</h4>
                <p>Saturday December 28, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v West Ham United,</h4>
                <p>Saturday February 22, 2020 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
     
      {/* Chelsea END */}
         
      </section>

    </div>
  );
};

export default Lfc;
