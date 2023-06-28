import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Wraps = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680194187111-French%20Fries.jpg"
          title="French fries medium"
          cutPrice="Rs.200"
          price="Rs.180"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680194144935-French%20Fries.jpg"
          title="French fries small"
          cutPrice="Rs.150"
          price="Rs.120"
        />
      </div>
    </>
  );
};

export default Wraps;
