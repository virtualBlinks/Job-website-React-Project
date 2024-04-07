import { useEffect, useState } from "react";
import axios from "axios";
const Practice = () => {
   const [userName, setUserName] = useState("Abiola")
   const [changeUser, setChangeUser] = useState("")
   const [data, setdata] = useState([])
   const [onLoad, setonLoad] = useState(false)
   let mystyle ={height:"1800px", backgroundColor:"green", width:"100%"}
   const changeName = ()=>{
     setUserName(changeUser)
   }
   const getData = ()=>{
axios.get("https://api.github.com/users").then((res)=>{
    // console.log(res.data);
    setonLoad(true)
    setdata(res.data)
})      .catch((error) => {
    console.error('Error fetching data:', error);
  });

   }; 
   useEffect(()=>{
    getData()  
   },[])
    
    return (
        <>
        <div style={mystyle}>
        <h1>Fetch</h1>
        {/* <button onClick={getData}>Get Data</button> */}
        <div className="fetchDiv d-flex w-100 flex-wrap gap-5 justify-content-center " >
        {!onLoad? <h1>.... its fetching</h1>:data.map((item,index)=>(
            <div  key={index}>
                <h1 style={{fontSize:"20px", textAlign:"center"}}>{item.login}</h1>
                <img style={{height:"200px", width:"200px", borderRadius:"10px"}} src={item.avatar_url} alt="" />
            </div>       
        ))}
        </div>
         <h1>{userName}</h1>
         <input onChange={(e)=>setChangeUser(e.target.value)} type="text" />
         <button onClick={changeName}>Change Button</button>
        </div>

        </>
      );
}
 
export default Practice;