//react icons
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";

// flowbite
import { Dropdown } from "flowbite-react";

const SearchBar = () => {
  return (
    <div className="w-[75%] mx-auto mb-10 rounded-full bg-white flex">
      <div className="py-4 w-[85%] flex px-8">
        <div className="flex w-[45%] items-center">
          <CiSearch className="text-3xl " />
          <input
            class="w-full px-2 rounded-full text-gray-700 border-none   focus:outline-none lg:text-lg text-xs"
            type="text"
            placeholder="What position are you looking for ?"
          />
        </div>
        <div className="px-8 flex  border-x-2 justify-between w-[30%]  items-center">
          <SlHandbag />
          <Dropdown label="Select Experience" className="text-lg" inline>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>2</Dropdown.Item>
            <Dropdown.Item>2</Dropdown.Item>
            <Dropdown.Item>4</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="px-8 flex w-[31%] items-center">
          <IoLocationOutline />
          <input
            class="w-full  rounded-full text-gray-700 border-none   focus:outline-none lg:text-lg text-xs"
            type="text"
            placeholder="Enter Location"
          />
        </div>
      </div>
      <div className="bg-blue-500 text-white text-lg rounded-e-full w-[15%] flex items-center justify-center">
        <p>Search</p>
      </div>
    </div>
  );
};

export default SearchBar;
