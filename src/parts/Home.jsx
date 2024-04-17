import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import OrderPizzaHeader from "./OrderPizzaHeader";
import HomeBanner from "./HomeBanner";
import HomeFoods from "./HomeFoods";
import Footer from "./Footer";
import HomeIcons2 from "./HomeIcons2";
export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/orderpizza");
  };
  return (
    <>
      <OrderPizzaHeader />
      <div className="home-header">
        <h3>fırsatı kaçırma</h3>
        <h2>KOD ACIKTIRIR</h2>
        <h2>PIZZA, DOYURUR</h2>
        <button id="home-button" data-cy="home-button" onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
      <HomeIcons2 />
      <HomeBanner />
      <HomeFoods />
      <Footer />
    </>
  );
}
