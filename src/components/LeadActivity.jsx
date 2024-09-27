import React, { useState } from "react";
import SidePane from "./SidePane";
import Stepper from "./Stepper";
import Tab from "./Tab";
import ActivityInsights from "./ActivityInsights";
import StatusFlag from "./Table/components/StatusFlag";

const LeadActivity = ({ lead, isOpen, className = "", onClose, openModal }) => {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("Activity Log");

  const steps = [
    {
      isUser: true,
      username: "Jonathon Johns",
      timestamp: "7:43 pm",
      description: "Set a meeting for the 15th of September, 3:00 pm",
    },
    {
      isUser: false,
      username: "Salesgenie",
      description:
        "Sure, I have scheduled a meeting for 30 minutes with @Analese Jonathon on 09/15/24 at 3:00 pm IST. Sure, I have scheduled a meeting for 30 minutes with @Analese Jonathon on 09/15/24 at 3:00 pm IST.",
    },
    {
      isUser: true,
      username: "Jonathon Johns",
      timestamp: "7:46 pm",
      description: "Thank you, please send me a recording lorem ipsum.",
    },
  ];

  const sendMessage = () => {
    if (search.trim().length) console.log(search);
  };

  return (
    <SidePane className={className} isOpen={isOpen} onClose={onClose}>
      <div className="px-9 py-6 flex w-full items-start justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/lead.png" className="h-10 w-10" alt="avatar" />
          <div>
            <div className="flex gap-2 items-center">
              <div className="text-lg text-[#101928] font-medium">
                {lead?.name}
              </div>
              <StatusFlag status={lead?.status} />
            </div>
            <div className="text-lg text-[#475367]">{lead?.jobTitle}</div>
          </div>
        </div>
        <img
          role="presentation"
          className="cursor-pointer"
          onClick={onClose}
          src="/icons/close.svg"
          alt="close"
        />
      </div>
      <Tab
        tabs={["Activity Log", "Insights"]}
        selectedTab={selectedTab}
        onSelect={setSelectedTab}
      />
      <div className="h-[calc(100%-150px)] relative">
        {selectedTab === "Activity Log" ? (
          <>
            <div className="h-[calc(100%-80px)] overflow-y-auto px-9 pt-4">
              <Stepper steps={steps} openModal={openModal} />
            </div>
            <div className="absolute bottom-4 px-9 w-full">
              <div className="relative w-full flex">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="bg-[#F6F6F6] h-[52px] rounded-lg pl-4 pr-[56px] py-2.5 w-full border-0 outline-0"
                  value={search}
                  onChange={(evt) => setSearch(evt.target.value)}
                />

                <img
                  role="presentation"
                  src="/icons/send.svg"
                  alt="send"
                  onClick={sendMessage}
                  className="absolute right-4 top-2.5 cursor-pointer"
                />
              </div>
            </div>
          </>
        ) : (
          <ActivityInsights lead={lead} />
        )}
      </div>
    </SidePane>
  );
};

export default LeadActivity;
