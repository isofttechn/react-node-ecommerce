import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import Menu from "../../core/Menu";

const Checkout = () => {
  useEffect(() => {
    function progress(done, current, divHide, divShow) {
      $("." + done).addClass("done");
      $("." + current).addClass("active");
      $("." + divHide).removeClass("show");
      $("." + divHide).addClass("hide");
      $("." + divShow).addClass("show");
    }

    $(".to-delivery").click(function () {
      progress("auth", "delivery", "login-signup", "delivery");
    });

    $(".to-billing").click(function () {
      progress("delivery", "billing", "delivery", "billing");
    });

    $(".to-payment").click(function () {
      progress("billing", "order", "billing", "payment");
    });

    // Product Page events

    $("[name='auth']").change(function () {
      var id = this.id;
      if (id === "sign-up") {
        $(".for-signin").addClass("hide");
        $(".for-signup").removeClass("hide");
      } else if (id === "sign-in") {
        $(".for-signup").addClass("hide");
        $(".for-signin").removeClass("hide");
      }
    });

    $(".answer-toggler").click(function () {
      $(this).next().slideToggle();
    });

    return () => {
      $(".to-delivery").off();
      $(".to-billing").off();
      $(".to-payment").off();
      $("[name='auth']").off();
      $(".answer-toggler").off();
    };
  }, []);

  return (
    <div className="checkout">
      <Menu />
      <section className="checkout-login">
        <div className="tabs-container">
          <div className="tab">
            <div className="tab-indicator active auth">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div className="tab-text">Log in / Sign up</div>
          </div>
          <div className="tab">
            <div className="tab-indicator delivery">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div className="tab-text">Delivery</div>
          </div>
          <div className="tab">
            <div className="tab-indicator billing">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div className="tab-text">Billing</div>
          </div>
          <div className="tab">
            <div className="tab-indicator order">
              <div className="circle"></div>
            </div>
            <div className="tab-text">Place Order</div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="login-signup">
                <h2>Log in or Sign up to continue</h2>

                <div className="form-control">
                  <input type="radio" name="auth" id="sign-up" checked />
                  <label for="sign-up">Create a new account</label>
                </div>
                <div className="form-control">
                  <input type="radio" name="auth" id="sign-in" />
                  <label for="sign-in">Sign in to an existing account</label>
                </div>

                <div className="dynamic-form">
                  <div className="for-signup">
                    <h5>Email Address</h5>
                    <input type="email" className="input-custom" />
                    <button className="to-delivery btn-blue">
                      Continue to Delivery
                    </button>
                  </div>
                  <div className="for-signin hide">
                    <button className="btn-blue btn-fb">
                      <svg
                        fill="#fff"
                        stroke="none"
                        color="#fff"
                        height="1em"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="Icon__Svg-yo4p57-0 bmoYBq"
                      >
                        <path d="M3.9934281,3 C3.44471588,3 3,3.44471421 3,3.99342438 L3,20.0065082 C3,20.5551509 3.44471588,21 3.9934281,21 L12.6144012,21 L12.6144012,14.0294385 L10.268616,14.0294385 L10.268616,11.3128646 L12.6144012,11.3128646 L12.6144012,9.3094925 C12.6144012,6.98462317 14.0343357,5.71866464 16.1083277,5.71866464 C17.1018232,5.71866464 17.9556453,5.79258135 18.2044407,5.82562806 L18.2044407,8.25530265 L16.766027,8.25597707 C15.6381185,8.25597707 15.4196722,8.79194065 15.4196722,9.5784522 L15.4196722,11.3128646 L18.1097514,11.3128646 L17.7595225,14.0294385 L15.4196722,14.0294385 L15.4196722,21 L20.0065719,21 C20.5552167,21 21,20.5551509 21,20.0065082 L21,3.99342438 C21,3.44471421 20.5552167,3 20.0065719,3 L3.9934281,3 Z"></path>
                      </svg>
                      Login in with Facebook
                    </button>
                    <h5>Email Address or Username</h5>
                    <input type="email" className="input-custom" />
                    <h5>Password</h5>
                    <input type="password" className="input-custom" />
                    <button className="btn-blue">Log in with email</button>
                  </div>
                </div>
              </div>

              <div className="delivery hide">
                <h2>Delivery Information</h2>

                <h5>Phone Number</h5>
                <input type="phone" className="input-custom" />
                <button className="to-billing btn-blue">
                  Continue to Billing
                </button>
              </div>

              <div className="billing hide">
                <h2>Billing</h2>

                <div className="card-info">
                  <h5>Credit Card Number</h5>
                  <input type="number" className="input-custom" />
                  <button className="to-payment btn-blue">
                    Continue to Payment
                  </button>
                </div>
              </div>

              <div className="payment hide">
                <h2>Payment</h2>

                <div className="cart-empty">
                  <h4>Your Cart Is Empty</h4>
                </div>

                <div className="cart">
                  <div className="cart-head">
                    <h3>Cart is empty</h3>
                  </div>
                  <div className="cart-body">
                    <div>YOUR CART IS</div>
                    <div>CURRENTLY</div>
                    <div>EMPTY</div>
                  </div>
                </div>

                <div className="cart-empty">
                  <h4>Your Cart Is Empty</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-brief">
                <h4>
                  Aventura with Romeo Santos (Rescheduled from March 17, 2020)
                </h4>
                <article>
                  <p>Date TBD</p>
                  <p>Radio City Music Hall – New York, NY</p>
                </article>
                <article>
                  <p>Section 1stmz5</p>
                  <p>Row H</p>
                </article>
                <article>
                  <div className="ticket-info">
                    <div>Quantity</div>
                    <div>
                      <select name="quantity" id="quantity">
                        <option value="2">2</option>
                      </select>
                    </div>
                  </div>
                  <div className="ticket-info">
                    <div>Price per ticket</div>
                    <div>$240.00</div>
                  </div>
                </article>
                <hr />
                <div className="logo-container">
                  <svg
                    viewBox="0 0 32 32"
                    className="BuyersGuaranteeBadge__Svg-sc-1223e65-0 gNRaIZ BuyersGuaranteeFooter__Badge-ep36qm-4 SIMNH"
                  >
                    <defs>
                      <symbol id="buyers-guarantee-badge-icon-a">
                        <path d="M16 32c13.3333 0 16-7.1634 16-16S29.3333 0 16 0 0 7.1634 0 16s2.6667 16 16 16z"></path>
                      </symbol>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <use fill="#fff"></use>
                      <use fill="#1673E6" opacity="0.08"></use>
                      <g
                        stroke="#1673E6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.6"
                      >
                        <path d="M8.8 11.2c2.6667 0 5.0667-1.0667 7.2-3.2 2.1333 2.1333 4.5333 3.2 7.2 3.2V16c0 3.2339-2.4 5.9005-7.2 8-4.8-1.9936-7.2-4.6602-7.2-8v-4.8z"></path>
                        <path d="M13.6 16.8l1.6 1.6 3.2-4"></path>
                      </g>
                    </g>
                  </svg>
                  <div className="BuyersGuaranteeFooter__TitleWrapper-ep36qm-3 gcNMCF">
                    <div
                      className="util__HBox-sc-1m6eggr-0 fBOnta BuyersGuaranteeFooter__SeatGeek-ep36qm-5 iYrAEo"
                      viewbox="0,0,68,12"
                    >
                      <svg
                        fill="#1673E6"
                        stroke="none"
                        height="1em"
                        width="5.666666666666667em"
                        viewBox="0 0 68 12"
                        className="Icon__Svg-yo4p57-0 bmoYBq"
                        style={{ margin: 0, width: "8rem" }}
                      >
                        <g>
                          <path d="M13.249 2.9014c-2.645 0-4.1388 2.1863-4.1388 4.5452 0 1.052.2286 4.537 4.6857 4.537 1.3143 0 2.2041-.3535 2.8572-.7151V9.2959s-1.0694.8466-2.6286.8466c-1.7388 0-2.596-.9863-2.7347-2.0548h5.7878V6.9699c0-.6576.0163-4.0685-3.8286-4.0685zm-1.951 3.452c.1224-.7644.6938-1.6274 2.049-1.6274 1.1591 0 1.6.7973 1.6979 1.6274h-3.747zM24.7429 6.148c0-3.1069-2.2123-3.2548-3.3143-3.2548-1.6572 0-3.1184.715-3.1184.715v1.9644s1.3061-.8548 2.5878-.8548c1.649 0 1.7142.8795 1.7142 1.9069-2.9959-.1151-4.8326.5013-4.8326 2.7452 0 2.2356 2.2694 2.6137 3.9592 2.6137 1.2898 0 3.0204-.3206 3.0204-.3206S24.7429 9 24.7429 6.148zm-2.1633 4.0273s-2.645.5179-2.645-.978c0-1.2658 1.9756-1.1014 2.645-1.0603v2.0383zM29.3714 10.1589c-.9877 0-1.249-.526-1.249-1.315V4.915h2.4164V3.082h-2.4164V.9535h-2.1632v7.5863c0 1.2904-.1143 3.452 2.849 3.452 1.3877 0 2.0571-.4191 2.0571-.4191l.0082-1.8822c.0081 0-.8082.4685-1.502.4685zM7.6163 2.9342V.7232s-1.298-.715-3.404-.715C2.106.0082.0326.9616.0326 3.3616c0 1.9726 1.3387 2.663 2.449 3.0658 1.1183.4027 2.1305.7808 2.6693 1.0685.5388.2877.8735.5753.8735 1.241 0 .6576-.3755 1.3152-2.204 1.3152-1.8287 0-3.649-1.2165-3.649-1.2165v2.2274S1.5917 12 3.8204 12c2.2285 0 4.457-.8466 4.457-3.4356 0-2.1945-1.9673-2.9836-2.5387-3.222-.4735-.2219-2.2368-.8219-2.5551-.9862-.4572-.2384-.9633-.5014-.9143-1.2165.049-.6657.547-1.2 1.8367-1.2 1.853 0 3.5102.9945 3.5102.9945zM62.253 11.7945V.1644h-2.1632v11.63z"></path>
                          <path d="M65.4694 11.7945l-3.4368-4.7096 3.3633-3.9863h2.5224l-3.4367 3.9863L68 11.7945zM46.1878 2.9014c-2.645 0-4.1388 2.1863-4.1388 4.5452 0 1.052.2286 4.537 4.6857 4.537 1.3143 0 2.204-.3535 2.8571-.7151V9.2959s-1.0694.8466-2.6285.8466c-1.7388 0-2.596-.9863-2.7347-2.0548h5.7877V6.9699c0-.6576.0164-4.0685-3.8285-4.0685zm-1.951 3.452c.1224-.7644.6938-1.6274 2.049-1.6274 1.1591 0 1.6.7973 1.6979 1.6274h-3.747zM55.1184 2.9014c-2.645 0-4.1388 2.1863-4.1388 4.5452 0 1.052.2286 4.537 4.6857 4.537 1.3143 0 2.204-.3535 2.8571-.7151V9.2959s-1.0693.8466-2.6285.8466c-1.7388 0-2.596-.9863-2.7347-2.0548h5.7796V6.9699c0-.6576.0163-4.0685-3.8204-4.0685zm-1.9592 3.452c.1224-.7644.6939-1.6274 2.049-1.6274 1.1591 0 1.6.7973 1.698 1.6274h-3.747zM40.6122 2.9342V.7232s-1.0857-.715-3.355-.715c-3.0205 0-5.8613 2.2028-5.8613 6.0986 0 3.7316 2.351 5.885 5.902 5.885 2.449 0 3.5837-.7069 3.5837-.7069v-4.8c0-.5835-.4734-1.0602-1.053-1.0602h-3.445v1.9397h2.3348v2.4904s-.5878.2055-1.4857.2055c-2.3592 0-3.5837-1.8329-3.5837-3.937 0-2.2356 1.3959-4.1671 3.6571-4.1671 1.6163-.0165 2.4163.4274 3.3061.978z"></path>
                        </g>
                      </svg>
                    </div>
                    <p className="Typography__Body2-h1djij-28 dsfTlk">
                      Buyer's Guarantee
                    </p>
                  </div>
                </div>
                <p>
                  You’re 100% covered by the SeatGeek Buyer's Guarantee. We
                  guarantee you’ll get the tickets you ordered on time.
                </p>
                <Link to="/">Learn More</Link>
                <hr />
                <h4>Questions?</h4>
                <div className="q-a">
                  <div className="answer-toggler">
                    When will I receive my tickets?
                  </div>
                  <div className="answer">
                    We deliver tickets right away whenever possible, but not
                    every listing on SeatGeek offers instant delivery. Some
                    venues, performers, and teams issue their tickets on a
                    delayed release. While tickets may go on sale months in
                    advance, the box office won’t send out the actual tickets
                    until anywhere from a week to 24 hours before the event.
                  </div>
                  <div className="answer-toggler">Are my seats together?</div>
                  <div className="answer">
                    Yep. All tickets on SeatGeek that are part of the same
                    listing are adjacent to each other, unless otherwise stated
                    in the seller's notes.
                  </div>
                  <div className="answer-toggler">
                    How safe is my private data?
                  </div>
                  <div className="answer">
                    We take privacy and security seriously here at SeatGeek. You
                    can find more information in our privacy policy
                    <Link to="/">here.</Link>
                  </div>
                  <div className="answer-toggler">What is SeatGeek?</div>
                  <div className="answer">
                    SeatGeek is a ticket platform that searches hundreds of
                    other sales sites for you and brings ticket sellers together
                    right here in one place. No more searching around wondering
                    if you’re going to get ripped off. It’s never been easier to
                    score sweet deals and save time looking for seats to games,
                    shows, concerts and matches. Let’s go!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
