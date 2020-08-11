import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import "../slick/slick.js";
import {isAuthenticated} from '../../auth';


const AdminProfile = () => {

    //DESTRUCTOR THE iSAuthenticated
    const {user: {_id, name, email, phone, password, avatar, role}} = isAuthenticated()

    

  useEffect(() => {
   

    function tabChangeHandler(event) {
      $(event.data.tabContainer + " .tabs > .tab").removeClass("active");
      $(this).addClass("active");

      var contentToShow = $(this).attr("data-tab-show");
      $(event.data.contentContainer + " > " + event.data.content).removeClass(
        "active"
      );
      $(event.data.contentContainer + " > #" + contentToShow).addClass(
        "active"
      );
    }

    $(".dashboard-tab-container .tabs > .tab").on(
      "click",
      "",
      {
        tabContainer: ".dashboard-tab-container",
        contentContainer: ".dashboard-tab-content-container",
        content: ".dashboard-content",
      },
      tabChangeHandler
    );

    // Orders tab events

    $(".orders-tab-container .tabs > .tab").on(
      "click",
      "",
      {
        tabContainer: ".orders-tab-container",
        contentContainer: ".orders-content-container",
        content: ".orders-content",
      },
      tabChangeHandler
    );

    // Listings tab events

    $(".listings-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".listings-tab-container",
        contentContainer: ".listings-content-container",
        content: ".listings-content",
      },
      tabChangeHandler
    );

    // Sales tab events

    $(".sales-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".sales-tab-container",
        contentContainer: ".sales-content-container",
        content: ".sales-content",
      },
      tabChangeHandler
    );

    // Payments tab events

    $(".payments-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".payments-tab-container",
        contentContainer: ".payments-content-container",
        content: ".payments-content",
      },
      tabChangeHandler
    );

    // Favourites tab events

    $(".favourites-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".favourites-tab-container",
        contentContainer: ".favourites-content-container",
        content: ".favourites-content",
      },
      tabChangeHandler
    );

    // Settings tab events

    $(".settings-tab-container .tab").on(
      "click",
      "",
      {
        tabContainer: ".settings-tab-container",
        contentContainer: ".settings-content-container",
        content: ".settings-content",
      },
      tabChangeHandler
    );

    // Password toggler events

    $(".show-password-toggler").click(function () {
      const toggleImg = $(this).find("img");
      const inputField = $(this).siblings("input");
      if (toggleImg.attr("src") === "/assets/images/show-password-icon.png") {
        toggleImg.attr("src", "/assets/images/hide-password-icon.jpg");
        inputField.attr("type", "text");
      } else if (
        toggleImg.attr("src") === "/assets/images/hide-password-icon.jpg"
      ) {
        toggleImg.attr("src", "/assets/images/show-password-icon.png");
        inputField.attr("type", "password");
      }
    });
  }, []);


  return (
    <div>

       

            <form>
            <div className="form-container">
                <div className="form-control">
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    name="name"
                    value={name || ""}
                    type="text"
                    className="input-custom"
                
                />
                </div>

                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={email || ""}
                    type="email"
                    className="input-custom"
                    
                />
                </div>

                <div className="form-control">
                <label htmlFor="username">Username / ID</label>
                <input
                    id="username"
                    name="username"
                    value={_id || ""}
                    type="text"
                    className="input-custom"
                />
                </div>

                <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    value={phone || ""}
                    type="text"
                    className="input-custom"                             
                />
                </div>

                <div className="form-control">
                <label htmlFor="role">Role</label>
                <input
                    id="role"
                    name="role"
                    value={role ===1 ? "Admin" : "Registered User"}
                    type="text"
                    className="input-custom"  
                    disabled
                                              
                />
                </div>


                <div className="form-control">
                <label htmlFor="password">Password</label>
                <div className="password-field-container">
                    <input
                    id="password"
                    name="password"
                    className="input-custom"
                    value={password || ""}
                    type="password"
                    className="input-custom"
                    />
                    <span className="show-password-toggler">
                    <img src="/assets/images/show-password-icon.png" />
                    </span>
                </div>
                </div>

                <button className="btn-blue">Save</button>
            </div>
            </form>
       
    </div>
  );
};


export default AdminProfile;
