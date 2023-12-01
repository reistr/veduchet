import React from "react";
import "./banner.css";

export const Banner: React.FC = () => {
  return (
    <div className="banner parallax">
      <div className="banner__main">
        <h2 className={"banner__slogan"}>
          Наша работа - <br />
          ведение учета!
        </h2>
        <h1 className={"banner__header"}>
          Бухгалтерские услуги для УК, ТСЖ, СНТ
        </h1>
      </div>

      <button className="banner__button">
        от <span className="button__price">5000</span> руб.*
      </button>
    </div>
  );
};
