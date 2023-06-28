import React from "react";
import "./resturants.css";
import { SlArrowRight } from "react-icons/sl";

import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import { NavLink } from "react-router-dom";
const Resturants = () => {
  return (
    <>
      <div className="resturants_container">
        <div className="resturants_list">
          <NavLink to="mealboxOne">
            <div className="resturants_one">
              <div className="image_box">
                <img
                  className="logo_box"
                  src="https://nova-foods.s3.ap-south-1.amazonaws.com/brands/1665747022361-Barbar%20LOGO%20.png"
                  alt=""
                />
              </div>
              <div className="text_box">
                <h1>Bar-Bar indian mealbox</h1>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.8rem",
                  }}
                  className="text_arrow"
                >
                  <p>view proudcts</p>
                  <SlArrowRight color="#e4dfdf" size={19} />
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="mealboxTwo">
            <div className="resturants_two">
              <div className="image_box two"></div>
              <div className="text_box">
                <h1>Funky buns</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.8rem",
                  }}
                  className="text_arrow"
                >
                  <p>view proudcts</p>
                  <SlArrowRight color="#e4dfdf" size={19} />
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="see_all">
          <NavLink style={{ textDecoration: "none" }} to="combo">
            <h2>See All</h2>
          </NavLink>
          <div className="icon">
            <BsArrowLeftCircle />
            <BsArrowRightCircle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturants;
