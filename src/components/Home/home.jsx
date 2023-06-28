import React, { useEffect, useState } from "react";
import "./home.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import FoodCarousal from "../carousel/food_carousal";

import { NavLink } from "react-router-dom";

import Resturants from "../../Resturants/resturants";

import Combo from "../Combo/combo";

import MoreFood from "../../LoadMore/loadmore";
const Home = () => {
  const Foods = [
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665758645427-006-rice.png",
      text: "Rice",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665764197823-005-samosa.png",
      text: "Samosa",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665771159053-momo.webp",
      text: "Momo",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665771659833-ramen%281%29.webp",
      text: "chowmein",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665771190109-fast-food.webp",
      text: "Burger",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665771640490-barbecue.webp",
      text: "Non-veg snacks",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665773773622-002-biryani.png",
      text: "Biryani",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665775851939-007-flatbread.png",
      text: "indian breads",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665775864418-008-laddu.png",
      text: "deserts",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1680183452095-fried-potatoes.png",
      text: "FB sides",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1680183467904-soda.png",
      text: "Soft drinks",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1680182557327-fast-food.png",
      text: "FB value meals",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1680182568569-burger.png",
      text: "FB burgers",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1680182582476-burrito.png",
      text: "FB wraps",
    },

    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665754100871-All%20in%20One%20MealBox.png",
      text: "All-in one meals",
    },
    {
      images:
        "https://nova-foods.s3.ap-south-1.amazonaws.com/categories/1665768330884-003-paneer.png",
      text: "indians curries",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 15;
  const imagesToShow = 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesToShow < totalImages ? prevIndex + 1 : currentIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : currentIndex
    );
  };

  useEffect(() => {
    console.log("currentIndex", currentIndex);
  }, [currentIndex]);

  const renderImages = () => {
    const images = [];

    for (
      let i = currentIndex;
      i < currentIndex + imagesToShow && i < totalImages;
      i++
    ) {
      // Assuming you have image URLs in an array called "imageUrls"
      const food = Foods[i];
      images.push(
        <div key={i} className="slider-image">
          <div className="images_text">
            <h3 className="image-text">{food.text}</h3>
            <NavLink to="filter">
              <img className="images" src={food.images} alt={`Image ${i}`} />
            </NavLink>
          </div>
        </div>
      );
    }

    return images;
  };

  return (
    <>
      <div className="carousel-slider">
        <button
          className="btn btn-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <BsArrowLeftCircle />
        </button>
        <div className="image-container">{renderImages()}</div>
        <button
          className="btn btn-next"
          onClick={handleNext}
          disabled={currentIndex + imagesToShow >= totalImages}
        >
          <BsArrowRightCircle />
        </button>
      </div>

      <FoodCarousal />
      <Resturants />
      <Combo />
      <MoreFood />
    </>
  );
};

export default Home;
