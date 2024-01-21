import React from "react";
import "./callbackForm.css";

export const CallbackForm: React.FC = () => {
  return (
    <form
      className="callbackForm"
      method="post"
      action={`${process.env.GATSBY_CALLBACK_HANDLER_URL}`}
    >
      <h2>Оставить заявку прямо сейчас</h2>
      <p>Закажите обратный звонок и узнайте о всех преимуществах аутсорсинга</p>
      <p className="callbackForm__accent">
        * точную стоимость услуг рассчитаем после звонка
      </p>
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <label className="sr-only" htmlFor="name">
        ФИО
      </label>
      <input
        className="callbackForm__input"
        id="name"
        type="text"
        name="name"
        placeholder="ФИО"
        required
      />
      <label className="sr-only" htmlFor="phone">
        Телефон
      </label>
      <input
        className="callbackForm__input"
        id="phone"
        type="tel"
        name="phone"
        placeholder="Телефон"
        required
      />
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input
        className="callbackForm__input"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <button className="callbackForm__button" type="submit">
        Позвоните мне
      </button>
    </form>
  );
};
