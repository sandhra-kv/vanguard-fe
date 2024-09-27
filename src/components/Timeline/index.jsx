import TimeStampBar from "./TimeStampBar";

const Timeline = ({ name, email, timeRanges, totalDuration }) => {
   return (
      <section className="flex flex-col gap-2">
         <div className="flex justify-between text-sm text-[#344357]">
            <div className="flex gap-2 items-center">
               <span className="font-medium">{name}</span>
               <span className="size-2 rounded-full bg-[#D9D9D9]" />
               <span>{email}</span>
            </div>
            <div className="font-medium">{totalDuration}% Talktime</div>
         </div>
         <TimeStampBar timeRanges={timeRanges} totalDuration={totalDuration} />
      </section>
   );
};
export default Timeline;
