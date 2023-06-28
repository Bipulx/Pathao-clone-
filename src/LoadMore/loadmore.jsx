import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
// import Cart from "./Cart";
const LoadMore = () => {
  const [show, setShow] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const handleShow = () => {
    setShow(!show);
    console.log("hello");
  };

  const FoodItems = [
    {
      id: 1,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp",
      title: "Bhaktapure Veggie Meal",
      cutPrice: "Rs.340",
      price: "Rs306",
    },
    {
      id: 2,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp",
      title: "King vacon Egg meal",
      cutPrice: "Rs.440",
      price: "Rs396",
    },
    {
      id: 3,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191318258-KOREAN%20CHILLY.webp",
      title: "Classic chicken spicy",
      cutPrice: "Rs.340",
      price: "Rs306",
    },
    {
      id: 4,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190099453-CARAMELISE%20ONION%20VEG.webp",
      title: "Carmolized onion  smas veg",
      cutPrice: "Rs.290",
      price: "Rs.240",
    },
    {
      id: 5,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193724994-Classic%20Chicken.jpg",
      title: "Classic chicken wrap",
      cutPrice: "Rs.250",
      price: "Rs.225",
    },
    {
      id: 6,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680188931458-KOREAN%20CHILLY%20MEAL.webp",
      title: "Korean chilly Meal",
      cutPrice: "Rs.440",
      price: "Rs.396",
    },
    {
      id: 7,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191318258-KOREAN%20CHILLY.webp",
      title: "korean burger meal",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 8,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680194187111-French%20Fries.jpg",
      title: "French fries medium",
      cutPrice: "Rs.200",
      price: "Rs.180",
    },
    {
      id: 9,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193789078-Chicken%20Crispy.jpg",
      title: "Crispy chicken wrap",
      cutPrice: "Rs.250",
      price: "Rs.225",
    },
    {
      id: 10,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193827188-FB%20Special%20Veggie.jpg",
      title: "FB special  Veggie wrap",
      cutPrice: "Rs.230",
      price: "Rs.207",
    },
    {
      id: 11,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp",
      title: "Bhaktapure Veggie Meal",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 12,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189510045-CHICKEN%20TIKKA%20MEAL.webp",
      title: "King bacon Egg burger",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 13,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp",
      title: "Hungry Man Meal",
      cutPrice: "Rs.550",
      price: "Rs.490",
    },
    {
      id: 14,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp",
      title: "Classic chicken meal",
      cutPrice: "Rs.460",
      price: "Rs.416",
    },
    {
      id: 15,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682957356534-ktm%20delight.png",
      title: "Coke(1ltr)",
      price: "Rs.170",
    },
    {
      id: 16,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191547003-CHICKEN%20BBQ.webp",
      title: "BBQ chicken burger",
      cutPrice: "Rs.360",
      price: "Rs.324",
    },
    {
      id: 17,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190207506-BHAKTAPURE%20NON-VEG.webp",
      title: "Bhaktapure Veggie Burger",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 18,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191732038-CHICKEN%20TIKKA%20.webp",
      title: "Chicken Tikka burger",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 19,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189203526-CHICKEN%20BBQ%20MEAL.webp",
      title: "BBQ chicken Meal",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 20,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191679157-HUNGRY%20MAN.webp",
      title: "Hungry man burger",
      cutPrice: "Rs.440",
      price: "Rs.416",
    },
    {
      id: 21,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190436355-KING%20BACON.webp",
      title: "King bacon Grilled chicken",
      cutPrice: "Rs.310",
      price: "Rs.297",
    },
    {
      id: 22,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191254391-CLASSIC%20CHICKEN%20.webp",
      title: "Classic chicken burger",
      cutPrice: "Rs.390",
      price: "Rs.366",
    },
    {
      id: 23,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190207506-BHAKTAPURE%20NON-VEG.webp",
      title: "Bhaktapure Veggie Burger",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 24,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191186101-CRISPY%20CHICKEN.webp",
      title: "Crispy chicken burger",
      cutPrice: "Rs.360",
      price: "Rs306",
    },
    {
      id: 25,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680194231279-Coke.jpg",
      title: "Coke(250ml)",
      cutPrice: "Rs.173",
      price: "Rs.163",
    },
    {
      id: 26,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189961583-GOLDEN%20FRY%20VEG.webp",
      title: "Golden fry Veg burger",
      cutPrice: "Rs.240",
      price: "Rs.206",
    },
    {
      id: 27,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189313430-BHAKTAPURE%20NON-VEG%20MEAL.webp",
      title: "Bhaktapure non-Vegg spicy Meal",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 28,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680188358482-KING%20BACON%20MEAL.webp",
      title: "King bacon Grilled Chicken",
      cutPrice: "Rs.490",
      price: "Rs.441",
    },
    {
      id: 29,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680194144935-French%20Fries.jpg",
      title: "French Fries small",
      cutPrice: "Rs.150",
      price: "Rs.130",
    },
    {
      id: 30,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193757992-Chicken%20Bacon.jpg",
      title: "Chicken bacon wrap",
      cutPrice: "Rs.280",
      price: "Rs.252",
    },
    {
      id: 31,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191623672-BHAKTAPURE%20NON-VEG.webp",
      title: "Bhaktapure non-Veggie spicy",
      cutPrice: "Rs.340",
      price: "Rs.288",
    },
    {
      id: 32,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193685719-Chicken%20Chilly.jpg",
      title: "Chicken chilly wrap",
      cutPrice: "Rs.280",
      price: "Rs.252",
    },
    {
      id: 33,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187404478-GOLDEN%20FRY%20VEG%20MEAL.webp",
      title: "Goldeb fry veg meal",
      cutPrice: "Rs.290",
      price: "Rs.207",
    },
    {
      id: 34,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191623672-BHAKTAPURE%20NON-VEG.webp",
      title: "Carmelized onion smash",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
    {
      id: 35,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189510045-CHICKEN%20TIKKA%20MEAL.webp",
      title: "Chicken Tikka Meal",
      cutPrice: "Rs.440",
      price: "Rs.396",
    },
    {
      id: 36,
      src: "https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680188616458-CRISPY%20CHICKEN%20MEAL.webp",
      title: "Classic chicken spicy Meal",
      cutPrice: "Rs.340",
      price: "Rs.306",
    },
  ];
  return (
    <>
      <h1 className="titles">Popular Items</h1>
      <div className="Items_container">
        {FoodItems.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="box" id={item.id}>
            <div className="image">
              <img src={item.src} alt="Item" />
            </div>
            <div className="off_price">
              <h3>10%off</h3>
            </div>
            <div className="price_info">
              <h4>{item.title}</h4>
              <div className="price_cost">
                <h5>{item.cutPrice}</h5>
                <h4>{item.price}</h4>
              </div>
              {setShow && <Cart />}
            </div>

            <div className="cart_container">
              <button onClick={handleShow}>
                Add to cart
                <h3>
                  <BsCart4 size={15} />
                </h3>
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < FoodItems.length && (
        <button className="btn_load" onClick={loadMoreItems}>
          Show More
        </button>
      )}
    </>
  );
};

export default LoadMore;
