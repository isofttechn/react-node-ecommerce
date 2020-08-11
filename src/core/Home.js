import React, { useEffect } from "react";

import $ from "jquery";

import "./slick/slick.js";
import SoldProcts from './productComponents/SoldProducts';
import Arsenal from './productComponents/ArsenalComponents';
import Chelsea from './productComponents/ChelseaComponent';
import Everton from './productComponents/EvertonComponet';
import Fcb from './productComponents/FcbComponet';
import Lfc from './productComponents/LfcComponent';
import MauU from './productComponents/manuComponent';
import Rmcf from './productComponents/RmcfComponent';
import Spurs from './productComponents/SpursComponent';


import Footer from "./Footer";
import Menu from "./Menu";

const Home = () => {
  useEffect(() => {
    $(".carousel-landing").slick({
      infinite: true,
      speed: 1000,
      centerMode: true,
      variableWidth: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $(".carousel-category").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div>
      <Menu />
      <section>
        <div className="carousel-landing">
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/1.jpg" alt="first" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GOT TICKETS? <br />
                CHECK EVENT STATUS HERE
              </h3>
              <a href="#" className="btn">
                Go to My 🖥️ Tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/2.jpg" alt="second" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GET READY FOR GAME TIME.
                <br />
                NOTHING BEATS NFL
              </h3>
              <a href="#" className="btn">
                Get ⚽ tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/3.jpg" alt="third" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GARTH BROOKS AND MORE <br />
                AT THE DRIVE IN, LOAD UP!
              </h3>
              <a href="#" className="btn">
                Get DRIVE IN tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/4.jpg" alt="fourth" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GET IN THE END ZONE
                <br />
                WITH COLLEGE FOOTBALL.
              </h3>
              <a href="#" className="btn">
                Get ⚽ tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/5.jpg" alt="sunset" />
            </div>
            <div className="carousel-item__text">
              <h3>
                THE SHOW MUST GO ON!
                <br />
                BE THERE LIVE WHEN IT DOES
              </h3>
              <a href="#" className="btn">
                Get ⚽ tickets
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="categories">
      
        <section className="carousel-category carousel-random">
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/lfc.png" alt="lfc" />
            </div>
            <div className="carousel-text">
              <h4>Concerts</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/mcfc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>NFL</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/cfc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLB</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/fcb.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>NBA</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/mufc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>NHL</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/rmcf.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/afc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/efc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/thfc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
        </section>
      
      {/* ARSENAL START */}
          <Arsenal/>
      {/* ARSENAL END */}
      
      {/* CHELSEA START */}
        <Chelsea/>
       {/* CHELSEA END */}
       
       {/* EVERTON START */}
          <Everton/>
        {/*EVERTON END  */}
        
        {/* Fcb Start */}
          <Fcb/>
         {/* Fcb End */}
            
          {/* Lfc Start */}
          <Lfc/>
          {/* Lfc Ends */}

          {/* ManU Start */}
            <MauU/>
          {/* ManU Ends */}

            {/* Rmcf Start */}
                  <Rmcf/>
            {/* Rmcf Ends */}

              {/* Spurs Start */}
                
                <Spurs/>

              {/* Spurs Ends */}

           <SoldProcts/>
    

      </section>

      <Footer />
    </div>
  );
};

export default Home;
