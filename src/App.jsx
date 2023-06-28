import "./App.css";
import Navbar from "./navabar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offer from "../src/components/offer";
import Form from "../src/components/form";
import Home from "../src/components/Home/home";

import Footer from "../src/components/footer/footer";
import Loader from "../src/components/loader/loader";

import MealBoxOne from "../src/Resturants/mealboxOne";
import MealBoxTwo from "../src/Resturants/mealboxTwo";

import Combo from "../src/components/Combo/combo";

import Filter from "./components/Home/filterFood";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/form" element={<Form />} />
          <Route path="/mealboxOne" element={<MealBoxOne />} />
          <Route path="/mealboxTwo" element={<MealBoxTwo />} />
          <Route path="/combo" element={<Combo />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </Router>
      {/* <Loader /> */}

      <Footer />
    </>
  );
}

export default App;
