import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Biryani = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665774489769-Chicken%20Biryani.webp"
          title="Chicken biryani rice"
          cutPrice="RS.360"
          price="Rs.320"
        />

        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665774753049-Paneer%20Biryani.webp"
          title="Paneer biryani rice"
          cutPrice="RS.390"
          price="Rs.360 "
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665774887427-Veg%20Biryani.webp"
          title="Special veg biryani"
          cutPrice="RS.349"
          price="Rs.315"
        />
      </div>
    </>
  );
};

export default Biryani;
