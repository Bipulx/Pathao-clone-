import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const One = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190436355-KING%20BACON.webp"
          title="Hungry man Burger"
          cutPrice="Rs.430"
          price="387"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190436355-KING%20BACON.webp"
          title="King bacon grilled chicken burger"
          cutPrice="Rs.530"
          price="477"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190436355-KING%20BACON.webp"
          title="Crispy chicken burger"
          cutPrice="Rs.430"
          price="417"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191547003-CHICKEN%20BBQ.webp"
          title="BBQ chicken burger"
          cutPrice="Rs.590"
          price="577"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191318258-KOREAN%20CHILLY.webp"
          title="Classic chicken burger"
          cutPrice="Rs.340"
          price="306"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191318258-KOREAN%20CHILLY.webp"
          title="Korean chilly burger"
          cutPrice="Rs.530"
          price="377"
        />
      </div>
    </>
  );
};

export default One;
