import React from "react";
import "./header.css";
import { classNames } from "../../utils/classNames";
import logoTitle from "../../images/logo_title.svg";

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
        <a
          className="header__phone"
          href={`tel:${process.env.GATSBY_CONTACT_PHONE_NUMBER}`}
        >
          {process.env.GATSBY_CONTACT_PHONE_TEXT}
        </a>
        <button className="header__button" onClick={onClick}>
          Оставить заявку
        </button>
      </header>
    </>
  );
};
