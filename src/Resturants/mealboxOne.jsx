import React, { useRef } from "react";
import "./MealboxOne.css";
import FoodCard from "./foodCard";

const MealboxOne = () => {
  const ThaliRef = useRef(null);
  const RiceRef = useRef(null);
  const CurriesRef = useRef(null);
  const BiryanisRef = useRef(null);
  const VegRef = useRef(null);
  const NonvegRef = useRef(null);
  const BreadsRef = useRef(null);
  const DesertsRef = useRef(null);

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
                src="https://nova-foods.s3.ap-south-1.amazonaws.com/brands/1665747022361-Barbar%20LOGO%20.png"
                alt=""
              />
            </div>
            <div className="text">
              <h2>Bar-Bar indian meals</h2>
              <p>quality indian cusine at affordable prices</p>
            </div>
          </div>
        </div>
        {/*body */}

        <div className="Body_section">
          <div className="list_name">
            <ul className="ul_list">
              <li onClick={() => scrollToRef(ThaliRef)}>
                All-in-One Thali MealBox
              </li>
              <li onClick={() => scrollToRef(RiceRef)}>Rice</li>
              <li onClick={() => scrollToRef(CurriesRef)}>
                Indian Curries 500ml (family pack)
              </li>
              <li onClick={() => scrollToRef(BiryanisRef)}>Biryanis</li>
              <li onClick={() => scrollToRef(VegRef)}>Veg starter</li>
              <li onClick={() => scrollToRef(NonvegRef)}>Non-Veg starter</li>
              <li onClick={() => scrollToRef(BreadsRef)}>Breads</li>
              <li onClick={() => scrollToRef(DesertsRef)}>Deserts</li>
            </ul>
          </div>
          <hr style={{ marginTop: "3rem" }} />

          <div className="food_list">
            <div ref={ThaliRef}>
              <h1 className="title">All-in-One Thali MealBox</h1>

              <div className="home_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="mix veg thali meal"
                    cutPrice="Rs.349"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlJfFKgQ6iXUHC_mEBJcP1xl2XWEbwAlZ-lmaxH4O8e5GZTT6"
                    title="Mushroom Jalferzi Thali Meal"
                    cutPrice="Rs.449"
                    price="Rs.405"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Chicken Jalfrezi Thali Meal"
                    cutPrice="Rs.499"
                    price="Rs.450"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Mughlai Chicken Thali Meal"
                    cutPrice="Rs.499"
                    price="Rs.450"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Chicken Butter Masala Thali meal"
                    cutPrice="Rs.499"
                    price="Rs.450"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Chana Masala Thali Meal"
                    cutPrice="Rs.349"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Daal Makhani Thali Meal"
                    cutPrice="Rs.349"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Rajma Masala Thali Meal"
                    cutPrice="Rs.349"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Paneer Makhani Thali Meal"
                    cutPrice="Rs.479"
                    price="Rs.432"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Paneer Butter Masala Thali meal"
                    cutPrice="Rs.479"
                    price="Rs.432"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRAO6EjJw6v3q1njNznLolMF28Vy1QjZCiINl6mt7TeWksrkBOp"
                    title="Palak Chicken Thali Meal"
                    cutPrice="Rs.479"
                    price="Rs.432"
                  />
                </div>
              </div>
            </div>

            <div ref={RiceRef}>
              <h2 className="title">Rice</h2>
              <div className="Rice_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665758759691-Plain%20basmati%20Rice.webp"
                    title="Plain Basmati Rice"
                    cutPrice="Rs.129"
                    price="Rs.117"
                  />
                </div>

                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064839371-Sultani%20Jeera%20Rice.webp"
                    title="Veg Pulao"
                    cutPrice="Rs.179"
                    price="Rs.162"
                  />
                </div>

                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665758833142-Veg%20Pulao.webp"
                    title="Sultani jeera rice"
                    cutPrice="Rs.180"
                    price="Rs.162"
                  />
                </div>

                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1681815716965-ktm%20.jpg"
                    title="Tomato rice"
                    cutPrice="Rs.180"
                    price="Rs.162"
                  />
                </div>
              </div>
            </div>

            <div ref={CurriesRef}>
              <h2 className="title">Indian Curries 500ml (Family Pack)</h2>
              <div className="Rice_section curries_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665771948086-Chicken%20Jalfrezi.webp"
                    title="Chicken Jalfrezi"
                    cutPrice="Rs.450"
                    price="Rs.405"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665772071141-Mughlai%20Chicken.webp"
                    title="Mughlai Chicken"
                    cutPrice="Rs.450"
                    price="Rs.405"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665772113835-Palak%20Chicken.webp"
                    title="Palak Chicken"
                    cutPrice="Rs.450"
                    price="Rs.405"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665772146282-Butter%20Chicken%20masala.webp"
                    title="Chicken Butter Masala"
                    cutPrice="Rs.450"
                    price="Rs.405"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1681815234582-chana+masala.jpg"
                    title="Chana Masala"
                    cutPrice="Rs.340"
                    price="Rs.303"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064208862-Mix%20Veg.webp"
                    title="Mix Veg(seasonal)"
                    cutPrice="Rs.360"
                    price="Rs.306"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064661215-Mushroom%20Makhni.webp"
                    title="Mushroom Makhani"
                    cutPrice="Rs.400"
                    price="Rs.360"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1681918377395-Dal+Makhni.jpg"
                    title="Daal Makhani Curry"
                    cutPrice="Rs.340"
                    price="Rs.306"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064195866-Rajma%20Masala.webp"
                    title="Rajma Masala"
                    cutPrice="Rs.360"
                    price="Rs.302"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682065153635-Palak%20Paneer.webp"
                    title="palak paneer"
                    cutPrice="Rs.450"
                    price="Rs.405"
                  />
                </div>
              </div>
            </div>

            <div ref={BiryanisRef}>
              <h2 className="title">Biryanis</h2>
              <div className="Rice_section biryani_section">
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665774489769-Chicken%20Biryani.webp"
                    title="Chicken biryani"
                    cutPrice="Rs.399"
                    price="Rs.360"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665774753049-Paneer%20Biryani.webp"
                    title="Paaneer biryani"
                    cutPrice="Rs.399"
                    price="Rs.360"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665774887427-Veg%20Biryani.webp"
                    title="Special veg biryani"
                    cutPrice="Rs.340"
                    price="Rs.310"
                  />
                </div>
              </div>
            </div>

            <div ref={VegRef}>
              <h2 className="title">Veg Starter</h2>
              <div className="Rice_section veg_section">
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1681920296242-Veg%20Pakoda.jpg"
                    title="Veg pakoda"
                    cutPrice="Rs.172"
                    price="Rs.132"
                  />
                </div>

                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064559479-paneer%20pakoda.jpg"
                    title="Paneer pakoda"
                    cutPrice="Rs.345"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064727840-Chutney%20Paneer%20Tikka.webp"
                    title="Paneer Tikka"
                    cutPrice="Rs.350"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682065300296-Tandoori%20Mushroom.webp"
                    title="Tandoori mushroom"
                    cutPrice="Rs.310"
                    price="Rs.279"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064380986-Bharwan%20Mushroom.webp"
                    title="Chatpata Mushroom"
                    cutPrice="Rs.340"
                    price="Rs.310"
                  />
                </div>
              </div>
            </div>

            <div ref={NonvegRef}>
              <h2 className="title">Non-veg starter</h2>
              <div className="Rice_section non-veg_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064727840-Chutney%20Paneer%20Tikka.webp"
                    title="Paneer Tikka"
                    cutPrice="Rs.350"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682065300296-Tandoori%20Mushroom.webp"
                    title="Tandoori Mushoroom"
                    cutPrice="Rs.310"
                    price="Rs.290"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064380986-Bharwan%20Mushroom.webp"
                    title="Chatpata mushroom"
                    cutPrice="Rs.310"
                    price="Rs.279"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064380986-Bharwan%20Mushroom.webp"
                    title="Banjari kebab"
                    cutPrice="Rs.350"
                    price="Rs.315"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1682064316456-Chicken%20Tikka.webp"
                    title="Classic chicken Tikka"
                    cutPrice="Rs.350"
                    price="Rs.315"
                  />
                </div>
              </div>
            </div>

            <div ref={BreadsRef}>
              <h2 className="title">Breads</h2>
              <div className="Rice_section breads_section">
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778707627-Laccha%20Paratha.webp"
                    title="Lacha paratha"
                    cutPrice="Rs.79"
                    price="Rs.69"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="	https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778774926-Aloo%20Paratha.webp"
                    title="Alo paratha"
                    cutPrice="Rs.90"
                    price="Rs.70"
                  />
                </div>
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778757670-Chapati.webp"
                    title="Chapati 2pcs"
                    cutPrice="Rs.50"
                    price="Rs.45"
                  />
                </div>
              </div>
            </div>

            <div ref={DesertsRef}>
              <h2 className="title">Deserts</h2>
              <div className="Rice_section deserts_section">
                <div className="col-span-4">
                  <FoodCard
                    src="https://nova-foods.s3.ap-south-1.amazonaws.com/items/1665778867732-Lal%20Mohan.webp"
                    title="Lal mohan"
                    cutPrice="Rs.79"
                    price="Rs.72"
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
