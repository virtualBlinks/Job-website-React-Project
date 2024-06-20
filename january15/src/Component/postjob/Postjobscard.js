import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Postjobscard() {
    const [data, setdata] = useState([]);
    const [onLoad, setonLoad] = useState(false);
    const [likes, setLikes] = useState([]);
    const [comments, setcomments] = useState([]);
    
    useEffect(() => {
      axios.get("http://localhost:2025/jobfield")
          .then((res) => {
              console.log(res.data);
              setonLoad(true);
              setdata(res.data);
  
              const storedLikes = JSON.parse(localStorage.getItem('likes')) || [];
              const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
  
              setLikes(storedLikes.length === res.data.length ? storedLikes : new Array(res.data.length).fill(0));
              setcomments(storedComments.length === res.data.length ? storedComments : new Array(res.data.length).fill(0));
          }).catch((err) => {
              console.log(err);
          });
  }, []);

    useEffect(() => {
      
        localStorage.setItem('likes', JSON.stringify(likes));
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [likes, comments]);

    const like = (index) => {
        setLikes(prevLikes => {
            const newLikes = [...prevLikes];
            newLikes[index]++;
            return newLikes;
        });
    };
    const comment = (index) => {
        setcomments(prevComment => {
            const newComment = [...prevComment];
            newComment[index]++;
            return newComment;
        });
    };

    return (
        <div className='jobcarddiv'>
            {!onLoad ? <h1>.... its fetching</h1> : data.map((el, index) => (
                <div key={index}>
                    <div className="Jobdetails">
                        <strong className='title'>Job Title:<span>{el.jobtitle}</span></strong>
                        <strong className='descript'>Job Description:<span>{el.jobdescription}</span></strong>
                        <button className='detailsbutton'>See More</button>
                        <img className='imgpost' src={el.image} alt='' />
                        <div className='likesharcommentdiv'>
                            <button onClick={() => like(index)}>Like<sup className='suppost'>{likes[index]}</sup></button>
                            <button onClick={()=>comment(index)}>Comment <sup className='suppost'>{comments[index]}</sup></button>
                            <button>Share</button>
                        </div>
                    </div>
                    <div >
                      <img src="" alt="" />
                      <span></span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Postjobscard;
