import * as React from "react";
import { useRef, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { CallbackForm } from "../components/Callback";
import { Page } from "../components/Page";
import { PossibilitiesSection } from "../sections";
import { ServicesList } from "../components/ServicesList";
import { PageHead } from "../components/Seo";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import "./default.css";

import ill1 from "../images/ill_1.jpg";
import ill2 from "../images/ill_2.jpg";

const IndexPage: React.FC<PageProps> = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [headerLogoVisibility, setHeaderLogoVisibility] = useState(false);

  const onClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header logoVisibility={headerLogoVisibility} onClick={onClick} />
      <Banner changeLogoVisibility={(v) => setHeaderLogoVisibility(v)} />
      <Page>
        <section className="section">
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
        </section>
        <section className="section">
          <ServicesList />
        </section>
        <section className="section section-illustrated">
          <img alt="Изображение: верные рассчеты." src={ill1} />
          <div>
            <h2>Что мы предлагаем:</h2>
            <ul className="section__list">
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

        <section className="section">
          <PossibilitiesSection />
        </section>

        <section className="section section-illustrated">
          <div>
            <h2>О нас:</h2>
            <ul className="section__list">
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
          <img alt="Изображение: профессионализм." src={ill2} />
        </section>

        <section ref={formRef} className="section">
          <CallbackForm />
        </section>
      </Page>

      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <PageHead />;
