import { useState } from "react";
import ListItems from "./ListItems";
import TableFooter from "./Footer";
import { PAGE_COUNT } from "./utils";

const Table = ({ header, rows }) => {
   const [currPage, setCurrPage] = useState(0);

   return (
      <section className="flex flex-col pb-7 pt-4 ">
         <ListItems
            header={header}
            data={rows.slice(
               currPage * PAGE_COUNT,
               currPage * PAGE_COUNT + Math.min(rows.length - currPage * PAGE_COUNT, PAGE_COUNT)
            )}
         />
         <TableFooter max={Math.ceil(rows.length / PAGE_COUNT)} currPage={currPage} setCurrPage={setCurrPage} />
      </section>
   );
};

export default Table;
