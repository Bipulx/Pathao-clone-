import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Deserts = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778867732-Lal%20Mohan.webp"
          title="Lal mohan"
          cutPrice="RS.79"
          price="Rs.69"
        />
      </div>
    </>
  );
};

export default Deserts;
