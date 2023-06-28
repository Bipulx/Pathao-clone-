import React from "react";
import "./food_carousal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Carousal = () => {
  return (
    <>
      <div className="carousal_container">
        <Carousel autoPlay>
          <div>
            <img src="https://api.citi977.com.np/images/image-1684397519057.webp" />
          </div>
          <div>
            <img src="https://api.citi977.com.np/images/image-1682238447712.webp" />
          </div>
          <div>
            <img src="https://api.citi977.com.np/images/image-1681232560749.webp" />
          </div>
          <div>
            <img src="https://api.citi977.com.np/images/image-1681232694647.webp" />
          </div>
          <div>
            <img src="https://api.citi977.com.np/images/image-1681232965402.webp" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carousal;
