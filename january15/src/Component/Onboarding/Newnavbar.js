import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profiledrop from './Profiledrop';

function Newnavbar() {
  const [details, setDetails] = useState([]);
  const [showMenu, setShowMenu] = useState(false);


 
  useEffect(() => {
    axios
      .get('http://localhost:2021/companysignup')
      .then((res) => {        
          setDetails(...res.data);         
      })
      .catch((err) => {
        console.error('Company signup error:', err);
        toast.error('Failed to fetch company data');
      });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  

  return (
    <>
      <nav className="nav2 d-flex justify-content-around align-items-center">
        <a className="navbar-brand" href="/">
          <img className="navbarimg" src="logo2.png" alt="" />
        </a>
        <ul className="d-flex list-none me-5">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/postjob">Post a job</Link></li>
          <li><Link to="">Job</Link></li>
          <li><a href="">Premium</a></li>
          <li><a href="">Messages</a></li>
        </ul>
        <div className="profile  align-items-center">
          <button className='tbut' onClick={toggleMenu}>
            <i className="bi bi-person-circle pimg" />   <br />      
            <span>{details.companyName}</span> <i className="bi bi-chevron-down"></i>      
          </button>
          {showMenu && <Profiledrop />}
        </div>
      </nav>
    </>
  );
}

export default Newnavbar;
