import React, { useState } from "react";
import { CollapsibleMenu } from "./CollapsibleMenu";
import SelectLeadSources from "./SelectLeadSources";

const CampaignSetup = () => {
   const [openSection, setOpenSection] = useState(null);

   const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
   };

   return (
      <div className="campaign-setup">
         {/* Step 1: Select Campaign Objective */}
         <CollapsibleMenu
            isFilterOpen={openSection === "objective"}
            renderLabel={() => (
               <button
                  onClick={() => toggleSection("objective")}
                  className={`flex w-full text-start items-center justify-between py-4 font-medium h-12 bg-white border-[#E4E7EC] p-4 mt-7 ${
                     openSection === "objective" ? "rounded-t-xl border-t border-l border-r" : "rounded-xl border"
                  }`}
               >
                  Select Campaign Objective
                  <img
                     src="/icons/down.svg"
                     alt="arrow"
                     className={`size-3 ${openSection === "objective" ? "rotate-180" : ""}`}
                  />
               </button>
            )}
         >
            <div className="grid grid-cols-4 gap-4 bg-white pt-7 border border-[#E4E7EC] rounded-b-xl">
               <button className="campaign-btn">Lead Nurturing</button>
               <button className="campaign-btn">Cold Outreach</button>
               <button className="campaign-btn">Product Release</button>
               <button className="campaign-btn">Follow-Up</button>
            </div>
         </CollapsibleMenu>
         <CollapsibleMenu
            isFilterOpen={openSection === "lead_sources"}
            renderLabel={() => (
               <button
                  onClick={() => toggleSection("lead_sources")}
                  className={`flex w-full text-start items-center justify-between py-4 font-medium h-12 bg-white border-[#E4E7EC] p-4 mt-7 ${
                     openSection === "lead_sources" ? "rounded-t-xl border-t border-l border-r" : "rounded-xl border"
                  }`}
               >
                  Select Lead Sources
                  <img
                     src="/icons/down.svg"
                     alt="arrow"
                     className={`size-3 ${openSection === "lead_sources" ? "rotate-180" : ""}`}
                  />
               </button>
            )}
         >
            <SelectLeadSources />
         </CollapsibleMenu>
         {/* Step 2: Select Lead Sources */}
      </div>
   );
};

export default CampaignSetup;
