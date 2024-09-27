import { useState } from "react";

import cx from "classnames";
import StatusFlag from "./components/StatusFlag";
import actionButton from '../../assets/actionButton.svg'
const ListItems = ({ data, header }) => {
   const [sortedField, setSortedField] = useState(null);
   const [isAscending, setAscending] = useState(false);
   const sortedData = [...data];
   if (sortedField !== null) {
      sortedData.sort((a, b) => {
         if (a[sortedField] < b[sortedField]) {
            return isAscending ? -1 : 1;
         }
         if (a[sortedField] > b[sortedField]) {
            return isAscending ? 1 : -1;
         }
         return 0;
      });
   }
   return (
      <div className="overflow-hidden rounded-t-2xl border border-gray-200">
         <table className="min-w-full divide-y divide-gray-200">
            <thead className="text-sm">
               <tr>
                  {/* <th className="pl-7 py-3  w-0.5">
                     <input type="checkbox" />
                  </th> */}
                  {header.map((field, index) => (
                     <th
                        key={index}
                        className={cx("px-6 py-3 text-left font-medium hover:cursor-pointer")}
                        onClick={() => {
                           setAscending(!isAscending);
                           setSortedField(field.key);
                        }}
                     >
                        <span className="flex items-center gap-1">{field.label}</span>
                     </th>
                  ))}
                  <th></th>
               </tr>
            </thead>
            <tbody className="divide-y  bg-white">
               {sortedData.map((field) => (
                  <tr key={field.id} className=" text-sm">
                     {/* <td className="pl-6 py-5 w-0.5">
                        <input type="checkbox" />
                     </td> */}
                     <td className="px-6 py-5">{field.name}</td>
                     <td className="px-6 py-5">{field.email}</td>
                     <td className="px-6 py-5">{field.company}</td>
                     <td className="px-6 py-5">{field.job_title}</td>
                     <td className="px-6 py-5">
                        <StatusFlag status={field.status} />
                     </td>
                     <td className="py-3 pr-6">
                        <button className="border px-3 py-2 rounded-lg"><img src={actionButton} alt="edit or delete"/></button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ListItems;
