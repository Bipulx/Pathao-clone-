import React, { useRef } from "react";
import "./MealboxOne.css";
import FoodCard from "./foodCard";
const MealboxOne = () => {
  const MealRef = useRef(null);
  const BurgerRef = useRef(null);
  const WrapRef = useRef(null);
  const SideRef = useRef(null);
  const DrinkRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="section_container"></div>
      <div className="main_containers">
        <div className="heading_container">
          <div className="image">
            <div className="box_info">
              <img
                src="https://nova-foods.s3.ap-south-1.amazonaws.com/brands/1680180846331-funky%20buns_02.png"
                alt=""
              />
            </div>
            <div className="text">
              <h2>Funky Buns</h2>
              <p>Burgers, Fries and Wraps</p>
            </div>
          </div>
        </div>
        {/*body */}

        <div className="Body_section">
          <div className="list_name">
            <ul className="ul_list">
              <li onClick={() => scrollToRef(MealRef)}>Value meal</li>
              <li onClick={() => scrollToRef(BurgerRef)}>burgers</li>
              <li onClick={() => scrollToRef(WrapRef)}>wraps</li>
              <li onClick={() => scrollToRef(SideRef)}>sides</li>
              <li onClick={() => scrollToRef(DrinkRef)}>soft-drinks</li>
            </ul>
          </div>

          <hr style={{ marginTop: "3rem" }} />

          <div className="food_list">
            <div ref={MealRef}>
              <h1 className="title">Value meal</h1>

              <div className="home_section">
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187404478-GOLDEN%20FRY%20VEG%20MEAL.webp"
                    title="Golden fry veg meal"
                    cutPrice="Rs.330"
                    price="Rs.279"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp"
                    title="Bhaktapur veggie meal"
                    cutPrice="Rs.340"
                    price="Rs.306"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp"
                    title="Carmelized onion veg meal"
                    cutPrice="Rs.340"
                    price="Rs.306"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp"
                    title="Classsic chicken spicy"
                    cutPrice="Rs.490"
                    price="Rs.440"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680188358482-KING%20BACON%20MEAL.webp"
                    title="King bacon grilled chicken meal"
                    cutPrice="Rs.490"
                    price="Rs.441"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680188616458-CRISPY%20CHICKEN%20MEAL.webp"
                    title="Crispy chicken meal"
                    cutPrice="Rs.441"
                    price="Rs.410"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680188616458-CRISPY%20CHICKEN%20MEAL.webp"
                    title="Classic chicken meal"
                    cutPrice="Rs.450"
                    price="Rs.409"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680188931458-KOREAN%20CHILLY%20MEAL.webp"
                    title="Korean chilly meal"
                    cutPrice="Rs.440"
                    price="Rs.396"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp"
                    title="King bacon egg Meal"
                    cutPrice="Rs.420"
                    price="Rs.302"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680187737392-BHAKTAPURE%20NON-VEG%20MEAL.webp"
                    title="BBQ chicken meal"
                    cutPrice="Rs.440"
                    price="Rs.410"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189313430-BHAKTAPURE%20NON-VEG%20MEAL.webp"
                    title="Bhaktapur non-veg meal"
                    cutPrice="Rs.479"
                    price="Rs.432"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189423813-HUNGRY%20MAN%20MEAL.webp"
                    title="Hungry man meal"
                    cutPrice="Rs.430"
                    price="Rs.396"
                  />
                </div>
              </div>
            </div>

            <div ref={BurgerRef}>
              <h2 className="title">Burgers</h2>
              <div className="Rice_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680189961583-GOLDEN%20FRY%20VEG.webp"
                    title="Golden fry veg burger"
                    cutPrice="Rs.230"
                    price="Rs.207"
                  />
                </div>

                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190099453-CARAMELISE%20ONION%20VEG.webp"
                    title=""
                    cutPrice="Rs.179"
                    price="Rs.162"
                  />
                </div>

                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190099453-CARAMELISE%20ONION%20VEG.webp"
                    title="Carmelized onion veg burger"
                    cutPrice="Rs.240"
                    price="Rs.216"
                  />
                </div>

                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190099453-CARAMELISE%20ONION%20VEG.webp"
                    title="Bhaktapur veggie burger"
                    cutPrice="Rs.240"
                    price="Rs.216"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190207506-BHAKTAPURE%20NON-VEG.webp"
                    title="Chicken classic spicy burger"
                    cutPrice="Rs.290"
                    price="Rs.230"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190436355-KING%20BACON.webp"
                    title="King bacon grilled burger"
                    cutPrice="Rs.360"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191186101-CRISPY%20CHICKEN.webp"
                    title="Crispy chicken burger"
                    cutPrice="Rs.360"
                    price="Rs.324"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191186101-CRISPY%20CHICKEN.webp"
                    title="Classic chicken burger"
                    cutPrice="Rs.320"
                    price="Rs.288"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191318258-KOREAN%20CHILLY.webp"
                    title="Korean chilly burger"
                    cutPrice="Rs.360"
                    price="Rs.306"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190099453-CARAMELISE%20ONION%20VEG.webp"
                    title="King bacon egg burger"
                    cutPrice="Rs.340"
                    price="Rs.304"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190099453-CARAMELISE%20ONION%20VEG.webp"
                    title="BBQ chicken burger"
                    cutPrice="Rs.340"
                    price="Rs.309"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680190099453-CARAMELISE%20ONION%20VEG.webp"
                    title="Bhaktapur non-veg chiily burger"
                    cutPrice="Rs.360"
                    price="Rs.316"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191679157-HUNGRY%20MAN.webp"
                    title="Hungry man burger"
                    cutPrice="Rs.420"
                    price="Rs.360"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680191732038-CHICKEN%20TIKKA%20.webp"
                    title="Chicken tikka burger"
                    cutPrice="Rs.340"
                    price="Rs.306"
                  />
                </div>
              </div>
            </div>

            <div ref={WrapRef}>
              <h2 className="title">Wraps</h2>
              <div className="Rice_section curries_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193685719-Chicken%20Chilly.jpg"
                    title="Chicken chilly wrap"
                    cutPrice="Rs.280"
                    price="Rs.215"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193724994-Classic%20Chicken.jpg"
                    title="Classic Chicken wrap"
                    cutPrice="Rs.280"
                    price="Rs.252"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193724994-Classic%20Chicken.jpg"
                    title="Chicken bacon wrap"
                    cutPrice="Rs.290"
                    price="Rs.240"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193789078-Chicken%20Crispy.jpg"
                    title="Crispy chicken wrap"
                    cutPrice="Rs.310"
                    price="Rs.280"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193789078-Chicken%20Crispy.jpg"
                    title="FB special veggie wrap"
                    cutPrice="Rs.280"
                    price="Rs.215"
                  />
                </div>
              </div>
            </div>

            <div ref={SideRef}>
              <h2 className="title">Sides</h2>
              <div className="Rice_section biryani_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193827188-FB%20Special%20Veggie.jpg"
                    title="French fried small"
                    cutPrice="Rs.150"
                    price="Rs.135"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680193827188-FB%20Special%20Veggie.jpg"
                    title="French fried medium"
                    cutPrice="Rs.200"
                    price="Rs.180"
                  />
                </div>
              </div>
            </div>

            <div ref={DrinkRef}>
              <h2 className="title">Sot-drinks</h2>
              <div className="Rice_section veg_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1680194231279-Coke.jpg"
                    title="Coca-cola 250ml"
                    cutPrice="Rs.70"
                    price="Rs.63"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682957356534-ktm%20delight.png"
                    title="Coca-cola 1ltr"
                    price="Rs.173"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealboxOne;
