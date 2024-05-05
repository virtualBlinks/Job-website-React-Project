import React from "react";
import Navbar from "../landingpage/Navbar";


const About = () => {
  return (
    <>
      <Navbar />
      <div className="divab">
        <div>
          <div className="imgholder">
            <img className="imgceo" src="Ceoimg.jpg" alt="" />
            <h5>Johnson's Ideal (PhD)</h5>
            <h5>CEO H-Resource</h5>
          </div>
        </div>
      </div>
      <div className="pdiv">
        <div>
          <div className="innerpdiv">
            <div>
              <p>Mission:</p>
              <span>
                Our mission is to connect talented individuals with rewarding
                opportunities while helping employers find the perfect fit for
                their teams, fostering growth, and driving success for both
                parties.
              </span>
            </div>
          </div>

          <div className="innerpdiv">
            <div>
              <p>Vision:</p>
              <span>
                Our vision is to be the premier destination for job seekers and
                employers alike, offering a seamless platform that simplifies
                the hiring process, promotes diversity and inclusion, and fuels
                career advancement.
              </span>
            </div>
          </div>

          <div className="innerpdiv">
            <div>
              <p>Values:</p>
              <ol className="valuelist">
                <li><span>
                Empowerment: We empower individuals to take control of their
                  careers by providing valuable resources, tools, and support to
                  enhance their professional journey. </span>
                </li>                
                <li><span>
                  Innovation: We embrace innovation to continuously improve our
                  platform, leveraging technology to streamline the hiring
                  process and deliver exceptional user experiences.
                </span>                 
                </li>
                <li><span> Integrity: We uphold the highest standards of integrity,
                  maintaining the confidentiality and security of user
                  information while fostering trust and credibility within our
                  community.</span>                 
                </li>
                <li><span> Collaboration: We foster collaboration between job seekers and
                  employers, facilitating meaningful connections and
                  partnerships that drive mutual success and growth.</span>                 
                </li>
                <li> <span> Quality: We are committed to delivering quality services that
                  meet the needs and expectations of our users, striving for
                  excellence in everything we do.</span>                 
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
