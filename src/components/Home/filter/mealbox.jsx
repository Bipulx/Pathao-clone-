import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Two = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp"
          title="Hungry man meal"
          cutPrice="Rs.530"
          price="477"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp"
          title="King Bacon Grillled Chicken Meal"
          cutPrice="Rs.490"
          price="441"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp"
          title="Crispy Chicken Meal"
          cutPrice="Rs.460"
          price="412"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp"
          title="BBQ Chicken Meal"
          cutPrice="Rs.460"
          price="441"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp"
          title="Classic Chicken Spicy Meal"
          cutPrice="Rs.530"
          price="477"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp"
          title="Korean Chilly Meal"
          cutPrice="Rs.530"
          price="477"
        />
      </div>
    </>
  );
};

export default Two;
