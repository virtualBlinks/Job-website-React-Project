import React from "react";
import First from "./Component/landingpage/Partnership";
import Hero from "./Component/landingpage/Hero";
import Partnership from "./Component/landingpage/Partnership";
import Testimonias from "./Component/landingpage/Testimonias";
import Practice from "./Component/Practice";
import Footer from "./Component/landingpage/Footer";
import Button from "./Component/Button";
import Displaytodo from "./Component/Displaytodo";
import Addtodo from "./Component/Addtodo";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./Component/landingpage/Index";
import Signup from "./Component/Signup/Signup";
import Signin from "./Component/Signin/Signin";
import Generaljob from "./Component/Onboarding/Generaljob";
import Notfound from "./Notfound";
import Generalpersonal from "./Component/Onboarding/Generalpersonal";
import Newnavbar from "./Component/Onboarding/Newnavbar";
import About from "./Component/About/About";
import Content from "./Component/Onboarding/Content";
import Postjob from "./Component/postjob/Postjob";

const App = () => {
  const [allTodo, setallTodo] = useState([]);
  const hello = (myNumber) => {
    alert("Hello world" + myNumber);
  };
  const additem = (newTodo) => {
    setallTodo([...allTodo, newTodo]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Navigate to='/' />} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/generaljob" element={<Generaljob/>} />
        <Route path="/generalpersonal" element={<Generalpersonal/>}/>        
        <Route path="/postjob" element={<Postjob/>}/>        
        <Route path="*" element={<Notfound/>} />
       </Routes>

       {/* <Newnavbar/>
       <Content/> */}











      {/* <Addtodo additem ={additem}/> 
      <Displaytodo allTodo={allTodo}/> */}

      {/* <Button name="Edit" color ="btn btn-warning" hello ={hello}/>
      <Button name="Delete" color ="btn btn-danger"/>
      <Button name="Rusticate" color ="btn btn-dark"/> */}
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Partnership/> */}
      {/* <Testimonias/> */}
      {/* <Footer/> */}
      {/* <Practice/> */}
    </>
  );
};
export default App;
