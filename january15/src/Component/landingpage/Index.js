import React from 'react'
import Hero from "./Hero";
import Partnership from "./Partnership";
import Testimonias from "./Testimonias";
import Footer from "./Footer";
import Navbar from './Navbar';

 const Index = () => {
  return (
    <>
       <Navbar/>
      <Hero />
      <Partnership />
      <Testimonias />
      <Footer />
    </>
  )
}
export default Index;
