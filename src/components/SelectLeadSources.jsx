import { checkboxList } from "../constants/dummyData";

const SelectLeadSources = () => {
   
   return (
      <section className="px-10 gap-8 flex flex-col bg-white py-7 border border-[#E4E7EC] rounded-b-xl">
         <div className="flex  justify-between">
            {checkboxList.map((item) => {
               return (
                  <div className="flex gap-2 text-[#344054] text-sm ">
                     <input type="checkbox" value={item} /> {item}
                  </div>
               );
            })}
         </div>
         <div className="flex gap-8 justify-between w-full text-[#1E1E1E] text-sm">
            <div className=" flex flex-col gap-3 w-1/2">
                <span>Filter by Geography</span>
                <select name="geography" id="country" className="h-14 bg-white text-[#98A2B3] border rounded-md pl-5">
                    <option value="India">India</option>
                    <option value="India">India</option>
                    <option value="India">India</option>
                </select>
            </div>
            <div className=" flex flex-col  gap-3 w-1/2">
                <span>Filter by Industry</span>
                <select name="industry" id="industry" className="h-14 bg-white text-[#98A2B3] border rounded-md pl-5">
                    <option value="Health">Health</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Technology">Technology</option>
                </select>
            </div>
         </div>
      </section>
   );
};

export default SelectLeadSources;
