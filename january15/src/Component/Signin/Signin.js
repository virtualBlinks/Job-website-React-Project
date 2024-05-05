import React, { useState } from 'react'
import Personalform from './Personalform';
import Companyform from './Companyform';

const Signin = () => {
    const [activeForm, setActiveForm] = useState('company'); 

    const PersonalFormClick = () => {
        setActiveForm('personal');
    };

    const CompanyFormClick = () => {
        setActiveForm('company');
    };

    return (
        <>
            <div className='signindivmain'>
                <div className='categorydiv'>
                    <div className='creatcategory'>
                        <div className='uuu'>
                            <img className='imagesvg' src="uuuuu.png" alt="" />
                            <h2>Click to choose your account type</h2>
                        </div>
                        <div className='linksdiv2'>
                            <a onClick={CompanyFormClick} href="#" >Sign in to Company Account</a><span className='or'>OR</span><a onClick={PersonalFormClick} href="#">Sign in to Personal Account</a>
                        </div>
                    </div>                
                   
                    {activeForm === 'personal' && <Personalform />}
                    {activeForm === 'company' && <Companyform />}
                </div>           
              
                <div className='signindiv'>
                    <img className='signimg' src="logo2.png" alt="" />
           
                </div>
            </div>


        </>
    )
}

export default Signin