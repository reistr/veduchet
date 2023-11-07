import React from "react";
import "./footer.css";
import { PhoneNumber } from "../PhoneNumber";

import photo from "../../images/photo.jpg";

export const Footer: React.FC = () => {
  return (
    <div className="parallax footer">
      <h2 className="footer__header">Наши контакты:</h2>
      <div className="footer__container">
        <div className="footer__photo">
          <img alt="Фото руководителя" src={photo} />
          <div className="footer__designation">
            Руководитель: Анисимова Елена Валерьевна <br /> (более 25 лет стажа
            в системе ЖКХ)
          </div>
        </div>
        <div className="footer__contacts">
          <PhoneNumber className="footer__link" />
          <a
            className="footer__link"
            href={`mailto:${process.env.GATSBY_CONTACT_EMAIL}`}
          >
            {process.env.GATSBY_CONTACT_EMAIL}
          </a>
          <div>9:00 - 20:00 (МСК)</div>
        </div>
      </div>
      <div className="footer__copyright">
        © Copyright 2023. ДистантУчёт - аутсорсинг расчета ЖКУ и ведения
        бухгалтерии.
      </div>
    </div>
  );
};
