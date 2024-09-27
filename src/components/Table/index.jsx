import { useState } from "react";
import ListItems from "./ListItems";
import TableFooter from "./Footer";
import { PAGE_COUNT } from "./utils";

const Table = ({ header, rows, onSelect }) => {
  const [currPage, setCurrPage] = useState(0);

  return (
    <section className="flex flex-col pb-7 pt-4 ">
      <ListItems
        header={header}
        data={
          rows?.slice(
            currPage * PAGE_COUNT,
            currPage * PAGE_COUNT +
              Math.min(rows.length - currPage * PAGE_COUNT, PAGE_COUNT)
          ) || []
        }
        onSelect={onSelect}
      />
      <TableFooter
        max={Math.ceil((rows?.length || 0) / PAGE_COUNT)}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
    </section>
  );
};

export default Table;
