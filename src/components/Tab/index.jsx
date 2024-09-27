import { tabs } from "../../constants/dummyData";

const Tab = () => {
   return (
      <div className="grid grid-cols-3 w-full">
         {tabs.map((tab, index) => {
            return (
               <button
                  key={index}
                  className="text-center py-2 font-medium text-[#667085] focus:border-b focus:border-b-[#505BC5] focus:text-[#505BC5] hover:cursor-pointer"
               >
                  {tab}
               </button>
            );
         })}
      </div>
   );
};
export default Tab;
