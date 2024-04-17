import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomeBanner = () => {
  return (
    <div className="banner-section">
      <div className="banner-table">
        <div className="banner-bir banner-ortak">
          <h2>Özel Lezzetus</h2>
          <p>Position:Absolute Acı Burger</p>
          <Link className="button" to="/orderpizza">
            SİPARİŞ VER
          </Link>
        </div>
        <div className="banner-ikiparca">
          <div className="banner-iki banner-ortak">
            <h3>Hackathlon Burger Menü</h3>
            <Link className="button" to="/orderpizza">
              SİPARİŞ VER
            </Link>
          </div>
          <div className="banner-uc banner-ortak">
            <h3>
              <span className="red">Çoooook </span>
              <span className="black">hızlı npm gibi kurye</span>
            </h3>
            <Link className="button" to="/orderpizza">
              SİPARİŞ VER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
