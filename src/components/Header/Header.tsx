import React from "react";
import "./header.css";
import logoTitle from "../../images/logo_title.svg";
import { PhoneNumber } from "../PhoneNumber";

interface IProps {
  onClick: () => void;
}

export const Header: React.FC<IProps> = ({ onClick }) => {
  return (
    <>
      <div />
      <header className="header parallax">
        <div className={"header__title"}>
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
