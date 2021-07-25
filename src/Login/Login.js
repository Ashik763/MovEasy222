import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../App";
import { useHistory, useLocation } from "react-router-dom";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}


const Login = () => {
  
const[newUser,setNewUser] = useContext(MyContext);
const history = useHistory();
const location = useLocation();
// console.log(newUser);
let { from } = location.state || { from: { pathname: "/" } };

  const [user,setUser] = useState({
    name:'',
    email:'',
    img:'',
    isLoggedIn:false
  })

  // console.log(NewUser);

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.displayName);
        setUser(result.user);
        const {displayName,email,photoURL} =result.user;
        
        setUser({name:displayName,email:email,img:photoURL,isLoggedIn:true});
        // MyLogInContext([user,setUser]); 
        setNewUser({name:displayName,email:email,img:photoURL,isLoggedIn:true})
        // ...
        history.replace(from);
      });
  };
  return (
    <div className="text-center" style={{}}>
     
        <h2>  {user.name }</h2>
        <img src={user.img} alt='' />
     
      <button onClick={handleGoogleSignIn}>{user.name?<p> sign out</p>: <p> Sign In with Google  </p> }</button>
    </div>
  );
};

export default Login;
