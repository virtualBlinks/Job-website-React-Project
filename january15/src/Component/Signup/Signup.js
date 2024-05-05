import React, { useState } from 'react';
import Personalform from './Personalform';
import Companyform from './Companyform';

export const Signup = () => {
    const [activeForm, setActiveForm] = useState('company'); 

    const PersonalFormClick = () => {
        setActiveForm('personal');
    };

    const CompanyFormClick = () => {
        setActiveForm('company');
    };

    return (
        <>
            <div className='signupdivmain'>
                <div className='signdiv'>
                    <img className='signimg' src="logo2.png" alt="" />
                    <div className='categorydiv'>
                        <div className='creatcategory'>
                            <div className='uuu'>
                                <img className='imagesvg' src="uuuuu.png" alt="" />
                                <h2>Click to choose your account type</h2>
                            </div>
                            <div className='linksdiv'>
                                <a href="#" onClick={CompanyFormClick}>Create Company Account</a><span className='or'>OR</span><a href="#" onClick={PersonalFormClick}>Create Personal Account</a>
                            </div>
                        </div>
                        {activeForm === 'personal' && <Personalform />}
                        {activeForm === 'company' && <Companyform />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
