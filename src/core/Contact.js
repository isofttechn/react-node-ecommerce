import React from "react";

import { Link, withRouter } from "react-router-dom";

import Footer from "./Footer";
import Menu from "./Menu";

const Contact = () => (
  <div>
    <Menu />
    <div>
  <section className="contact-hero">
    <h2>Let's Talk</h2>
    <p>
      If you're looking to learn more about our Enterprise's ticketing
      technology or if you are facing any difficulty regarding the usage, fill
      out this form and we will get back to you as soon as we can.
    </p>
  </section>
  <section className="contact-us">
    <form >
      <h5>FIRST NAME*</h5>
      <input type="text" name="firstName" id="firstName" />
      <h5>LAST NAME*</h5>
      <input type="text" name="lastName" id="lastName" />
      <h5>EMAIL*</h5>
      <input type="email" name="email" id="email" />
      <h5>PHONE*</h5>
      <input type="phone" name="phone" id="phone" />
      <h5>MESSAGE*</h5>
      <input type="text" name="message" id="message" />
      <button type="submit">Submit</button>
    </form>
  </section>
</div>

    <Footer />
  </div>
);

export default withRouter(Contact);
