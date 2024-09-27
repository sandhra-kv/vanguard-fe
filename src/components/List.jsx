import React from "react";

import cx from "classnames";
const List = ({ data, headers }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-sm">
          <tr>
            {headers.map((field, index) => (
              <th
                key={index}
                className={cx(
                  "px-6 py-3 text-left font-medium hover:cursor-pointer"
                )}
              >
                <span className="flex items-center gap-1">{field.label}</span>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className="divide-y  bg-white">
          {data.map((field) => (
            <tr key={field.id} className=" text-sm cursor-pointer">
              {headers.map((header, index) => (
                <td key={index} className="px-6 py-5">
                  {field[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
