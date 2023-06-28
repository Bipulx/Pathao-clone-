import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Drinks = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680194231279-Coke.jpg"
          title="Coke(1.5ltr)"
          cutPrice="Rs.175"
          price="Rs.150"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682957356534-ktm%20delight.png"
          title="Coke(2ltr)"
          price="Rs.190"
        />
      </div>
    </>
  );
};

export default Drinks;
