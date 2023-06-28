import React, { useState } from "react";
import "./offer.css";
const Offer = () => {
  const [button1Style, setButton1Style] = useState({});
  const [button2Style, setButton2Style] = useState({});

  const handleButtonClick1 = () => {
    // Update the style for button 1
    setButton1Style({ backgroundColor: "#ffffb3", color: "#ff4000" });
    // Reset the style for button 2
    setButton2Style({});
  };

  const handleButtonClick2 = () => {
    // Reset the style for button 1
    setButton1Style({});
    // Update the style for button 2
    setButton2Style({ backgroundColor: "#ffffb3", color: "#ff4000" });
  };
  return (
    <>
      <div className="offer_container">
        <div className="btn_container">
          <button style={button1Style} onClick={handleButtonClick1}>
            offer
          </button>
          <button style={button2Style} onClick={handleButtonClick2}>
            Promo
          </button>
        </div>

        <div className="img_container_offer">
          <img
            src="https://nova-foods.s3.ap-south-1.amazonaws.com/offers/1680195277767-3.png"
            alt=""
          />
          <img
            src="https://nova-foods.s3.ap-south-1.amazonaws.com/offers/1681656598213-Acer_Wallpaper_01_5000x2814.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Offer;
