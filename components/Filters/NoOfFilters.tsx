import React from "react";

const NoOfFilters = ({number}:{number : number}) => {
  return (
    <div className="p-2 px-4 gap-2 rounded-lg shadow-md text-sm flex justify-between border border-gray-200">
  <div>All Filters</div>

  <div className="text-blue-600"> Applied({number})</div>
</div>

  );
};

export default NoOfFilters;