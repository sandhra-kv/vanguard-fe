import React, { useState } from "react";
import SidePane from "./SidePane";
import Stepper from "./Stepper";
import Tab from "./Tab";
import ActivityInsights from "./ActivityInsights";

const LeadActivity = ({ lead, isOpen, className = "", onClose,openModal }) => {
   const [search, setSearch] = useState("");
   const [selectedTab, setSelectedTab] = useState("Activity Log");

   const getStatusClass = (status) => {
      switch (status) {
         case "Luke Warm":
            return "bg-[#F0F9FF] text-[#026AA2]";
         case "Warm":
            return "bg-[#FEF6E7] text-[#865503]";
         case "Hot":
            return "bg-[#E7F6EC] text-[#036B26]";
         case "Cold":
            return "bg-[#FFECE5] text-[#AD3307]";
         default:
            return "";
      }
   };

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
                  <div className="flex gap-2">
                     <div className="text-lg text-[#101928] font-medium">{lead?.name}</div>
                     <div
                        className={`rounded-[16px] py-[2px] px-2.5 text-sm font-medium ${getStatusClass(lead?.status)}`}
                     >
                        {lead?.status}
                     </div>
                  </div>
                  <div className="text-lg text-[#475367]">{lead?.job_title}</div>
               </div>
            </div>
            <img role="presentation" className="cursor-pointer" onClick={onClose} src="/icons/close.svg" alt="close" />
         </div>
         <Tab tabs={["Activity Log", "Insights"]} selectedTab={selectedTab} onSelect={setSelectedTab} />
         <div className="h-[calc(100%-145px)] relative">
            <div className="h-[calc(100%-250px)] overflow-y-auto">
               {selectedTab === "Activity Log" ? <Stepper steps={steps} openModal={openModal} /> : <ActivityInsights />}
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
         </div>
      </SidePane>
   );
};

export default LeadActivity;
