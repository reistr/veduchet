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

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

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
        <div style={{ maxWidth: "50%" }} className="section">
          <h2>Что вы получите:</h2>
          <ul>
            <li>
              Уверенность в начислениях. Мы профессионально и быстро начислим
              ЖКУ и сформируем квитанции за вас.
            </li>
            <li>
              Спокойствие за правильный расчет налогов. При этом мы постараемся
              максимально снизить налоговую нагрузку на вашу организацию
              законным образом.
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

        <div style={{ maxWidth: "80%" }} className="section">
          <PossibilitiesSection />
        </div>

        <div style={{ maxWidth: "50%" }} className="section">
          <h1 style={headingStyles}>
            Congratulations
            <br />
            <span style={headingAccentStyles}>
              — you just made a Gatsby site! 🎉🎉🎉
            </span>
          </h1>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
          <p style={paragraphStyles}>
            Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this
            page update in real-time. 😎
          </p>
        </div>
        <CallbackForm />
      </Page>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
