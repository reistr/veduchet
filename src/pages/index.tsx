import * as React from "react";
import { useRef, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { CallbackForm } from "../components/Callback";
import { PossibilitiesSection } from "../sections";
import { ServicesList } from "../components/ServicesList";
import { PageHead } from "../components/Seo";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import "./main.css";

import ill1 from "../images/ill_1.jpg";
import ill2 from "../images/ill_2.jpg";

const IndexPage: React.FC<PageProps> = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const [headerButtonVisibility, setHeaderButtonVisibility] = useState(false);

  const onClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  return (
    <>
      <Header onClick={onClick} buttonVisibility={headerButtonVisibility} />
      <article>
        <Banner
          onButtonVisibilityChanged={(v) => setHeaderButtonVisibility(!v)}
          onButtonClick={onClick}
        />
        <div className="main-article">
          <section className="section section__centered">
            <p>
              Жильцы стали хуже платить? Ощущаете потерю доходов? Начните
              экономить! Перейдите на аутсорсинг расчета ЖКУ и ведения
              бухгалтерии!
              <br />
              Мы являемся экспертами рынка ЖКХ с 20 летним стажем и готовы взять
              на себя ведение вашей бухгалтерии, начисление коммунальных услуг,
              сдачу отчетности и обмен данными с ГИС ЖКХ. Доверьте вашу работу
              нам, чтобы снизить расходы больше чем на 25% !
            </p>
            <h2 style={{ marginTop: "8px" }}>Работаем по всей России!</h2>
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
                  Уверенность в начислениях. Мы профессионально и быстро
                  начислим ЖКУ и сформируем квитанции за вас.
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
              <p>Более 20 лет работы в системе ЖКХ, в том числе:</p>
              <ul className="section__list">
                <li>
                  рассчеты с населением (собственники, наниматели) за
                  жилищно-коммунальные услуги;
                </li>
                <li>
                  работа с большими объемами данных (до 40 тыс. лицевых счетов);
                </li>
                <li>рассчеты с юридическими лицами - потребителями ЖКУ.</li>
              </ul>
            </div>
            <img alt="Изображение: профессионализм." src={ill2} />
          </section>

          <section ref={formRef} className="section">
            <CallbackForm />
          </section>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <PageHead />;
