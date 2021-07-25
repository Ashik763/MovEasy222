import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../App';

const Navbar = () => {
  const [newUser,setNewUser] = useContext(MyContext);
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <div className="container-fluid">
    <Link className="navbar-brand ms-5" to="/">movEasy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/destination">Destination</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/blog">Blog</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/login" >{newUser.email?<p> {newUser.name} </p> : <p> Log In</p>}</Link> 
        </li>
        
      
       
      </ul>
      
    </div>
  </div>
</nav>
            
        
    );
};

export default Navbar;