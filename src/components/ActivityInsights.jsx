import React from "react";
import Button from "./Button";
import { engagementHistory } from "../constants/dummyData";
import LeadAnalytics from "./LeadAnalytics";

import CopyButton from "./CopyButton";

const ActivityInsights = ({ lead }) => {
  return (
    <>
      {/* <div className="bg-[#F7F8FF] px-9 py-6 w-full border-b shadow-sm">
        <div className="text-base text-[#344357] text-center">
          Got something to say? Reach out to make the connection!
        </div>
        <div className="flex gap-3 justify-center items-center pt-3">
          <Button
            variant="secondary"
            label="Send email"
            labelClassName="text-[#344054]"
          />
          <Button
            variant="secondary"
            label="Call"
            labelClassName="text-[#344054]"
          />
          <Button
            variant="secondary"
            label="Schedule meeting"
            labelClassName="text-[#344054]"
          />
        </div>
      </div> */}
      <div className="h-full overflow-auto pb-4">
        <LeadAnalytics />
        <div className="px-9 pt-4">
          <div className="pb-3 border-b border-[#F0F2F5] text-base text-[#344357] font-medium">
            Lead Information
          </div>
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/email.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">Email</div>
              <div className="text-[#101928]">{lead?.email}</div>
            </div>
            <CopyButton content={lead?.email} />
          </div>
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/phone.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">Phone Number</div>
              <div className="text-[#101928]">08168141116</div>
            </div>
            <CopyButton content="08168141116" />
          </div>
          <div className="w-[360px] h-[1px] bg-[#F0F2F5] ml-[60px]" />
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/location.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">Location</div>
              <div className="text-[#101928]">{lead?.location}</div>
            </div>
            <CopyButton content={lead?.location} />
          </div>
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/url.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">LinkedIn</div>
              <div className="text-[#505BC5]">Affiliate/rayna-38ndl</div>
            </div>
            <CopyButton content="Affiliate/rayna-38ndl" />
          </div>
        </div>
        <div className="px-9 pt-4">
          <div className="pb-3 border-b border-[#F0F2F5] text-base text-[#344357] font-medium">
            Company Details
          </div>
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/users.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">Name</div>
              <div className="text-[#101928]">{lead?.company}</div>
            </div>
            <CopyButton content={lead?.company} />
          </div>
          <div className="w-[360px] h-[1px] bg-[#F0F2F5] ml-[60px]" />
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/industry.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">Industry</div>
              <div className="text-[#101928]">Retail</div>
            </div>
            <CopyButton content="Retail" />
          </div>
          <div className="w-[360px] h-[1px] bg-[#F0F2F5] ml-[60px]" />
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/users.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">Headcount</div>
              <div className="text-[#101928]">400-500</div>
            </div>
            <CopyButton content="Salt Lake City, Utah, US" />
          </div>
          <div className="w-[360px] h-[1px] bg-[#F0F2F5] ml-[60px]" />
          <div className="px-4 py-[14px] flex items-center gap-6">
            <img src="/icons/url.svg" alt="email" />
            <div className="w-full text-sm">
              <div className="text-[#475467] pb-1">Website</div>
              <div className="text-[#505BC5]">https://www.titancompany.in/</div>
            </div>
            <CopyButton content="https://www.titancompany.in/" />
          </div>
          <div className="w-[360px] h-[1px] bg-[#F0F2F5] ml-[60px]" />
        </div>
        <div className="px-9 pt-6">
          <div className="pb-3 text-base text-[#344357] font-medium">
            Engagement History
          </div>
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
      </div>
    </>
  );
};

export default ActivityInsights;
