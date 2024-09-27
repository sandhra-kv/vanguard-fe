import React from "react";

const OptionSelector = ({ options, onSelect, selectedOption }) => {
  const handleOptionClick = (option) => {
    onSelect(option);
  };

  const renderOption = (option) => (
    <div
      className={`w-full rounded-md p-4 text-sm ${
        selectedOption === option
          ? "border border-[#F5F6FF] bg-[#F5F6FF] text-black"
          : "border border-[#F0F2F5] bg-white text-[#344054]"
      }`}
    >
      {option}
    </div>
  );

  return (
    <div className="flex w-full gap-4">
      {options?.map((option) => (
        <button
          key={option.id}
          onClick={() => handleOptionClick(option)}
          className="w-1/4"
        >
          {renderOption(option)}
        </button>
      ))}
    </div>
  );
};

export default OptionSelector;
