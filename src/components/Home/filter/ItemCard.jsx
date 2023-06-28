import React from "react";
import "../../../Resturants/foodCard.css";
const ItemCard = ({ src, title, cutPrice, price }) => {
  return (
    <>
      <div className="thali_container">
        <div className="food_MealBox item">
          <img src={src} alt="" />
          <div className="price_tag">
            <h3>{title}</h3>
            <div className="price_list">
              <h2>{cutPrice}</h2>
              <h3>{price}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
