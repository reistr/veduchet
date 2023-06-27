import React from "react";

// https://www.gatsbyjs.com/docs/building-a-contact-form/

export const CallbackForm: React.FC = () => {
  return (
    <form method="post" action="#">
      <h2>Остались вопросы? Закажите обратный звонок! </h2>
      <p>Закажите обратный звонок и узнайте о всех преимуществах аутсорсинга</p>
      <label>
        ФИО
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Телефон
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <button type="submit">Позвоните мне</button>
      <input type="reset" value="Очистить" />
    </form>
  );
};
