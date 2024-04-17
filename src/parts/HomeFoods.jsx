import React from "react";
import "./HomeFoods.css";
import food1 from "./pictures/food-1.png";
import food2 from "./pictures/food-2.png";
import food3 from "./pictures/food-3.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HomeIcons from "./HomeIcons";

const foods = [
  ["Terminal Pizza", 4.9, "(200)", "60₺", food1],
  ["Position Absolute Acı Pizza", 4.9, "(928)", "85₺", food2],
  ["useEffect Tavuklu Burger", 4.9, "(462)", "75₺", food3],
];

const HomeFoods = () => {
  return (
    <div className="homefoods-section">
      <div className="homefoods-header">
        <h4>en çopk paketlenen menüler</h4>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div>
          <HomeIcons />
        </div>
        <div className="homefoods-kind">
          {foods.map((food, index) => {
            return (
              <Link key={index} to="/orderpizza" className="homefood-each">
                <img src={food[4]} />
                <h6>{food[0]}</h6>
                <div className="food-kind">
                  <p>{food[1]}</p>
                  <p>{food[2]}</p>
                  <h5>{food[3]}</h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeFoods;
