import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { PageHead } from "../components/Seo";
import { Page } from "../components/Page";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Page>
      <section className="section">
        <h2 style={headingStyles}>Страница не найдена</h2>
        <p style={paragraphStyles}>
          Извините, запрошенная страница не существует.
          <br />
        </p>
        <Link to="/">Перейти на главную страницу</Link>.
      </section>
    </Page>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <PageHead title="Не найдено" />;
