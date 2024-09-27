import React from "react";
import { useEffect } from "react";

const SidePane = ({ children, title, isOpen, className = "", onClose }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) document.body.style.overflow = "unset";
      else if (isOpen) document.body.style.overflow = "hidden";
    };

    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed right-0 bottom-0 z-20 h-[calc(100vh-64px)] w-[529px] overflow-y-auto bg-white shadow-lg transition-transform duration-300 ease-in-out  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SidePane;
