import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Chomin = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1681920808189-IMG_2713.jpg"
          title="Mix chowmein"
          cutPrice="Rs.219"
          price="Rs.190"
        />

        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617830998-Chicken%20Chowmein.webp"
          title="Chicken chowmein"
          cutPrice="Rs.190"
          price="Rs.171"
        />

        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617044424-Buff%20Chowmein.webp"
          title="Buff chowmein"
          cutPrice="Rs.180"
          price="Rs.172"
        />

        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617598667-Egg%20Chowmein.webp"
          title="Egg chomein"
          cutPrice="Rs.140"
          price="Rs.125"
        />

        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617418940-Veg%20Chowmein.webp"
          title="Veg chomein"
          cutPrice="Rs.160"
          price="Rs.144"
        />
      </div>
    </>
  );
};

export default Chomin;
