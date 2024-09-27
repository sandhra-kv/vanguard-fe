import { useEffect, useState } from "react";
const ProgressBar = ({ label, progress }) => {
   const [width, setWidth] = useState(0);
   useEffect(() => {
      setWidth(progress);
   }, [progress]);

   return (
      <div className="flex flex-col gap-1">
         <div className="flex  justify-between items-center text-sm text-[#344357] font-medium">
            <span className="ml-1">{label}</span>
            <span >{progress?.toFixed()}%</span>
         </div>
         <div className="w-full bg-[#E9EDF7] h-3 rounded-md overflow-hidden">
            <div
               className="transition-all ease-in bg-[#505BC5] h-full rounded-md duration-1000"
               style={{ width: `${width}%` }}
            ></div>
         </div>
      </div>
   );
};
export default ProgressBar;
