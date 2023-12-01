import React, { useEffect, useRef, useState } from "react";
import "./banner.css";
import { classNames } from "../../utils/classNames";

const SLOGAN_THRESHOLD = 0.95;
const HEADER_THRESHOLD = 0.7;
const BUTTON_THRESHOLD = 0.95;

const useIntersectionObserver = (
  elementRef: React.MutableRefObject<Element | null>,
  callback: IntersectionObserverCallback
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: [SLOGAN_THRESHOLD, HEADER_THRESHOLD, BUTTON_THRESHOLD],
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
};

interface Props {
  onButtonVisibilityChanged: (value: boolean) => void;
  onButtonClick: () => void;
}

export const Banner: React.FC<Props> = ({
  onButtonVisibilityChanged,
  onButtonClick,
}) => {
  const elementRef = useRef(null);
  const [sloganVisibility, setSloganVisibility] = useState(true);
  const [headerVisibility, setHeaderVisibility] = useState(true);
  const [buttonVisibility, setButtonVisibility] = useState(true);

  const intersectionCallback: IntersectionObserverCallback = ([entry]) => {
    setSloganVisibility(entry.intersectionRatio >= SLOGAN_THRESHOLD);
    setHeaderVisibility(entry.intersectionRatio >= HEADER_THRESHOLD);
    setButtonVisibility(entry.intersectionRatio >= BUTTON_THRESHOLD);
  };

  useEffect(() => {
    onButtonVisibilityChanged(buttonVisibility);
  }, [buttonVisibility]);

  useIntersectionObserver(elementRef, intersectionCallback);

  return (
    <div ref={elementRef} className="banner parallax">
      <div className="banner__main">
        <h2
          className={classNames("banner__slogan", {
            "banner__slogan--hidden": !sloganVisibility,
          })}
        >
          Наша работа - <br />
          ведение учета!
        </h2>
        <h1
          className={classNames("banner__header", {
            "banner__header--hidden": !headerVisibility,
          })}
        >
          Бухгалтерские услуги для УК, ТСЖ, СНТ
        </h1>
      </div>

      <button
        className={classNames("banner__button", {
          "banner__button--hidden": !buttonVisibility,
        })}
        onClick={onButtonClick}
      >
        от <span className="button__price">5000</span> руб.*
      </button>
    </div>
  );
};
