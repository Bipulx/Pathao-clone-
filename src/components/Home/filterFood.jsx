import React, { useState } from "react";
import Burger from "./filter/burger";
import Meal from "./filter/mealbox";
import Wraps from "./filter/wraps";
import Rice from "./filter/rice";
import Momo from "./filter/momo";
import Veg from "./filter/veg";
import Chowmin from "./filter/chowmin";
import Drinks from "./filter/drinks";
import Discount from "./filter/discount";
import Breads from "./filter/breads";
import Desert from "./filter/deserts";
import Biryani from "./filter/biryani";

import Button from "@mui/material/Button";
import "./filterFood.css";

const ItemComponent = ({ id, content }) => {
  // Custom component logic
  return (
    <div>
      <h4>Item ID: {id}</h4>
      <p>{content}</p>
      {/* Add additional components and content here */}
    </div>
  );
};

const App = () => {
  const [activeCheckboxes, setActiveCheckboxes] = useState([]);

  const handleCheckboxChange = (checkboxId) => {
    if (activeCheckboxes.includes(checkboxId)) {
      setActiveCheckboxes(activeCheckboxes.filter((id) => id !== checkboxId));
    } else {
      setActiveCheckboxes([...activeCheckboxes, checkboxId]);
    }
  };

  const handleClearFilter = () => {
    setActiveCheckboxes([]);
  };

  const divs = [
    {
      id: 1,
      title: "Burgers",
      items: [{ id: 1, content: <Burger id={1} content="Item 1" /> }],
    },
    {
      id: 2,
      title: "FB Slides",
      items: [{ id: 2, content: <Wraps id={2} content="Item 2" /> }],
    },
    {
      id: 3,
      title: "Momo",
      items: [{ id: 3, content: <Momo id={3} content="Item 3" /> }],
    },
    {
      id: 4,
      title: "Rice",
      items: [{ id: 4, content: <Rice id={4} content="Item 4" /> }],
    },
    {
      id: 5,
      title: "FB meal box",
      items: [{ id: 5, content: <Meal id={5} content="Item 5" /> }],
    },
    {
      id: 6,
      title: "Veg snacks",
      items: [{ id: 6, content: <Veg id={6} content="Item 6" /> }],
    },
    {
      id: 7,
      title: "Chowmin",
      items: [{ id: 7, content: <Chowmin id={7} content="Item 7" /> }],
    },
    {
      id: 8,
      title: "Soft-drinks",
      items: [{ id: 8, content: <Drinks id={8} content="Item 8" /> }],
    },
    {
      id: 9,
      title: "10% Off",
      items: [{ id: 9, content: <Discount id={9} content="Item 9" /> }],
    },
    {
      id: 10,
      title: "Indian-breads",
      items: [{ id: 10, content: <Breads id={10} content="Item 10" /> }],
    },
    {
      id: 11,
      title: "Biryani",
      items: [{ id: 11, content: <Biryani id={11} content="Item 11" /> }],
    },
    {
      id: 12,
      title: "Deserts",
      items: [{ id: 11, content: <Desert id={11} content="Item 11" /> }],
    },
    // ... other divs ...
  ];

  const filteredItems =
    activeCheckboxes.length > 0
      ? divs
          .filter((div) => activeCheckboxes.includes(div.id))
          .flatMap((div) => div.items)
      : divs.flatMap((div) => div.items);

  return (
    <div className="all_container">
      <div className="box_container">
        <div className="filter">
          <h1>Filter</h1>
          <div>
            <Button onClick={handleClearFilter}>Clear filter</Button>
          </div>
        </div>
        {divs.map((div) => (
          <div className="box_list" key={div.id}>
            <label>
              <input
                type="checkbox"
                checked={activeCheckboxes.includes(div.id)}
                onChange={() => handleCheckboxChange(div.id)}
              />
              {div.title}
            </label>
          </div>
        ))}
      </div>

      <div>
        {filteredItems.map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
