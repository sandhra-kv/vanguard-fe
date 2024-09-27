import Timeline from "./Timeline";

const ModalAnalytics = ({ timelineData }) => {
   return (
      <section className="py-5 pl-5 h-[250px]">
         <div className="flex gap-1">
            <span className="font-medium text-[#101928]">Attendees:</span>
            <span className="text-[#344357]">{timelineData.length}</span>
         </div>
         <div className=" overflow-y-scroll mt-2  flex flex-col gap-3 h-full">
            {timelineData.map((data) => {
               return (
                  <Timeline
                     timeRanges={data.timeRanges}
                     name={data.name}
                     email={data.email}
                     totalDuration={data.totalDuration}
                  />
               );
            })}
         </div>
      </section>
   );
};
export default ModalAnalytics;
