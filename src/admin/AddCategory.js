import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth/index";
import $ from "jquery";
import {createCategory } from './apiAdmin';


const AddCategory = () =>{
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

      //DESTRUCTURE USER AND TOKEN FROM LOCAL STORAGE
  const {user, token } = isAuthenticated();

  const handleChange = e => {
    setError("");
    setName(e.target.value);
};

  const clickSubmit = e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then(data => {
        if (data.error) {
            setError(data.error);
        } else {
            setError("");
            setSuccess(true);
        }
    });
};

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success"  style={{color: 'green',  borderRadius: '10px', backgroundColor: '#d4edda', padding: '20px', display: success ? '' : 'none' }}>{name} is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger" style={{color: 'red', borderRadius: '10px', backgroundColor: '#f8d7da', padding: '20px', display: error ? '' : 'none' }} >{name} Already exist in the db</h3>;
    }
  };


 return (
    <div>
      <section className="signin">

           {showSuccess()}
            {showError()}
            &nbsp;
            &nbsp;
            &nbsp; 
        <h2>Create New Category</h2>

        <form onSubmit={clickSubmit}>
      <div className="form-container">
        <label htmlFor="name">Catgory Name</label>
        <input
          name="name"
          value={name}
          type="text"
          className="input-custom"
          onChange={handleChange}
          autoFocus
          required
        />
      </div>
      <button onClick={clickSubmit} className="btn-blue">Create Category</button>
    </form>
       
      </section>
    </div>
  );

}

export default AddCategory;