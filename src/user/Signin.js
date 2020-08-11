import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/index";
import $ from "jquery";

import Menu from "../core/Menu";
const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
});

const { email, password, loading, error, redirectToReferrer } = values;
const { user } = isAuthenticated();

const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
};

const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
        } else {
            authenticate(data, () => {
                setValues({
                    ...values,
                    redirectToReferrer: true
                });
            });
        }
    });
};

const showError = () => (
  <div
      className="alert alert-danger"
      style={{color: 'red', borderRadius: '10px', backgroundColor: '#f8d7da', padding: '20px', display: error ? "" : "none" }}
  >
      {error}
  </div>
);

const showLoading = () =>
  loading && (
      <div className="alert alert-info">
          <h2 style={{backgroundColor: '#d9edf7', color: 'green'}}>Loading...</h2>
      </div>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
        if (user && user.role === 1) {
            return <Redirect to="/admin" />;
        } else {
            return <Redirect to="/dashboard" />;
        }
    }
    if (isAuthenticated()) {
        return <Redirect to="/" />;
    }
};



  useEffect(() => {
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
      
      <section className="signin">

           {showLoading()}
            {showError()}
            {redirectUser()}
        <h2>Sign in to StubHub</h2>

        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange('email')}
            value={email}
          />
          <div className="password-field-container">
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange('password')}
              value={password}
            />
            <span className="show-password-toggler" style={{ top: "8px" }}>
              <img src="/assets/images/show-password-icon.png" />
            </span>
          </div>
          <Link to="/" className="forgot-password">
            Forgot Password?
          </Link>
          <button type="submit" onClick={clickSubmit}>
                Sign in
            </button>
        </form>

        <h4>Connect with friends on StubHub</h4>

        <p>
          New to StubHub? <Link to="/signup">Create account</Link>
        </p>
        <p>
          Have an access code? <Link to="/">Find your order</Link>
        </p>
      </section>
    </div>
  );
};

export default Signin