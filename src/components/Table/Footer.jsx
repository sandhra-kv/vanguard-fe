import { useState } from "react";
import ListNavButton from "./components/ListNavButton";

const SupplierListFooter = (props) => {
   const { max, currPage, setCurrPage, length } = props;
   const [pageRange, setPageRange] = useState(max > 3 ? 3 : max);

   return (
      <div className="flex items-center justify-between  bg-white px-7 py-4 ">
         <span className="font-medium ">
            Page {currPage + 1} of {max}
         </span>

         <span className="flex">
            {pageRange === max && <ListNavButton value={"..."} />}
            {Array.from({ length: pageRange > 3 ? 3 : pageRange }, (_, index) => (
               <ListNavButton
                  key={index}
                  value={index + pageRange - 2}
                  onClick={() => setCurrPage(index)}
                  setActive={index + pageRange - 3 === currPage ? true : false}
               />
            ))}
            {pageRange !== max && <ListNavButton value={"..."} />}
         </span>
         <span className="flex gap-2">
            <ListNavButton
               type={"prev"}
               onClick={() => {
                  if (currPage - 1 > 0 && pageRange - 3 > 0) {
                     setCurrPage(currPage - 1);
                     setPageRange(pageRange - 1);
                  } else if (currPage - 1 >= 0) setCurrPage(currPage - 1);
               }}
            />

            <ListNavButton
               type={"next"}
               onClick={() => {
                  if (currPage + 1 === pageRange && pageRange + 1 <= max) {
                     setCurrPage(currPage + 1);
                     setPageRange(pageRange + 1);
                  } else if (currPage + 1 < max) setCurrPage(currPage + 1);
               }}
            />
         </span>
      </div>
   );
};
export default SupplierListFooter;
