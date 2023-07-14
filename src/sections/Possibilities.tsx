import React from "react";
import { Accordion } from "../components/Accordion";

export const PossibilitiesSection = () => (
  <section className="section-possibilities">
    <h2 className="section-possibilities__header">
      Возможности аутсорсинга для ЖКХ
    </h2>
    <Accordion title="Расчет жилищно-коммунальных услуг и капремонта">
      <ul className="section-possibilities__list">
        <li>Учет начисленных ЖКУ и капремонта в разрезе лицевых счетов;</li>
        <li>Учет показаний индивидуальных и общедомовых счетчиков;</li>
        <li> Учет задолженности собственников ЖКУ;</li>
        <li>
          Претензионная работа с должниками (формирование претензий, исковых
          заявлений);
        </li>
        <li>
          Учет начисленных и уплаченных взносов в фонд капитального ремонта;
        </li>
        <li>
          Формирование и представление отчетности в контролирующие органы;
        </li>
        <li>
          Учет начисления льгот, предоставление сведений в социальную защиту;
        </li>
        <li>Учет задолженности поставщиков и контрагентов;</li>
        <li>Начисление ЖКУ, подготовка квитанций к печати.</li>
      </ul>
    </Accordion>
    <Accordion title="Ведение бухгалтерского и налогового учета">
      <ul className="section-possibilities__list">
        <li>Составление финансовой, бухгалтерской и налоговой отчетности;</li>
        <li>Отправка отчетности;</li>
        <li>Взаиморасчеты с поставщиками и подрядчиками;</li>
        <li>Ведение учета денежных средств;</li>
        <li>Ведение учета товарно-материальных ценностей;</li>
        <li>Взаиморасчеты с подотчетными лицами;</li>
        <li>Начисление заработной платы и налогов;</li>
        <li>Ведение кадрового делопроизводства;</li>
        <li>Учет дебиторской задолженности;</li>
        <li>
          Ведение раздельного учета по целевому финансированию, отчетность по
          капитальному ремонту.
        </li>
      </ul>
    </Accordion>
    <Accordion title="Раскрытие информации в ГИС ЖКХ">
      <ul className="section-possibilities__list">
        <li>Регистрация в ГИС ЖКХ;</li>
        <li>
          Раскрытие информации, согласно действующего законодательства на
          основании Приказа Минкомсвязи России N 74, Минстроя России N 114/пр от
          29.02.2016 (ред. от 16.10.2017)"Об утверждении состава, сроков и
          периодичности размещения информации поставщиками информации в
          государственной информационной системе жилищно-коммунального
          хозяйства".
        </li>
      </ul>
    </Accordion>
  </section>
);
