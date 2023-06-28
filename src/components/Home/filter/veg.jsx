import React from "react";
import Card from "./ItemCard";
import "../../../Resturants/mealboxOne.css";
const Veg = () => {
  return (
    <>
      <div className="home_section meal-sec">
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064727840-Chutney%20Paneer%20Tikka.webp"
          title="Paneer tikka"
          cutPrice="Rs.350"
          price="Rs.315"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064559479-paneer%20pakoda.jpg"
          title="Paneer pakoda"
          cutPrice="Rs.349"
          price="Rs.314"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682065300296-Tandoori%20Mushroom.webp"
          title="Tandoori mushroom"
          cutPrice="Rs.310"
          price="Rs.279"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064380986-Bharwan%20Mushroom.webp"
          title="Chatpata mushroom"
          cutPrice="Rs.310"
          price="Rs.279"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673618011582-Chips%20Chilli.webp"
          title="Chips chilli"
          cutPrice="Rs.300"
          price="Rs.270"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617866979-Mustang%20Aloo.webp"
          title="Mustang Alo"
          cutPrice="Rs.299"
          price="Rs.270"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617271398-Mushroom%20Chilli.webp"
          title="Mushroom chilli"
          cutPrice="Rs.299"
          price="Rs.270"
        />
        <Card
          src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1673617575848-Potato%20Wedges.webp"
          title="Wedges potato"
          cutPrice="Rs.299"
          price="Rs.270"
        />
      </div>
    </>
  );
};

export default Veg;
