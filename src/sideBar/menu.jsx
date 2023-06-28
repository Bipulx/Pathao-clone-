import React, { useState } from "react";
import "./menu.css";
import { RxCross2 } from "react-icons/rx";
const Menu = () => {
  const [close, setClose] = useState(true);

  function closeHandle() {
    setClose(false);
  }
  return (
    <>
      {close && (
        <div className="container">
          <div className="sidebar active">
            <div className="text_close">
              <h1>My Cart</h1>
              <h2>
                <RxCross2 className="cross" onClick={closeHandle} size={22} />
              </h2>
            </div>
            <div className="icon_info">
              <img
                src="https://nova-foods.s3.ap-south-1.amazonaws.com/emptycart.png"
                alt=""
              />
              <h2>Cart is Empty</h2>
              <p>add item to get started</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
