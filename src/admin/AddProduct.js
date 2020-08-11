import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth/index";
import $ from "jquery";
import {createProduct, getCategories } from './apiAdmin';


const AddProduct = () =>{
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });

      //DESTRUCTURE USER AND TOKEN FROM LOCAL STORAGE
  const {user, token } = isAuthenticated();

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
} = values;

   // load categories and set form data
   const init = () => {
    getCategories().then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setValues({
                ...values,
                categories: data,
                formData: new FormData()
            });
        }
    });
};

useEffect(() => {
    init();
}, []);


const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
};


const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });

    createProduct(user._id, token, formData).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setValues({
                ...values,
                name: '',
                description: '',
                photo: '',
                price: '',
                quantity: '',
                loading: false,
                createdProduct: data.name
            });
        }
    });
};


  const showSuccess = () => (
    <div className="alert alert-info" style={{color: 'green',  borderRadius: '10px', backgroundColor: '#d4edda', padding: '20px', display: createdProduct ? '' : 'none' }}>
        <h2 style={{color: 'green'}}>{`${createdProduct}`} is created!</h2>
    </div>
);

  const showError = () => {
    if (error) {
      return <h3 className="text-danger" style={{color: 'red', borderRadius: '10px', backgroundColor: '#f8d7da', padding: '20px', display: error ? '' : 'none' }} >{error}!</h3>;
    }
  };



  

const showLoading = () =>
loading && (
    <div className="alert alert-info" style={{color: 'green',  borderRadius: '10px', backgroundColor: '#d4edda', padding: '20px'}}>
        <h2 style={{color: 'green'}} >Creating Product...</h2>
    </div>
);


 return (
    <div>
      <section className="signin">

           {showSuccess()}
            {showError()}
            {showLoading()}
            &nbsp;
            &nbsp;
            &nbsp; 
        <h2>Create New Category</h2>

        <form onSubmit={clickSubmit}>
            <div className="form-container">
                
            <div className="form-control">
                <label htmlFor="name">Product Image</label>
                <input       
                    type="file"
                    className="input-custom"
                    onChange={handleChange('photo')}
                    accept="image/*"
                />
                </div>

                <div className="form-control">
                <label htmlFor="name">Product Name</label>
                <input
                   
                    value={name}
                    type="text"
                    className="input-custom"
                    onChange={handleChange('name')}
                
                />
                </div>

                <div className="form-control">
                <label htmlFor="description">Description</label>
                <input
                   value={description}
                    className="input-custom"
                    onChange={handleChange('description')}
                />
                </div>

                <div className="form-control">
                <label htmlFor="price">Price</label>
                <input
                    value={price}
                    type="number"
                    className="input-custom"
                    onChange={handleChange('price')}
                />
                </div>

                <div className="form-control">
                <label htmlFor="shipping">Shpping</label>
                <select onChange={handleChange('shipping')} className="select-custom">
                    <option>Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
                </div>

                <div className="form-control">
                <label htmlFor="shipping">Category</label>
                <select onChange={handleChange('category')} className="select-custom">
                    <option>Please select</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
                </div>

                <div className="form-control">
                <label htmlFor="quantity">Quantity</label>
                <input
                    value={quantity}
                    type="number"
                    className="input-custom"
                    onChange={handleChange('quantity')}
                />
                </div>

                <button className="btn-blue">Save</button>
            </div>
            </form>
       
      </section>
    </div>
  );

}

export default AddProduct;