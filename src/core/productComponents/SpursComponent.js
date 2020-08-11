import React, { useEffect } from "react";

import $ from "jquery";


import { getProducts } from '../apiCore';


const Spurs = () => {

  return (
    <div>
     
      <section className="categories">
    
      {/* RMCF START */}
      <section className="carousel-team">
          <h3>Spurs</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Chelsea,</h4>
                <p>Saturday December 21, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Arsenal,</h4>
                <p>Saturday April 25, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Machester United,</h4>
                <p>Saturday March 14, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Brighton &amp; Hove Albion FC,</h4>
                <p>Thurday December 26, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v West Ham United</h4>
                <p>Saturday March 21, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Everton,</h4>
                <p>Saturday April 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Leicester City,</h4>
                <p>Saturday May 9, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Manchester City,</h4>
                <p>Saturday February 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Watford FC,</h4>
                <p>Saturday October 19, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Norwich City,</h4>
                <p>Wednesday January 22, 2020 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v AFC Bournemouth,</h4>
                <p>Saturday November 30, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Sheffield United,</h4>
                <p>Saturday November 9, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Wolverhampton Wanderers,</h4>
                <p>Saturday February 29, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Liverpool,</h4>
                <p>Saturday January 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Southampton,</h4>
                <p>Saturday September 28, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Burnley FC,</h4>
                <p>Saturday December 7, 2019 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
     
      {/* RMCF END */}
         
      </section>

    </div>
  );
};

export default  Spurs;
