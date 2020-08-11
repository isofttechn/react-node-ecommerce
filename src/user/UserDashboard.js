import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import Menu from "../core/Menu";
import "./slick/slick.js";
import {isAuthenticated} from '../auth';


const Dashboard = () => {

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
      <Menu />

      <main>
        <section className="dashboard-hero">
          <img src="assets/images/wave.png" alt="" className="wave" />
          {/* <h2>User Dashboard</h2> */}
          <h2>Welcome back, <br/>{name}</h2>
        </section>

        <section className="dashboard-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <div className="profile-info">
                  <div className="profile-img">
                    <div className="img">
                      <div className="text">
                        <h3>Picture</h3>
                      </div>
                    </div>
                  </div>
                  <div className="profile-name">
                    <h3>{name}</h3>
                  </div>
                </div>
                <div className="dashboard-tab-container">
                  <ul className="tabs">
                  <li data-tab-show="dashboard" className="tab active">
                      Dashboard
                    </li>
                   
                    <li data-tab-show="orders" className="tab">
                      My Orders
                    </li>
                    <li data-tab-show="cart" className="tab">
                      Cart
                    </li>
                    <li data-tab-show="billing" className="tab">
                      Billing / Shipping
                    </li>
                    <li data-tab-show="profile" className="tab ">
                      My Profile
                    </li>
                    <li data-tab-show="settings" className="tab">
                      Settings
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <ul className="dashboard-tab-content-container">

                  {/* DASHBOARD */}

                  <li id="dashboard" className="dashboard-content active">
                    <h1>My Dashboard</h1>
                   
                  

                    <div className="dashboard-settings-container">
                      <div className="dashboard-img-container">
                      <div className="dashboard-inital">
                          
                        </div>
                        
                      </div>

                   
                    </div>
                  </li>
                  {/* END DASHBOARD */}
                  <li id="profile" className="dashboard-content ">
                    <h1>My Profile</h1>

                    <div className="profile-settings-container">
                      <div className="profile-img-container">
                        <div className="profile-inital">
                          <h2>Profile Image</h2>
                        </div>
                       
                      </div>

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
                  </li>
                  <li id="orders" className="dashboard-content">
                    <h1>My Orders</h1>

                    <div className="orders-tab-container horizontal-tab-container">
                      <ul className="tabs">
                        <li data-tab-show="current" className="tab active">
                          Pending
                        </li>
                        <li data-tab-show="past" className="tab">
                          Past
                        </li>
                      </ul>

                      <ul className="orders-content-container content">
                        <li
                          id="current"
                          className="tab-content orders-content active"
                        >
                          <div className="responsive-table">
                            <table className="table-custom">
                              <thead>
                                <tr>
                                  <th>Sr. No</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </li>
                        <li id="past" className="tab-content orders-content">
                          <div className="responsive-table">
                            <table className="table-custom">
                              <thead>
                                <tr>
                                  <th>Sr. No</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Cart */}

                  <li id="cart" className="dashboard-content">
                    <h1>My Cart</h1>

                    <div className="cart-tab-container horizontal-tab-container">
                      <ul className="tabs">
                        <li data-tab-show="current" className="tab active">
                          Pending
                        </li>
                      
                      </ul>

                      <ul className="cart-content-container content">
                        <li
                          id="current"
                          className="tab-content cart-content active"
                        >
                          <div className="responsive-table">
                            <table className="table-custom">
                              <thead>
                                <tr>
                                  <th>Sr. No</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                  <th>Lorem Ipsum</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                  <td>Lorem Ipsum</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </li>
                       
                      </ul>
                    </div>
                  </li>

                  {/* End Cart */}
                  <li id="billing" className="dashboard-content">
                    <h1>Billing / Shipping</h1>

                    <div className="form-container">
                      <div className="form-control">
                        <label htmlFor="street-address">Street Address</label>
                        <input
                          id="street-address"
                          type="text"
                          className="input-custom"
                        />
                      </div>

                      <div className="form-control">
                        <label htmlFor="apartment">Apartment</label>
                        <input
                          id="apartment"
                          type="text"
                          className="input-custom"
                        />
                      </div>

                      <div className="form-control">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" className="input-custom" />
                      </div>

                      <div className="form-control">
                        <label htmlFor="country">Country</label>
                      </div>
                      <select
                        id="country"
                        name="country"
                        className="select-custom"
                      >
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua & Barbuda">
                          Antigua & Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire">Bonaire</option>
                        <option value="Bosnia & Herzegovina">
                          Bosnia & Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Ter">
                          British Indian Ocean Ter
                        </option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Canary Islands">Canary Islands</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Channel Islands">Channel Islands</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos Island">Cocos Island</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote DIvoire">Cote DIvoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaco">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Ter">
                          French Southern Ter
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Great Britain">Great Britain</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="India">India</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea North">Korea North</option>
                        <option value="Korea Sout">Korea South</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Midway Islands">Midway Islands</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Nambia">Nambia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherland Antilles">
                          Netherland Antilles
                        </option>
                        <option value="Netherlands">
                          Netherlands (Holland, Europe)
                        </option>
                        <option value="Nevis">Nevis</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau Island">Palau Island</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Phillipines">Philippines</option>
                        <option value="Pitcairn Island">Pitcairn Island</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Montenegro">
                          Republic of Montenegro
                        </option>
                        <option value="Republic of Serbia">
                          Republic of Serbia
                        </option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="St Barthelemy">St Barthelemy</option>
                        <option value="St Eustatius">St Eustatius</option>
                        <option value="St Helena">St Helena</option>
                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                        <option value="St Lucia">St Lucia</option>
                        <option value="St Maarten">St Maarten</option>
                        <option value="St Pierre & Miquelon">
                          St Pierre & Miquelon
                        </option>
                        <option value="St Vincent & Grenadines">
                          St Vincent & Grenadines
                        </option>
                        <option value="Saipan">Saipan</option>
                        <option value="Samoa">Samoa</option>
                        <option value="Samoa American">Samoa American</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome & Principe">
                          Sao Tome & Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tahiti">Tahiti</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad & Tobago">
                          Trinidad & Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks & Caicos Is">
                          Turks & Caicos Is
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Erimates">
                          United Arab Emirates
                        </option>
                        <option value="United States of America">
                          United States of America
                        </option>
                        <option value="Uraguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State">
                          Vatican City State
                        </option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (Brit)">
                          Virgin Islands (Brit)
                        </option>
                        <option value="Virgin Islands (USA)">
                          Virgin Islands (USA)
                        </option>
                        <option value="Wake Island">Wake Island</option>
                        <option value="Wallis & Futana Is">
                          Wallis & Futana Is
                        </option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zaire">Zaire</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>

                      <div className="form-control">
                        <label htmlFor="state">State</label>
                        <input
                          id="state"
                          type="text"
                          className="input-custom"
                        />
                      </div>

                      <div className="form-control">
                        <label htmlFor="zip">Zip / Postal Code</label>
                        <input id="zip" type="text" className="input-custom" />
                      </div>

                      <button className="btn-blue">Save</button>
                    </div>
                  </li>
                  <li id="settings" className="dashboard-content">
                    <h1>Settings</h1>

                    <div className="settings-tab-container horizontal-tab-container">
                      <ul className="tabs">
                        <li data-tab-show="active" className="tab active">
                          Payment
                        </li>
                        <li data-tab-show="pending" className="tab">
                          Communication
                        </li>
                        <li data-tab-show="deactivated" className="tab">
                          Contact
                        </li>
                        <li data-tab-show="expired" className="tab">
                          Linked Accounts
                        </li>
                        <li data-tab-show="licence" className="tab">
                          Licence
                        </li>
                        <li data-tab-show="privacy" className="tab">
                          Privacy
                        </li>
                      </ul>

                      <ul className="settings-content-container content">
                        <li
                          id="active"
                          className="tab-content settings-content active"
                        >
                          <p>No orders to show</p>
                        </li>
                        <li
                          id="pending"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!!</p>
                        </li>
                        <li
                          id="deactivated"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show..!!</p>
                        </li>
                        <li
                          id="expired"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!</p>
                        </li>
                        <li
                          id="licence"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!</p>
                        </li>
                        <li
                          id="privacy"
                          className="tab-content settings-content"
                        >
                          <p>No orders to show...!</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};


export default Dashboard;
