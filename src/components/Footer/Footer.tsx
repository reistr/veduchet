import React from "react";
import "./footer.css";
import { PhoneNumber } from "../PhoneNumber";

export const Footer: React.FC = () => {
  return (
    <div className="parallax footer">
      <h2 className="footer__header">Наши контакты:</h2>
      <div className="footer__contacts">
        <PhoneNumber className="footer__link" />
        <a
          className="footer__link"
          href={`mailto:${process.env.GATSBY_CONTACT_EMAIL}`}
        >
          {process.env.GATSBY_CONTACT_EMAIL}
        </a>
      </div>
      <div className="footer__copyright">
        © Copyright 2023. ДистантУчёт - аутсорсинг расчета ЖКУ и ведения
        бухгалтерии.
      </div>
    </div>
  );
};
