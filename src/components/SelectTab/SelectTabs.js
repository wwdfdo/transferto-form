import React from "react";

const SelectTabs = ({ items }) => {
  return (
    <div className="flex justify-around">
      {items.map((selectItem1) => (
        <div className="px-2 lg:py-3 py-2  border-spacing-5 border-2 border-white rounded-lg bg-black w-2/5">
          <select
            name="cars"
            id="cars"
            className="bg-black outline-none lg:pr-12 w-full flex justify-start lg:text-[.8rem] text-[.6rem] cursor-pointer"
          >
            {selectItem1.options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SelectTabs;
