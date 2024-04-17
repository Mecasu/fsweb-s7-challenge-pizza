import React from "react";
import "./HomeIcons2.css";
import icon1 from "./icons/1.svg";
import icon2 from "./icons/2.svg";
import icon3 from "./icons/3.svg";
import icon4 from "./icons/4.svg";
import icon5 from "./icons/5.svg";
import icon6 from "./icons/6.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const icons = [
  [icon1, "YENİ! Kore"],
  [icon2, "Pizza"],
  [icon3, "Burger"],
  [icon4, "Kızartmalar"],
  [icon5, "Fast food"],
  [icon6, "Gazlı İçecek"],
];

const HomeIcons2 = () => {
  return (
    <div className="icon-section">
      <div className="icon-line">
        {icons.map((data, index) => {
          return (
            <Link key={index} className="each-icon2" to="/orderpizza">
              <img src={data[0]} />
              <p>{data[1]}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeIcons2;
