import React, { PropsWithChildren } from "react";

const pageStyles: React.CSSProperties = {
  backgroundColor: "white",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <main style={pageStyles}>{children}</main>;
};
