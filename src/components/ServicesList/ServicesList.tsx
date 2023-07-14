import React from "react";
import "./sevicesList.css";
import logo1 from "../../images/services/logo-1.svg";
import logo2 from "../../images/services/logo-2.svg";
import logo3 from "../../images/services/logo-3.svg";
import logo4 from "../../images/services/logo-4.svg";
import logo5 from "../../images/services/logo-5.svg";

const SERVICES = [
  {
    title: "Расчет ЖКУ и капремонта",
    icon: logo1,
  },
  {
    title: "Ведение бухгалтерского и налогового учета",
    icon: logo2,
  },
  {
    title: "Расчет заработной платы",
    icon: logo3,
  },
  {
    title: "Отчетность в контролирующие органы",
    icon: logo4,
  },
  {
    title: "Раскрытие информации в ГИС ЖКХ",
    icon: logo5,
  },
];

interface CardProps {
  icon: string;
  title: string;
}

const ServiceCard: React.FC<CardProps> = ({ title, icon }) => (
  <div className="serviceCard">
    <img src={icon} height="76px" />
    <div className="serviceCard__title">{title}</div>
  </div>
);

export const ServicesList: React.FC = () => {
  return (
    <div className="serviceList">
      {SERVICES.map((s, i) => (
        <ServiceCard key={i} icon={s.icon} title={s.title} />
      ))}
    </div>
  );
};
