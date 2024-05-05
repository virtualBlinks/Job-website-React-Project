import React, { useEffect, useState } from "react";
import "./Navstyle.css";
import { Alert } from "bootstrap";

const Hero = () => {
  const [buttonhelp, setButtonHelp] = useState(false);
  const [helpMessage, setHelpMessage] = useState("Help message");
  const [inputText, setInputText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const arrayText = ["Information Technology (IT)","Healthcare","Education","Finance","Marketing","Engineering",
    "Human Resources (HR)","Customer Service","Sales","Administration","Manufacturing","Retail","Hospitality",   "Consulting","Legal","Design","Research and Development (R&D)","Construction","Media and Communications",    "Transportation and Logistics",
  ];

  useEffect(() => {
    const typing = setInterval(() => {
      const currentText = arrayText[textIndex];
      setInputText((prev) => {
        if (prev === currentText) {
          setTextIndex((index) => (index + 1) % arrayText.length);
          return "";
        }
        return currentText.substring(0, prev.length + 1);
      });
    }, 200);

    return () => clearInterval(typing);
  }, [textIndex, arrayText]);

  const handleAlertClick = () => {
    alert("You have been added to the email notification");
  };

  const handleButtonClick = () => {
    setButtonHelp(true);
  };

  const handleMouseDown = () => {
    setHelpMessage("");
  };

  return (
    <div className="diva">
      <div className="herodiv">
        <h1 className="herohgtext">
          Preferred platform for Staff sourcing and Job Seekers.
        </h1>
        <h4 className="herosmtext">
          Helping to identify and make available job opportunities that align
          with your Skills, strengths and passions.
        </h4>
        <button
          onClick={handleAlertClick}
          className="btn btnn btn-dark btn-lg align-items-center d-flex gap-3"
        >
          Join Alert List <i className="fa-regular fa-bell fa-beat-fade"></i>
        </button>
        <div className="searchholder">
          <label className="label" htmlFor="search">
            <i className="bi bi-search"></i>
          </label>
          <input className="name"id="search" type="text"value={inputText}readOnly/>
        </div>
      </div>
      <img className="heroimg" src="Group 3.png" alt="" />
      <div className="helpdiv">
        <button className="buttonhelp" onClick={handleButtonClick}>Help?</button>
        {buttonhelp && (<div className="helpmessage" onMouseDown={handleMouseDown}contentEditable="true" >    {helpMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
