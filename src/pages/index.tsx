import * as React from "react";
import { useState } from "react";
import "./default.css";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { CallbackForm } from "../components/Callback";
import { Page } from "../components/Page";
import { Banner } from "../components/Banner/Banner";
import { PossibilitiesSection } from "../sections";
import { ServicesList } from "../components/ServicesList";

import ill1 from "../images/ill_1.jpg";
import ill2 from "../images/ill_2.jpg";

const IndexPage: React.FC<PageProps> = () => {
  const [headerLogoVisibility, setHeaderLogoVisibility] = useState(false);

  return (
    <>
      <Header logoVisibility={headerLogoVisibility} />
      <Banner changeLogoVisibility={(v) => setHeaderLogoVisibility(v)} />
      <Page>
        <div className="section" style={{ maxWidth: "50%" }}>
          <p style={{ textAlign: "center" }}>
            Жильцы стали хуже платить? Ощущаете потерю доходов? Начните
            экономить! Перейдите на аутсорсинг расчета ЖКУ и ведения
            бухгалтерии!
            <br />
            <br />
            Мы являемся экспертами рынка ЖКХ с 10 летним стажем и готовы взять
            на себя ведение вашей бухгалтерии, начисление коммунальных услуг,
            сдачу отчетности и обмен данными с ГИС ЖКХ. Доверьте вашу работу
            нам, чтобы снизить расходы больше чем на 25% !
          </p>
        </div>
        <div style={{ maxWidth: "60%" }} className="section">
          <ServicesList />
        </div>
        <section
          style={{ maxWidth: "60%" }}
          className="section section-illustrated"
        >
          <img src={ill1} />
          <div>
            <h2>Что мы предлагаем:</h2>
            <ul>
              <li>
                Уверенность в начислениях. Мы профессионально и быстро начислим
                ЖКУ и сформируем квитанции за вас.
              </li>
              <li>
                Спокойствие за правильный расчет налогов. При этом мы
                постараемся максимально снизить налоговую нагрузку на вашу
                организацию законным образом.
              </li>
              <li>
                Значительную экономию на бухгалтерском учете и расчете
                коммунальных услуг. Посмотрите наши тарифы, чтобы лучше понять
                выгоду аутсорсинга.
              </li>
              <li>
                Бесперебойную работу бухгалтерии. Нам не нужен отпуск или
                больничный и мы всегда подходим к нашей работе ответственно.
              </li>
            </ul>
          </div>
        </section>

        <div style={{ maxWidth: "60%" }} className="section">
          <PossibilitiesSection />
        </div>

        <section
          style={{ maxWidth: "60%" }}
          className="section section-illustrated"
        >
          <div>
            <h2>О нас:</h2>
            <ul>
              <li>10 лет опыта расчета ЖКУ и учета в ЖКХ.</li>
              <li>
                Мы помогаем нашим клиентам. Не только ведем учет, но и ежедневно
                консультируем и оказываем экспертную поддержку.
              </li>
              <li>
                Тысячи часов консультаций. Каждый день консультируем сотни
                организаций по расчету ЖКУ, выгрузки данных в ГИС, бухучету.
              </li>
              <li>
                Делаем «под ключ». Готовы взять на себя функции расчетного
                центра, решать все необходимые задачи и предоставлять только
                качественные услуги.
              </li>
            </ul>
          </div>
          <img src={ill2} />
        </section>

        <div style={{ maxWidth: "60%" }} className="section">
          <CallbackForm />
        </div>
      </Page>
      <div style={{ minHeight: "40vh", opacity: "0" }}></div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ДистантУчёт</title>;
