import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { PageHead } from "../components/Seo";

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
    <main className="main-article">
      <section className="section">
        <h2 style={headingStyles}>Страница не найдена</h2>
        <p style={paragraphStyles}>
          Извините, запрошенная страница не существует.
          <br />
        </p>
        <Link to="/">Перейти на главную страницу</Link>.
      </section>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <PageHead title="Не найдено" />;
