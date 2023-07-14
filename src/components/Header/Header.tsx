import React from "react";
import "./header.css";
import { classNames } from "../../utils/classNames";
import logoTitle from "../../images/logo_title.svg";

interface IProps {
  logoVisibility: boolean;
}

export const Header: React.FC<IProps> = ({ logoVisibility }) => {
  return (
    <>
      <div />
      <header className="header parallax">
        <div
          className={classNames("header__title", {
            "header__title--hidden": !logoVisibility,
          })}
        >
          <img src={logoTitle} height="76px" />
        </div>
        <div className="header__phone">8-800-222-9-365</div>
        <button className="header__button" onClick={() => console.log("click")}>
          Кнопка
        </button>
      </header>
    </>
  );
};
