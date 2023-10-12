import React, { useEffect, useRef, useState } from "react";
import "./banner.css";
import logo from "../../images/logo.svg";
import { classNames } from "../../utils/classNames";

const SLOGAN_THRESHOLD = 0.45;
const LOGO_THRESHOLD = 0.9;

interface IProps {
  changeLogoVisibility: (value: boolean) => void;
}

export const Banner: React.FC<IProps> = ({ changeLogoVisibility }) => {
  const elementRef = useRef(null);
  const [sloganVisibility, setSloganVisibility] = useState(true);
  const [logoVisibility, setLogoVisibility] = useState(true);

  const intersectionCallback: IntersectionObserverCallback = ([entry]) => {
    setSloganVisibility(entry.intersectionRatio >= SLOGAN_THRESHOLD);
    setLogoVisibility(entry.intersectionRatio >= LOGO_THRESHOLD);
    changeLogoVisibility(entry.intersectionRatio < LOGO_THRESHOLD);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: "0px",
      threshold: [SLOGAN_THRESHOLD, LOGO_THRESHOLD],
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="banner parallax">
      <div
        className={classNames("banner__logo", {
          "banner__logo--hidden": !logoVisibility,
        })}
      >
        <img src={logo} alt="Logo" height="120" width="120" />
      </div>
      <div
        className={classNames("banner__slogan", {
          "banner__slogan--hidden": !sloganVisibility,
        })}
      >
        <h1>Наша работа - ведение учета!</h1>
        <h2>Бухгалтерские услуги для УК, ТСЖ, СНТ</h2>
      </div>
    </div>
  );
};
