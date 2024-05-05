import React,{useState} from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Profiledrop() {

  const [details, setDetails] = useState({});


  useEffect(() => {
    axios
      .get('http://localhost:2021/companysignup')
      .then((res) => {
        if (res.data.length > 0) {
          setDetails(res.data[0]); 
        }
      })
      .catch((err) => {
        console.error('Company signup error:', err);
        toast.error('Failed to fetch company data');
      });
  }, []);

      

  return (
    <>
      <div className='profiledrop' >
         <div className='h5div'><h5>{details.companyEmail}</h5></div> 

      <ul className='menus'>
          <li><a href=""><i class="bi bi-person-circle"></i>Account</a></li>
          <li><a href=""><i class="bi bi-speedometer2"></i>Dashboard</a></li>
          <li><a href=""><i class="bi bi-arrow-90deg-left"></i>Job Board</a></li>
          <li><a href=""><i class="bi bi-bookmark"></i>Saved Post</a></li>
          <li><a href=""><i class="bi bi-credit-card"></i>Billing</a></li>
          <hr />
          <li><Link to="/"><i class="bi bi-ban"></i>Logout</Link></li>
        </ul>
        
            
      </div>
    
    </>
  )
}

export default Profiledrop