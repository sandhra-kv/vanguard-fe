import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-fit relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div>{children}</div>
        <div className="absolute top-5 right-5">
          <img
            src="/icons/close.svg"
            alt="close"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
