import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Posts = () =>{
    const [data, setdata] = useState ([])
    const [jobtitle, setjobtitle] = useState("")
    const [jobdescription, setjobdescription] = useState("")
    const [image, setImage] = useState ("")

     useEffect(()=>{
        axios.get("http://localhost:2024/jobfield")
        .then((res)=>{
            console.log(res.data);
            setdata(res.data)
        }).catch((err)=>{
            console.log(err);
        })
     },[])

    const post = () => {
        axios.post("http://localhost:2024/jobfield",{jobtitle, jobdescription, image})
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        }

        const choosefile = (e) =>{
        const file = e.target.files[0]
        console.log(file);
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            setImage(reader.result)
            console.log(reader.result);
        }
        }
  return (
    <>
    <h1 className='d-flex justify-content-center mx-auto'>Post</h1>
    <input className='form-control w-25 mx-auto mt-3' onChange={(e) => setjobtitle(e.target.value)} type='text' placeholder='JobTitle'/>
    <input className='form-control w-25 mb-3 mx-auto mt-3' onChange={(e) => setjobdescription(e.target.value)}type='text' placeholder='Job Description'/>
   <div className='postdiv mx-auto' >
   <input className='fileinput' onChange={(e) => choosefile(e)}type='file'/>
    <button onClick={post} className='postjobbutton'>Post</button>
  
   </div>
   

    {
        data.map((el, index) =>(
            <div key={index}>
            <div  className="Jobdetails" >
               <h3>{el.jobtitle}</h3>
               <h5>{el.jobdescription}</h5>
               <img className='imgpost' src={el.image} alt=''  />

            </div>
            </div>
        ))
    }
      </>
  )
}

export default Posts