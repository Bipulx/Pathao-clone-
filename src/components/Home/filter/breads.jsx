import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Breads = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778774926-Aloo%20Paratha.webp"
          title="Alo paratha"
          cutPrice="Rs.80"
          price="Rs.72"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778707627-Laccha%20Paratha.webp"
          title="Lacha paratha"
          cutPrice="Rs.69"
          price="Rs.63"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778757670-Chapati.webp"
          title="Chapati(2pcs)"
          cutPrice="Rs.50"
          price="Rs.45"
        />
      </div>
    </>
  );
};

export default Breads;
