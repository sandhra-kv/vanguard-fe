import cx from "classnames";
import Button from "./Button";

const CampaignTracker = ({ openSection }) => {
   const campaignTrackerList = [
      {
         key: "objective",
         label: "Select Campaign Objective",
      },
      {
         key: "lead_sources",
         label: "Select Lead Sources",
      },
      {
         key: "sequence",
         label: "Create your sequence",
      },
      {
         key: "setup_triggers",
         label: "Setup Trigger-Based Plays",
      },
      {
         key: "review",
         label: "Review",
      },
   ];
   return (
      <section className="my-7 bg-white border border-[#E4E7EC] flex  flex-col justify-between rounded-xl px-4 py-7  h-[700px]">
         <div className="flex flex-col gap-3">
            {campaignTrackerList.map((field, index) => {
               return (
                  <div key={index} className="flex gap-2 items-center">
                     <div
                        className={cx("size-12 rounded-full border text-center content-center", {
                           "bg-[#505BC5] text-white border-none": openSection === field.key,
                           " text-[#98A2B3] ": openSection !== field.key,
                        })}
                     >
                        {index + 1}
                     </div>
                     <span>{field.label}</span>
                  </div>
               );
            })}
         </div>
         <div className="flex gap-1">
            <Button onClick={() => {}} label="Save as draft" variant="secondary" />
            <Button onClick={() => {}} label="Review Grant" variant="primary" />
         </div>
      </section>
   );
};
export default CampaignTracker;
