import React from "react";
import "./OrderPizzaDetails.css";

export default function OrderPizzaDetails() {
  return (
    <div className="pizza-details">
      <div className="form-banner">
        <img src="./Assets/mile2-aseets/pictures/form-banner.png" />
      </div>
      <div className="header-homepage">
        <div className="homepage">
          <span>
            <a href="/">Anasayfa</a> - Seçenekler -
          </span>
          <span className="bold-text"> Sipariş Oluştur</span>
        </div>
      </div>
      <h2>Position Absolute Acı Pizza</h2>

      <div className="fiyat">
        <h3>85.50₺</h3>
        <p>4.9</p>
        <p>(200)</p>
      </div>
      <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
  );
}
