import React, { useEffect } from "react";
//import video from "../../assets/video/7dac71e5.mp4"; //red
//import video from "../../assets/video/3163f6fd.mp4"; //pink
//import video from "../../assets/video/4c0d41ab.mp4"; // White
import video from "../../assets/video/8b5956ac.mp4"; //toxic green
// import video from "../../assets/video/e8a42d63.mp4" ;//light blue



function BgPortfolio() {
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0, 209, 171)";
  }, []);
  
  return (
    <div className="bg-video">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );

}

export default BgPortfolio;
