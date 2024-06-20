import React, { useState } from 'react';
import axios from 'axios';
import Postjobscard from './Postjobscard';

const Posts = () => {
    const [jobtitle, setjobtitle] = useState("");
    const [jobdescription, setjobdescription] = useState("");
    const [image, setImage] = useState("");
    const [errormess, seterrormess] = useState("");

    const post = () => {
        if (!jobtitle || !jobdescription || !image) {
            seterrormess("Please fill in all fields");
            return;
        } else {
            seterrormess("");
        }

        axios.post("http://localhost:2025/jobfield", { jobtitle, jobdescription, image })
            .then((res) => {
                console.log(res);
                document.querySelector('.content1').innerText = "";
                document.querySelector('.content2').innerText = "";
                document.getElementById('fileInput').value = "";
                window.location.reload()
                
            })
            .catch((err) => {
                console.error(err);
                seterrormess("An error occurred while posting job.");
            });
    };

    const choosefile = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
            console.log(reader.result);
        };
    };

    return (
        <>
            <h1 className='d-flex justify-content-center mx-auto'>Post</h1>
            <div className='postdiv mx-auto'>
                <div className='content1 form-control mb-3' contentEditable={true} onInput={(e) => setjobtitle(e.target.innerText)} style={{ textAlign: 'top' }}></div>
                <div className='content2 form-control mb-3' contentEditable={true} onInput={(e) => setjobdescription(e.target.innerText)} style={{ textAlign: 'top' }}></div>
                <input id="fileInput" className='fileinput' onChange={(e) => choosefile(e)} type='file' />
                <small className='errormess'>{errormess}</small>
                <button onClick={post} className='postjobbutton'>Post</button>
            </div>
            <Postjobscard />
        </>
    );
};

export default Posts;
