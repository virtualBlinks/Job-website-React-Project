import React from "react";
import Navbar from "./Component/Navbar";
import First from "./Component/Partnershippage";
import Hero from "./Component/Hero";
import Partnership from "./Component/Partnershippage";
import Testimonias from "./Component/Testimonias";
import Practice from "./Component/Practice";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Partnership/>
      <Testimonias/>
      <Footer/>
      {/* <Practice/> */}
    </>
  );
};
export default App;
