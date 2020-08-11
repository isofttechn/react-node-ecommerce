import React, { useEffect } from "react";

import $ from "jquery";


import { getProducts } from '../apiCore';


const Arsenal = () => {

  return (
    <div>
     
      <section className="categories">
    
      {/* ARSENAL START */}
        <section className="carousel-team">
          <h3>Arsenal</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Crystal Palace,</h4>
                <p>Sunday October 27, 2019 4:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Watford FC,</h4>
                <p>Sunday May 17, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Newcastle United,</h4>
                <p>Saturday February 8, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Brighton &amp; Hove Albion FC,</h4>
                <p>Tuesday December 3, 2019 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Aston Villa,</h4>
                <p>Sunday September 22, 2019 4:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Southampton,</h4>
                <p>Saturday November 23, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Wolverhampton Wanderers,</h4>
                <p>Saturday November 2, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v West Ham United,</h4>
                <p>Saturday March 7, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Everton,</h4>
                <p>Saturday February 2, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Manchester United,</h4>
                <p>Wednesday January 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v AFC Bournemouth</h4>
                <p>Sunday October 6, 2019 2:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Liverpool,</h4>
                <p>Saturday May 2, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Norwich City,</h4>
                <p>Saturday April 4, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Sheffield United,</h4>
                <p>Saturday January 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Leicester City,</h4>
                <p>Saturday April 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Manchestor City,</h4>
                <p>Saturday December 14, 2019 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      {/* ARSENAL END */}
         
      </section>

    </div>
  );
};

export default Arsenal;
