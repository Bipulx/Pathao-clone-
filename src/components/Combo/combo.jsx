import React from "react";
import "./combo.css";
const Combo = () => {
  return (
    <>
      <h1 style={{ marginLeft: "2rem" }}>Combo Meal</h1>
      <div className="combo_container">
        <div className="combo_one">
          <div className="img_div">
            <img
              src="https://lh3.googleusercontent.com/QL4BAQZhh7JBVix4cJ0Ivu-zMoMfwJB-dsFyTAY5g8SZlhayl43457wC8O8HJdGB77v6YlgIttaklSkpD9dBHUEN40nCNgES4pM2cUEHhA"
              alt=""
            />
          </div>
          <div className="combo_info">
            <h2>Chicken Wings combo pack(18pcs)</h2>
            <div className="box_info">
              <p>Barbeque chicken wings X3</p>
              <p>Buffalo</p>
              <p>WingsX3</p>
              <p>Coke(1ltr)</p>
            </div>
            <h3 className="price_tag">Rs.999</h3>
          </div>
        </div>
        <div className="combo_one">
          <div className="img_div">
            <img
              src="https://lh3.googleusercontent.com/uZSzCSajpCyZhFwZ-hteq2zG-nX0RvHAHvUylFvjylfLEKrN_uayWUxOuCkU7Bs-Vt6nZrxn4_qAhbMZT8DYJsvss-C_6XWIAt0nHyM"
              alt=""
            />
          </div>
          <div className="combo_info">
            <h2>Special chicken combo @1099</h2>
            <div className="box_info">
              <p>Chicken biryani</p>
              <p>Chicken momo</p>
              <p>Steam</p>
              <p>Buffalo wings</p>
              <p>Classic</p>
            </div>
            <h3 className="price_tag">Rs.1099</h3>
          </div>
        </div>
        <div className="combo_one combo_three">
          <div className="img_div">
            <img
              src="https://lh3.googleusercontent.com/1nb6pBStwcKcD2sm0vG8IsOk90duLUhFBd7gOHULgNTeZ7Vdkuc9-kvNccMcYnV1iTJ7rzGM_BeCgu9TtOTtvpmFHa9SWom2ZPqymqA"
              alt=""
            />
          </div>
          <div className="combo_info">
            <h2>Ultimate family pack</h2>
            <div className="box_info">
              <p>Classic chicken burger X4</p>
              <p>French</p>
              <p>Fries small X4</p>
              <p>Coke(1ltr)</p>
            </div>
            <h3 className="price_tag">Rs.999</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combo;
