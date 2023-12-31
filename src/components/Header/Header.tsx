import React from "react";
import "./header.css";
import { classNames } from "../../utils/classNames";
import logoTitle from "../../images/logo_title.svg";
import { PhoneNumber } from "../PhoneNumber";

interface IProps {
  logoVisibility: boolean;
  onClick: () => void;
}

export const Header: React.FC<IProps> = ({ logoVisibility, onClick }) => {
  return (
    <>
      <div />
      <header className="header parallax">
        <div
          className={classNames("header__title", {
            "header__title--hidden": !logoVisibility,
          })}
        >
          <img src={logoTitle} alt="Logo" height="76px" />
        </div>
        <PhoneNumber className="header__phone" />
        <button className="header__button" onClick={onClick}>
          Оставить заявку
        </button>
      </header>
    </>
  );
};
