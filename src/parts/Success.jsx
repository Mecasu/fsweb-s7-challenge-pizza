import React from "react";
import "./Success.css";
import OrderPizzaHeader from "./OrderPizzaHeader";

export default function Success({ formData, toplam }) {
  return (
    <>
      <OrderPizzaHeader />

      <div className="success-form">
        <div className="success-page">
          <h3>lezzetin yolda</h3>
          <h2>SİPARİŞ ALINDI</h2>
          <hr />
        </div>
      </div>
    </>
  );
}
