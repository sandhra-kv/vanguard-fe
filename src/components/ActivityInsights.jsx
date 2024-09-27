import React from "react";
import Button from "./Button";

const ActivityInsights = ({}) => {
  return (
    <>
      <div className="bg-[#F7F8FF] px-9 py-6 w-full">
        <div className="text-base text-[#344357] text-center">
          Got something to say? Reach out to make the connection!
        </div>
        <div className="flex gap-3 justify-center items-center pt-3">
          <Button
            variant="secondary"
            label="Send email"
            className="text-base fond-medium text-[#344054]"
          />
          <Button
            variant="secondary"
            label="Call"
            className="text-base fond-medium text-[#344054]"
          />
          <Button
            variant="secondary"
            label="Schedule meeting"
            className="text-base fond-medium text-[#344054]"
          />
        </div>
      </div>
    </>
  );
};

export default ActivityInsights;
