import React from "react";
import { useSiteMetadata } from "./useSiteMetadata";

interface Props extends React.PropsWithChildren {
  title?: string;
  description?: string;
}

export const PageHead: React.FC<Props> = ({ title, description, children }) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata();

  return (
    <>
      <html lang="ru" />
      <title>{title ?? defaultTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />
      {children}
    </>
  );
};
