import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover
              <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stats">
              <span className="stats-title">
                <CountUp start={1000} end={5000} duration={4} />
                <span className="stats-plus"> + </span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stats">
              <span className="stats-title">
                <CountUp start={1000} end={8000} duration={4} />
                <span className="stats-plus"> + </span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stats">
              <span className="stats-title">
                <CountUp start={10} end={29} duration={4} />
                <span className="stats-plus"> + </span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flexCenter hero-right">
          <motion.div className="image-container"
            initial={{y:"7rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:2,
              type:"spring"
            }}
          >
            <img src="./hero-image.png" alt="hero img" srcSet="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
