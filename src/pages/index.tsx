import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { CallbackForm } from "../components/Callback";
import "./default.css";
import { Page } from "../components/Page";

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
  return (
    <>
      <div style={{ width: "100%", minHeight: "50vh" }} />
      <Header />
      <Page>
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
        <CallbackForm />
      </Page>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
