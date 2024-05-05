import React from "react";

const myStyle = {
  height: "500px",
  width: "100%",
  backgroundColor: "#3D3D3D",
  position: "relative",
  overflow: "hidden",
};

const Footer = () => {
  return (
    <div className="footerdiv" style={myStyle}>
      <img className="logofooter" src="footerlogo.png" alt="" />
      <div className="footerblock"></div>
      <div className=" footercontent design d-flex">
        <div className="sitemapdiv">
          <p>Sitemap</p>
          <ul className="text-light">
            <li>Home</li>
            <li>Abouts</li>
            <li>Growers</li>
            <li>Merchants</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="headofficediv">
          <p>Head Office</p>
          <h5>
            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
            Charlottesville, CA 45565
          </h5>
          <div className="linediv">
            <h5>(123) 456-7890</h5>
            <hr />
          </div>
        </div>

        <div className="socialsdiv">
          <p>Socials</p>
          <div className="socialslogo d-flex gap-5">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>
          <div className="newletterdiv">
            <p>News letter</p>
            <div className="emailaddress">
              <span>Enter your email address</span>
              <i className="bi bi-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="hresource">
            <div>
            <span>H-Resource Agency</span>
            <hr />
            </div>
            <span>© 2020 Lift Media. All rights reserved.</span>
          </div>
     
    </div>
  );
};

export default Footer;
