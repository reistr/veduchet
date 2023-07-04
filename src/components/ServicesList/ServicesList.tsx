import React from "react";
import "./sevicesList.css";

const IconStub: React.FC = () => (
  <div
    style={{ border: "1px solid var(--text-primary)", padding: "40px 20px" }}
  >
    Icon
  </div>
);

interface CardProps {
  icon: React.ReactNode;
  title: string;
}

const ServiceCard: React.FC<CardProps> = ({ title, icon }) => (
  <div>
    {icon}
    <div className="serviceCard__title">{title}</div>
  </div>
);

const SERVICES_STUB = new Array(5).fill("Услуги");

export const ServicesList: React.FC = () => {
  return (
    <div className="serviceList">
      {SERVICES_STUB.map((s, i) => (
        <ServiceCard key={i} icon={<IconStub />} title={s} />
      ))}
    </div>
  );
};
