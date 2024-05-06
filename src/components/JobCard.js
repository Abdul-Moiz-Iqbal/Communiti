// icons
import { BsHandbag } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import ButtonUi from "../Ui/ButtonUi";

// image
import google from "../resources/google.png";
import { useState } from "react";

const JobCard = (props) => {
    
    
  return (
    <div className="p-4  border-2 border-gray-200 rounded-2xl">
      <div className="font-[600] flex justify-between">
        <h1 className="text-xl   w-[65%]"> {props.title}</h1>
        <div className="mt-1 flex justify-center">
          <svg
            className="h-5 w-5 mt-[0.2rem] text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          5.0
        </div>
      </div>
      {/* experience */}
      <div className="mt-5 flex text-slate-700 ">
        <BsHandbag className="mt-1 " />
        <div className="ml-2 ">{props.year}</div>
      </div>
      {/* Address */}
      <div className="mt-2 ml-[-0.24rem] text-slate-600 flex">
        <CiLocationOn className="mt-2 text-2xl" />
        <p className="w-[70%] ml-1   text-sm ">
          {props.address}
        </p>
      </div>
      {/* dashed border  */}
      <div className="w-[108.9%] mt-4 border-dashed border-b-[2px] ml-[-1rem] "></div>

      {/* compnay name and apply  */}
      <div className="mt-3 flex justify-between">
        <div className="flex justify-center">
          <img src={props.logo} alt="Company" className=" h-8 w-8 mt-2" />
          <div className="ml-2 flex flex-col ">
            <div className="font-semibold">{props.company}</div>
            <div className="text-[0.8rem] text-zinc-400">{props.time}</div>
          </div>
        </div>
        <button
          
          className={"px-6 py-[0.45rem] rounded-3xl  border-white text-white border bg-blue-500"}
        >Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
