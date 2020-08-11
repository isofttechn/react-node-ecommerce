import React, { useState, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import $, { data } from "jquery";
import {signup} from '../auth/index';


import Menu from "../core/Menu";
const Signup = () => {

      const [values, setValues] = useState({
        name: "",
        email: "",
        avatar: "",
        phone: "",
       error: "",
       success: false
      });

      const { name, email, avatar, phone, password, success, error } = values;

      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
      event.preventDefault();
      setValues({...values, error: false})
        signup({name, email, avatar, phone, password})
        .then(data =>{
          if(data.error){
            setValues({...values, error: data.error, success: false})
          }else{
            setValues({
              ...values,
              name: '',
              email: '',
              avatar: '',
              phone: '',
              password: '',
              error: '',
              success: true
            })
          }
        })
  };

  const showError = () => (
    <div className="alert alert-danger" style={{color: 'red', borderRadius: '10px', backgroundColor: '#f8d7da', padding: '20px', display: error ? '' : 'none' }}>
        {error}
    </div>
);

const showSuccess = () => (
    <div className="alert alert-info" style={{color: 'green',  borderRadius: '10px', backgroundColor: '#d4edda', padding: '20px', display: success ? '' : 'none' }}>
        New account is created. Please <Link to="/signin">Signin</Link>
    </div>
);

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

      <section className="register">

           {showSuccess()}
            {showError()}

        <h2>Sign Up for StubHub</h2>

        <p className="error-placeholder">
        </p>

        <form >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={handleChange('name')}
            value={name}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange('email')}
            value={email}
          />
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={handleChange('phone')}
            value={phone}
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
          <button onClick={clickSubmit} type="submit">Sign Up</button>
          <p className="agreement">
            By purchasing or signing in, you agree to
            <Link to="#">our user agreement</Link> and acknowledge our
            <Link to="#">privacy notice</Link>.
          </p>
        </form>

        <h4>Connect with friends on StubHub</h4>

        <p className="bold">
          Have a StubHub account?<Link to="/signin">Sign in</Link>
        </p>
      </section>
    </div>
  );
};



export default Signup;
