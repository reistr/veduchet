import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { classNames } from "../../utils/classNames";

export const Header: React.FC = () => {
  const elementRef = useRef(null);

  const [introVisible, setIntroVisible] = useState(false);

  const intersectionCallback: IntersectionObserverCallback = ([entry]) => {
    setIntroVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
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
    <>
      <div ref={elementRef} />
      <header className={introVisible ? "header" : "header header--scrolled"}>
        <h1
          className={classNames("header__title", {
            "header__title--scrolled": !introVisible,
          })}
        >
          Учет ЖКУ
        </h1>
        <div className="header__phone">8-800-222-9-365</div>
      </header>
    </>
  );
};
