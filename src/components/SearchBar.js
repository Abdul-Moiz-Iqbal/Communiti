//react icons
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";

// flowbite
import { Dropdown } from "flowbite-react";

const SearchBar = () => {
  return (
    <div className="md:w-[75%] mx-auto mb-10 rounded-full bg-white flex">
      <div className=" md:w-[85%] flex p-2 md:py-4 md:px-8">
        <div className="flex md:w-[45%] items-center">
          <CiSearch className="text-lg hidden md:text-3xl " />
          <input
            class="w-full border-transparent focus:border-transparent focus:ring-0 px-2  text-gray-700     lg:text-lg text-xs"
            type="text"
            placeholder="What position are you looking for ?"
          />
        </div>
        <div className="px-1 md:px-8 flex  border-x-2 justify-between w-[30%]  items-center">
          <SlHandbag className="hidden md:block" />
          <Dropdown label="Experience"  inline>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>2</Dropdown.Item>
            <Dropdown.Item>2</Dropdown.Item>
            <Dropdown.Item>4</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="md:px-8 flex w-[31%] items-center">
          <IoLocationOutline className="hidden" />
          <input
            class="w-full   text-gray-700 border-transparent focus:border-transparent focus:ring-0 lg:text-lg text-xs"
            type="text"
            placeholder="Enter Location"
          />
        </div>
      </div>
      <button className="px-3 md:px-0 md:w-[15%]  rounded-e-full flex items-center justify-center bg-blue-500 text-white text-lg hover:bg-blue-600">
      <CiSearch className="md:text-3xl md:hidden " />
      <p className="hidden md:block">Search</p>
      </button>
    </div>
  );
};

export default SearchBar;
