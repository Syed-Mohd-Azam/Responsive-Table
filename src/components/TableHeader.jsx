import { useState } from "react";
const TableHeader = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <section className="flex justify-between items-center py-4">
        <p className="font-semibold  pl-5 text-xs sm:text-sm md:text-base lg:text-xl">
          Product Summary
        </p>
        <article className="flex gap-3 items-center justify-center">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-xl">
            Show
          </p>
          <div>
            <select
              className="px-3 py-1 outline-none border-2 border-blue-400 rounded-md text-xs sm:text-sm md:text-base lg:text-xl "
              id="dropdown font-semibold"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">All Columns</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <button className="text-white font-semibold italic bg-blue-500 px-3 py-1 rounded-md text-xs sm:text-sm md:text-base lg:text-xl">
            DISPATCH SELECTED
          </button>
        </article>
      </section>
    </>
  );
};
export default TableHeader;
