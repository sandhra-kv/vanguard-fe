import React from "react";

export const CollapsibleMenu = ({
  children,
  isFilterOpen,
  renderLabel = () => "",
  classname = ""
}) => (
  <div>
    {renderLabel()}
    <div
      className={`grid ${
        isFilterOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      } transition-all duration-300,
        ${classname}`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  </div>
);
