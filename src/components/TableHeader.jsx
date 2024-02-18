import { useState } from "react";
import { TbMathGreater } from "react-icons/tb";
import { FaLessThan } from "react-icons/fa6";
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
        <article className="flex gap-3 items-center justify-center pr-5">
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-xl hidden md:block">
            Show
          </p>
          <div className="hidden md:block">
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
          <button className="text-white font-semibold italic bg-blue-500 px-3 py-1 rounded-md text-xs sm:text-sm md:text-base lg:text-xl hidden md:block">
            DISPATCH SELECTED
          </button>
          <article className="flex gap-1 items-center justify-center">
            <FaLessThan className="bg-purple-50 w-8 h-8 p-2" />
            <p className="bg-purple-50 rounded-md  w-8 h-8 text-center pt-1">
              1
            </p>
            <p className="bg-purple-50 rounded-md  w-8 h-8 text-center pt-1">
              2
            </p>
            <p className="bg-purple-50 rounded-md  w-8 h-8 text-center pt-1">
              3
            </p>
            <p className=" rounded-md">......</p>
            <p className="bg-purple-50 rounded-md  w-8 h-8 text-center pt-1">
              10
            </p>
            <TbMathGreater className="bg-purple-50 font-semibold w-8 h-8 p-2 text-center" />
          </article>
        </article>
      </section>
    </>
  );
};
export default TableHeader;
