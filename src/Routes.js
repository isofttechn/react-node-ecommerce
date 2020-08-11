import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./core/About";
import Contact from "./core/Contact";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import  Dashboard from './user/UserDashboard';
import AdminPanel from "./user/AdminDashboard";
import Checkout from "./core/ChechoutComponents/Checkout";
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';





const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/checkout" exact component={Checkout} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin" exact component={AdminPanel} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />





      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
