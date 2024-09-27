import { useState } from "react";
import ListItems from "./ListItems";
import TableFooter from "./Footer";

const Table = ({header,rows}) => {
   const [currPage, setCurrPage] = useState(0);

   return (
      <section className="flex flex-col pb-7 pt-4 ">
         <ListItems
            header={header}
            data={rows.slice(currPage * 10, currPage * 10 + Math.min(rows.length - currPage * 10, 10))}
         />
         <TableFooter
            max={Math.ceil(rows.length / 10)}
            currPage={currPage}
            setCurrPage={setCurrPage}
         />
      </section>
   );
};

export default Table;
