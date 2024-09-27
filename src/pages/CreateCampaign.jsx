import React, { useState } from "react";
import CampaignSetup from "../components/CampaignSetup";
import CampaignTracker from "../components/CampaignTracker";

const CreateCampaign = () => {
  const [openSection, setOpenSection] = useState(null);

   return (
      <div className="p-5">
         <h1 className="text-2xl font-semibold">Create New Campaign</h1>
         <h4 className="text-[#667185] text-sm mt-1">Build stronger relationships with customers</h4>
         <div className="w-full flex gap-3">
            <div className="w-3/4">
               <CampaignSetup openSection={openSection} setOpenSection={setOpenSection}/>
            </div>
            <div className="w-1/4">
               <CampaignTracker  openSection={openSection}/>
            </div>
         </div>
      </div>
   );
};

export default CreateCampaign;
