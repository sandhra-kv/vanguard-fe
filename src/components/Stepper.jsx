import React from "react";

const Stepper = ({ steps }) => {
  return (
    <div className="space-y-4 relative">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start space-x-4 relative">
          {/* Avatar with vertical line */}
          <div className="flex-shrink-0 relative ">
            {step.isUser ? (
              <img
                className="h-10 w-10 rounded-full"
                src="/images/profilePic.svg"
                alt={`${step.username} avatar`}
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-blue-500" />
            )}
          </div>
          {/* Vertical line */}
          {index !== steps.length - 1 && (
            <div className="absolute left-[4px] top-10 bottom-0 h-full border-l border-gray-300 -ml-px"></div>
          )}

          {/* Step Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              {/* Username */}
              <span className="font-medium text-base text-[#101928]">
                {step.username}
              </span>

              {/* Timestamp */}
              <span className="text-base text-[#8DA0B1]">{step.timestamp}</span>
            </div>

            {/* Description with @username highlighted */}
            <p className="mt-1 text-[#344357] text-base">
              {step.description.split(" ").map((word, i) =>
                word.startsWith("@") ? (
                  <span key={i} className="text-[#505BC5]">
                    {word + " "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </p>
            <div className="border border-[#F4F5F6] rounded-[8px] p-3 w-full mt-3 shadow-sm">
              asd
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
