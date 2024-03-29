import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const SearchSection = () => {
  return (
    <>
      <section className="flex gap-1 items-center justify-center rounded-2xl shadow-lg py-7 px-6 bg-white">
        <article className="basis-5/12">
          <p className="text-black font-bold w-full text-xs sm:text-sm md:text-base lg:text-lg text-start">
            What are you looking For?
          </p>
          <input
            className="rounded-md bg-purple-50 py-2 px-3 outline-none w-full border-2 border-gray-400"
            type="search"
            placeholder="Search for category, mname,company,etc...."
          />
        </article>
        <article className="basis-3/12">
          <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-start">
            Category
          </p>
          <select className=" w-full outline-none  border-2 border-gray-400 px-3 py-2 rounded-md">
            <option value="">All</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </article>
        <article className="basis-3/12">
          <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-start">
            Status
          </p>
          <select className="w-full outline-none  border-2 border-gray-400 px-3 py-2 rounded-md">
            <option value="">All</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </article>
        <article className="mt-5 ">
          <MdOutlineKeyboardDoubleArrowDown className=" bg-purple-50 rounded-md  w-8 h-10 mt-2 border-2 border-gray-400" />
        </article>
        <article className="basis-3/12 mt-7">
          <button className=" w-full bg-blue-500 rounded-md p-4 h-10 py-4"></button>
        </article>
      </section>
    </>
  );
};
export default SearchSection;
