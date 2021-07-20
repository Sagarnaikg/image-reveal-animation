import React, { useEffect } from "react";
import designImage from "../assets/design.webp";
import { gsap, Power2 } from "gsap";

const Home = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".container", 0.4, { visibility: "visible" })
      .to(".img-cover", 1.4, {
        width: "0%",
        ease: Power2.easeInOut,
      })
      .from(".image", 1.4, {
        scale: 1.4,
        ease: Power2.easeInOut,
        delay: -1.4,
      });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="img-container">
          <div className="img-cover"></div>
          <img className="image" src={designImage} alt="design" />
        </div>
      </div>
    </div>
  );
};

export default Home;
