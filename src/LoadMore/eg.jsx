import React, { useState } from "react";
import "./load.css";
const items = [
  {
    id: 1,
    text: "Item 1",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 2,
    text: "Item 2",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 3,
    text: "Item 3",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 4,
    text: "Item 4",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 5,
    text: "Item 5",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 6,
    text: "Item 6",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 7,
    text: "Item 7",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 8,
    text: "Item 8",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 9,
    text: "Item 9",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
  {
    id: 10,
    text: "Item 10",
    src: "https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg",
  },
];

const App = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <div className="box_container">
      {items.slice(0, visibleItems).map((item) => (
        <div key={item.id} className="box">
          <div className="image">
            <img src={item.src} alt="Item" />
          </div>
          <div>{item.text}</div>
        </div>
      ))}
      {visibleItems < items.length && (
        <button onClick={loadMoreItems}>Load More</button>
      )}
    </div>
  );
};

export default App;

/*.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.container .heading {
  font-size: 40px;
  margin-bottom: 20px;
  color: azure;
}

.box_container {
  display: grid;
 
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.image img {
  height: 100px;
  width: 100px;
}


*/
