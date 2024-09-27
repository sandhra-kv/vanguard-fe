const Review = () => {
   const options = [
      {
         key: "objective",
         label: "Select Campaign Objective",
         desc: "Campaign summary will be displayed here",
      },
      {
         key: "lead_sources",
         label: "Select Lead Sources",
         desc: "Selected Lead Sources will be displayed here",
      },
      {
         key: "sequence",
         label: "Create your sequence",
         desc: "Sequence overview be displayed here",
      },
      {
         key: "setup_triggers",
         label: "Setup Trigger-Based Plays",
         desc: "Trigger-Based Plays will be displayed here",
      },
      {
         key: "ai",
         label: "AI Recommendations",
         desc: "AI-powered recommendations will be appear here",
      },
   ];
   return (
      <div className="flex flex-col gap-3 w-full bg-white py-7 border border-[#E4E7EC] rounded-b-xl p-4">
         {options?.map((option) => (
            <div key={option.key} className="border rounded-lg px-3 py-2">
               {option.label}<br/>
              <span className="text-sm pl-2 text-gray-600"> {option.desc}</span>
            </div>
         ))}
      </div>
   );
};

export default Review;
