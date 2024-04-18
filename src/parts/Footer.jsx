import React from "react";
import "./Footer.css";
import address from "./footer/icons/icon-1.png";
import email from "./footer/icons/icon-2.png";
import number from "./footer/icons/icon-3.png";

const specs = [
  ["341 Londonderry Road, Istanbul Türkiye", address],
  ["aciktim@teknolojikyemekler.com", email],
  ["+90 216 123 45 67", number],
];
const photos = ["1", "2", "3", "4", "5", "6"];
const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-address">
            <h2>Teknolojik Yemekler</h2>
            {specs.map((data, i) => {
              return (
                <div key={i} className="each-address">
                  <img src={data[1]} />
                  <p>{data[0]}</p>
                </div>
              );
            })}
          </div>
          <div className="footer-about">
            <h3>Sıccacık Menuler</h3>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger </p>
            <p>Position Absolute Acı Burger</p>
          </div>
          <div className="footer-insta">
            <h4>Instagram</h4>
            <div className="footer-insta-each">
              {photos.map((photo, i) => {
                return (
                  <img
                    key={i}
                    src={`../Assets/mile2-aseets/footer/insta/li-${i}.png`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-hr"></div>
      <div className="footer-section">
        <div className="footer-copyright">
          <p>
            {" "}
            <i className="fa-regular fa-copyright"></i> 2024 Teknolojik
            Yemekler.
          </p>
          <i className="fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
