import React from "react";
import "./callbackForm.css";

// https://www.gatsbyjs.com/docs/building-a-contact-form/

export const CallbackForm: React.FC = () => {
  return (
    <form
      className="callbackForm"
      method="post"
      action="#"
      onSubmit={(e) => console.log(e)}
    >
      <h2>Оставить заявку прямо сейчас</h2>
      <p>Закажите обратный звонок и узнайте о всех преимуществах аутсорсинга</p>

      <label className="sr-only" htmlFor="name">
        ФИО
      </label>
      <input
        className="callbackForm__input"
        id="name"
        type="text"
        name="name"
        placeholder="ФИО"
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
      <button type="submit">Позвоните мне</button>
    </form>
  );
};
