import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Menu from "../sideBar/menu";
import Notification from "../sideBar/notification";
import { FaSistrix, FaTags } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiUserCircle, BiShoppingBag } from "react-icons/bi";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [notification, setNotification] = useState(false);

  function Menuclick() {
    setMenu(!menu);
  }
  function NotifyClick() {
    setNotification(!notification);
  }
  return (
    <div className="main_container">
      <div className="navabar_container">
        <div className="img_container">
          <NavLink to="home">
            <img
              src="https://pathao.com/wp-content/uploads/2019/03/Pathao-icon.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="search_container">
          <div className="input">
            <input type="text" placeholder="search Items.." />
            <FaSistrix color="grey" className="search" />
          </div>
          <div className="icons_container">
            <NavLink to="/offer">
              <FaTags className="icon_fa" />
            </NavLink>
            <NavLink to="form">
              <BiUserCircle className="icon_fa" />
            </NavLink>

            <IoIosNotificationsOutline
              onClick={NotifyClick}
              className="icon_fa"
            />
            {notification && <Notification />}

            <BiShoppingBag onClick={Menuclick} className="icon_fa" />
            {menu && <Menu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
