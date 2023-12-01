import React from "react";
import "./header.css";
import logoTitle from "../../images/logo_title.svg";
import { PhoneNumber } from "../PhoneNumber";
import { classNames } from "../../utils/classNames";

interface IProps {
  buttonVisibility: boolean;
  onClick: () => void;
}

export const Header: React.FC<IProps> = ({ buttonVisibility, onClick }) => {
  return (
    <>
      <div />
      <header className="header parallax">
        <div className={"header__title"}>
          <img src={logoTitle} alt="Logo" height="76px" />
        </div>
        <PhoneNumber className="header__phone" />
        <button
          className={classNames("header__button", {
            "header__button--hidden": !buttonVisibility,
          })}
          onClick={onClick}
        >
          Оставить заявку
        </button>
      </header>
    </>
  );
};
