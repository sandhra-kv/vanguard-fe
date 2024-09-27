import React from "react";
import Button from "./Button";
import { engagementHistory } from "../constants/dummyData";
import LeadAnalytics from "./LeadAnalytics";

const ActivityInsights = ({}) => {
   return (
      <>
         <div className="bg-[#F7F8FF] px-9 py-6 w-full">
            <div className="text-base text-[#344357] text-center">
               Got something to say? Reach out to make the connection!
            </div>
            <div className="flex gap-3 justify-center items-center pt-3">
               <Button variant="secondary" label="Send email" className="text-base fond-medium text-[#344054]" />
               <Button variant="secondary" label="Call" className="text-base fond-medium text-[#344054]" />
               <Button variant="secondary" label="Schedule meeting" className="text-base fond-medium text-[#344054]" />
            </div>
         </div>
      <div className="px-9 pt-6">
        <div className="relative bg-[#F7F8FF] p-6 max-h-80 overflow-y-auto rounded-xl">
          {engagementHistory?.map((item, index) => (
            <div
              className={`flex space-x-4 relative text-sm ${
                index !== engagementHistory?.length - 1 ? "pb-9 " : ""
              }`}
              id={item?.id}
            >
              <div className="flex shrink-0 ">
                <div className="h-4 w-4 rounded-full bg-[#7F56D9] border-4 border-[#F4EBFF]" />
              </div>
              {index !== engagementHistory.length - 1 && (
                <div className="absolute left-[-8px] top-4 bottom-0 h-full border-l border-gray-200"></div>
              )}
              <div className="flex flex-col">
                <div className="text-gray-700 font-semibold">{item.text}</div>
                <div className="text-gray-500">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
         <LeadAnalytics />
      </>
   );
};

export default ActivityInsights;
