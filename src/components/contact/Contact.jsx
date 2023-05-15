import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill,BsPersonVideo } from "react-icons/bs";
//  import { BsPersonVideo } from "react-icons/hi2";
 import {BiMessageDetail} from 'react-icons/bi'
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter C-container">
        {/* Left Side */}

        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              {/* First Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart deatils">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                  
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart deatils">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                  
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flexStart row">
              {/* Third Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsPersonVideo size={25} />
                  </div>
                  <div className="flexColStart deatils">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                  
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BiMessageDetail size={25} />
                  </div>
                  <div className="flexColStart deatils">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                  
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
            
          </div>
        </div>
        {/* Ridht Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
