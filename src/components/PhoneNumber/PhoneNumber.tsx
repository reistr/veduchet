import React from "react";

interface Props {
  className?: string;
}

export const PhoneNumber: React.FC<Props> = ({ className }) => (
  <a
    className={className}
    href={`tel:${process.env.GATSBY_CONTACT_PHONE_NUMBER}`}
  >
    {process.env.GATSBY_CONTACT_PHONE_TEXT}
  </a>
);
