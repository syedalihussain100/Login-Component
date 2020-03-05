import React from 'react';
import "./App.css";
import Home from "./cmc/Home";
import About from "./cmc/About";
import Listing from "./cmc/Listing";
import Protected from "./cmc/Protected";
import Auth from "./cmc/Auth";
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () =>{
    return(
        <div className="one">
       
       <Router>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="listing">Product Listing</Link>
        <Link to="./">Login</Link>

        <Switch>
          <Route path="/about">
            <Protected cmp={About} />
          </Route>
          <Route path="/home">
          <Protected cmp={Home} />
          </Route>
          <Route path="/listing">
          <Protected cmp={Listing} />

          </Route>
          <Route path="/">
          <Auth/>
          </Route>
        </Switch>


        

       </Router>
        </div>
    )
}

export default App;