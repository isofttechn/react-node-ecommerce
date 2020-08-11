import React, { useEffect } from "react";

import $ from "jquery";


import { getProducts } from '../apiCore';


const Everton = () => {

  return (
    <div>
     
      <section className="categories">
    
      {/* CHELSEA START */}
      <section className="carousel-team">
          <h3>Everton</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Newcastle United,</h4>
                <p>Tuesday January 21, 2020 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Chelsea,</h4>
                <p>Saturday December 7, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Southampton,</h4>
                <p>Saturday April 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Tottenham Hotspur</h4>
                <p>Saturday November 2, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Burnley FC,</h4>
                <p>Thurday December 26, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v West Ham United,</h4>
                <p>Saturday October 19, 2019 12:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton Manchester City,</h4>
                <p>Saturday September 28, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Norwich City,</h4>
                <p>Saturday November 23, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Sheffield United,</h4>
                <p>Saturday September 21, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Hove Albion FC,</h4>
                <p>Saturday Januray 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Crystal Palace,</h4>
                <p>Saturday February 8, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Manchestor United,</h4>
                <p>Saturday February 29, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Arsenal,</h4>
                <p>Saturday December 21, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v AFC Bournemouth,</h4>
                <p>Sunday May 17, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Aston Villa,</h4>
                <p>Saturday May 2, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Leicester City,</h4>
                <p>Saturday April 4, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/17.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Liverpool,</h4>
                <p>Saturday March 14, 2020 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
       
      {/* Chelsea END */}
         
      </section>

    </div>
  );
};

export default Everton;
