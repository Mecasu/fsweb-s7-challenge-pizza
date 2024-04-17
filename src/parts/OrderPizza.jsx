import React from "react";
import "./OrderPizza.css";
import OrderPizzaHeader from "./OrderPizzaHeader";
import OrderPizzaDetails from "./OrderPizzaDetails";
import OrderPizzaOptions from "./OrderPizzaOptions";
import Footer from "./Footer";
export default function OrderPizza({ dataFn }) {
  return (
    <>
      <OrderPizzaHeader />
      <div className="pizza-container">
        <div className="pizza-content">
          <OrderPizzaDetails />
          <OrderPizzaOptions dataFn={dataFn} />
        </div>
      </div>
      <Footer />
    </>
  );
}
