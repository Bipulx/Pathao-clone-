import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Rice = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064797529-Egg%20Fried%20Rice.webp"
          title="Mixed fried rice"
          cutPrice="Rs.220"
          price="Rs.180"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617552559-Chicken%20Fried%20Rice.webp"
          title="Chicken fried rice"
          cutPrice="Rs.230"
          price="Rs.200"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064839371-Sultani%20Jeera%20Rice.webp"
          title="Sultani jeera Rice"
          cutPrice="Rs.180"
          price="Rs.162"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1681815716965-ktm%20.jpg"
          title="Tomato jeera rice"
          cutPrice="Rs.180"
          price="Rs.162"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665758833142-Veg%20Pulao.webp"
          title="Veg pulao"
          cutPrice="Rs.180"
          price="Rs.167"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617184108-Buff%20Fried%20Rice.webp"
          title="Buff fried rice"
          cutPrice="Rs.220"
          price="Rs.172"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617161405-Egg%20Chowmein.webp"
          title="Egg fried rice"
          cutPrice="Rs.220"
          price="Rs.172"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665758759691-Plain%20basmati%20Rice.webp"
          title="Plained basmati rice"
          cutPrice="Rs.130"
          price="Rs.117"
        />
      </div>
    </>
  );
};

export default Rice;
