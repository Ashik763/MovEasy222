import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home/Home";
import Login from "./Login/Login";
import Navbar from "./Navbar/NavBar";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Destination from "./Destination/Destination";
import { createContext } from "react";
import DestinationWithVehicle from "./Destination/DestinationWithVehicle/DestinationWithVehicle";
import Blog from "./Blog/Blog";

export const MyContext = createContext();
// export const MyContext2 = createContext();

function App() {

  const [newUser,setNewUser] = useState({});
  const [destinationInfo,setDestinationInfo] = useState('');
  
console.log(destinationInfo);
  
  return (
    <MyContext.Provider value={[newUser,setNewUser,destinationInfo,setDestinationInfo]}>
      ;
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute exact path="/destination">
          <Destination/>
        </PrivateRoute>
        <PrivateRoute path="/destination/:vehicle">
          <DestinationWithVehicle/>
        </PrivateRoute>
        <Route exact path="/contact">
          <Home/>
        </Route>
        <Route exact path="/blog">
          <Blog/>
        </Route>
      
       
      </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
