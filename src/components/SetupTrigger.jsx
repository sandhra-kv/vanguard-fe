import Button from "./Button";
import ToggleSwitch from "./ToggleButton";

const SetupTriggers = () => {
   return (
      <section className="px-10 gap-8 flex flex-col bg-white py-7 border border-[#E4E7EC] rounded-b-xl ">
         <div className="flex  px-16 gap-36">
            <div className="flex flex-col gap-3 justify-center w-1/2">
               <h1 className="font-medium mb-2">External Event Triggers</h1>
               <div className="flex justify-between ">
                  <span>Funding Announcements</span>
                  <ToggleSwitch />
               </div>
               <div className="flex justify-between">
                  <span>Competior Actions</span>
                  <ToggleSwitch />
               </div>
            </div>
            <div className="flex flex-col gap-3  w-1/2">
               <h1 className="font-medium mb-2">Lead Behavior Triggers</h1>
               <div className="flex justify-between">
                  <span>Website Activity</span>
                  <ToggleSwitch />
               </div>
               <div className="flex justify-between">
                  <span>Content Engagement</span>
                  <ToggleSwitch />
               </div>
            </div>
         </div>
         <div className="flex flex-col gap-3 px-16  w-full">
            <h1 className="font-medium mb-2">Custom Triggers</h1>
            <select
               name="Trigger Type"
               id="Trigger Type"
               className="h-14 bg-white text-[#98A2B3] border rounded-md pl-5"
            >
               <option value="Select Trigger Type">Select Trigger Type</option>
               <option value="Trigger Type">Trigger Type</option>
               <option value="Trigger Type">Trigger Type</option>
            </select>
            <input
               type="text"
               className="h-14 w-full bg-white text-[#98A2B3] border rounded-md pl-5 "
               placeholder="Enter condition (e.g. Visited pricing page)"
            />
            <select name="action" id="action" className="h-14 bg-white text-[#98A2B3] border rounded-md pl-5">
               <option value="Select Action">Select Action</option>
               <option value="action">action</option>
               <option value="action">action</option>
            </select>
            <div >
               <Button label="Create Campaigns" variant="primary" icon="/icons/rounded-plus.svg" />
            </div>
         </div>
      </section>
   );
};
export default SetupTriggers;
