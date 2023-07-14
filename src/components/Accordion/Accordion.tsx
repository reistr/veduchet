import React, { PropsWithChildren, useRef, useState } from "react";
import "./accordion.css";

interface IProps extends PropsWithChildren {
  title: string;
}

export const Accordion: React.FC<IProps> = ({ title, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const collapsibleHeight =
    expanded && wrapperRef.current ? wrapperRef.current.clientHeight : 0;

  const handleClick = () => {
    setExpanded((value) => !value);
  };

  return (
    <div className="accordion">
      <button
        className="accordion__clickable"
        data-testid="accordion-clickable"
        onClick={handleClick}
      >
        <div
          className="clickable__title"
          data-testid="accordion-clickable-title"
        >
          {title}
        </div>
      </button>
      <div
        className={"accordion__collapsible"}
        data-testid="accordion-collapsible"
        style={{ height: collapsibleHeight + "px" }}
      >
        <div
          ref={wrapperRef}
          className={"accordion__container"}
          style={{
            /* Hack for proper height calculation */
            display: "flex",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
