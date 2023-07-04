import React from "react";

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
    <div style={{ textAlign: "center", userSelect: "none", marginTop: "20px" }}>
      {title}
    </div>
  </div>
);

const SERVICES_STUB = new Array(5).fill("Услуги");

export const ServicesList: React.FC = () => {
  return (
    <div
      style={{ display: "flex", gap: "5px", justifyContent: "space-between" }}
    >
      {SERVICES_STUB.map((s, i) => (
        <ServiceCard key={i} icon={<IconStub />} title={s} />
      ))}
    </div>
  );
};
