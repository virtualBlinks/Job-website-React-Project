import React from "react";
import "./Navstyle.css"
const Navbar = () => {
  return (
    < >
   
    
     <nav className=" nav d-flex justify-content-around align-items-center  ">
        <a className="navbar-brand" href="#">
          <img className="navbarimg" src="logo.png" alt="" />
        </a>
        <ul className="d-flex  list-none me-5">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Post a Job</li>
          <li>Job</li>
        </ul>
        <button className="btn btn-dark btn-lg d-flex align-items-center gap-4 ff">
          Get Started <i className="fa-solid fa-arrow-right"></i>
        </button>
        </nav>
        
     
    </>
  );
};
export default Navbar;
