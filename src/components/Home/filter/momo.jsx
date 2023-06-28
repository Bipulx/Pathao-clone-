import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Momo = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617790710-Chicken%20Momo%20Fried.webp"
          title="Chicken fried momo"
          cutPrice="Rs.199"
          price="Rs.180"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1681807623241-ktm%20.jpg"
          title="Veg momo crunchy fried"
          cutPrice="Rs.199"
          price="Rs.180"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617470084-Chicken%20Momo%20Steam.webp"
          title="Chicken momo steam"
          cutPrice="Rs.200"
          price="Rs.190"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617346432-Chicken%20Momo%20Jhol.webp"
          title="Chicken momo JHOL"
          cutPrice="Rs.198"
          price="Rs.171"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617225237-Buff%20Momo%20Fried.webp"
          title="Buff momo fried"
          cutPrice="Rs.189"
          price="Rs.171"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673618139036-Buff%20Momo%20Jhol.webp"
          title="Buff momo JHOL"
          cutPrice="Rs.190"
          price="Rs.167"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617929733-Buff%20Momo%20Steam.webp"
          title="Buff momo steam"
          cutPrice="Rs.179"
          price="Rs.169"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617724769-Veg%20Momo%20Fried.webp"
          title="veg momo fried"
          cutPrice="Rs.170"
          price="Rs.150"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617304642-Veg%20Momo%20Steam.webp"
          title="veg momo steam"
          cutPrice="Rs.169"
          price="Rs.150"
        />
      </div>
    </>
  );
};

export default Momo;
