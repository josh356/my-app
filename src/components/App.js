//@ts-check



import './App.css';

import Navbar from './Navbar';
import React from 'react';
import Menu from './Menu';
import categoryData from "../categoryData"
import ItemList from './ItemList';
import itemListings from "../itemListings"
import Cart from "./Cart"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import SignIn from './SignIn';
import Confirmation from './Confirmation';



function App() {

  return (
    <Router basename = "/my-app">
      <Navbar />
      <button onClick = {() => 
        {
          localStorage.setItem("cartCountKey", "")
          localStorage.setItem("cartItemsKey", "")
          localStorage.setItem("user", "")
          window.location.reload()
        }}>
        Temp Clear
      </button>
      <Switch>
        <Route exact path="/Cart">
          <Cart />
        </Route>
        <Route exact path="/Confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/:categoryId">
          <ItemList catalogue={itemListings} />
        </Route>
        <Route path="/">
          <div className="home">
            <Menu categories = {categoryData}/>
          </div>
        </Route>

      </Switch>
    </Router>
    
  )
}

export default App;
