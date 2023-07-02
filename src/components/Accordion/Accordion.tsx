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

  const sign = expanded ? "-" : "+";
  const buttonContent = sign.concat(title ? " " + title : "");

  const handleClick = () => {
    setExpanded((value) => !value);
  };

  return (
    <div className="accordion">
      <button className="accordion__clickable" onClick={handleClick}>
        {buttonContent}
      </button>
      <div
        className={"accordion__collapsible"}
        style={{ height: collapsibleHeight + "px" }}
      >
        <div
          ref={wrapperRef}
          style={{
            // Hack for proper height calculation
            display: "flex",
            width: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};