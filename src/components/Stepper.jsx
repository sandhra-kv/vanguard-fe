import React, { useEffect, useState } from "react";
import { getTime, groupByDate } from "../utils/common";

const Stepper = ({ steps, openModal }) => {
  const [messageList, setMessageList] = useState({});

  useEffect(() => {
    const messages = groupByDate(steps);
    setMessageList(messages);
  }, [steps]);
  return Object.keys(messageList).map((messageGroup, groupindex) => (
    <div key={groupindex}>
      <div className="py-4">{messageGroup}</div>
      <div className="space-y-4 relative">
        {messageList[messageGroup].map((step, index) => (
          <div key={index} className="flex items-start space-x-4 relative">
            {/* Avatar with vertical line */}
            <div className="flex-shrink-0 relative ">
              {step?.senderType !== "chatbot" ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src="/images/profilePic.svg"
                  alt={`${step?.senderName} avatar`}
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-blue-500" />
              )}
            </div>
            {/* Vertical line */}
            {index !== messageList[messageGroup].length - 1 && (
              <div className="absolute left-[4px] top-10 bottom-0 h-full border-l border-gray-300 -ml-px"></div>
            )}

            {/* Step Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                {/* Username */}
                <span className="font-medium text-base text-[#101928]">
                  {step?.senderName}
                </span>

                {/* Timestamp */}
                <span className="text-base text-[#8DA0B1]">
                  {getTime(step?.createdAt)}
                </span>
              </div>

              {/* Description with @username highlighted */}
              <p className="mt-1 text-[#344357] text-base">
                {step?.message?.split(" ").map((word, i) =>
                  word.startsWith("@") ? (
                    <span key={i} className="text-[#505BC5]">
                      {word + " "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </p>
              {step?.metaData && Object.keys(step?.metaData)?.length !== 0 && (
                <>
                  <div className="border border-[#F4F5F6] rounded-[8px] p-3 w-full mt-3 shadow-sm">
                    asd
                  </div>
                  <button
                    value="viewDetails"
                    className="px-4 py-2 mt-3 font-semibold h-[36px] rounded-lg text-sm focus:outline-none bg-[#F7F8FF] text-[#505BC5]"
                    onClick={openModal}
                  >
                    View Details
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default Stepper;
