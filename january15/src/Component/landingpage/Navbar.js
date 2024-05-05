import React from "react";
import "./Navstyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <nav className=" nav d-flex justify-content-around align-items-center  ">
        <a className="navbar-brand" href="#">
          <img className="navbarimg" src="logo.png" alt="" />
        </a>
        <ul className="d-flex  list-none me-5">
          <li><Link to="/">Home</Link></li>
          <li><a href="">Contact</a></li>
          <li><Link to="/about">About Us</Link></li>
        <li><Link to="">Address</Link></li>          
          <li><a href="">Blog</a></li>
        </ul>
  <div className="d-flex gap-4 align-items-center">
     <Link className="btn btn-md btn-dark fffs" to="/signin">Sign in</Link>
        <Link className="btn btn-md d-flex align-items-center gap-2 ff" to="/signup">
       Get Started <i className="bi bi-person-circle fff"></i></Link>
     
   </div>
        </nav>
      
    </>
  );
};
export default Navbar;
