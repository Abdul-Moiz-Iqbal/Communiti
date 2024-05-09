import CardDashBoard from "../../Ui/CardDashBoard";

// react-icons
import { BsHandbag } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import H2 from "../../Ui/Text/H2";
import P from "../../Ui/Text/P";

const RecommendedJobCard = (props) => {
  return (
    <div className={"w-full  rounded-xl bg-white px-4 py-3 border"}>
      <div className=" font-[600] flex justify-between">
        <div className="flex justify-center">
          <img src={props.logo} alt="Company" className=" h-8 w-8 mt-2" />
          <div className="ml-2 flex flex-col ">
            <div className="font-semibold">{props.company}</div>
            <div className="text-[0.8rem] font-normal text-textgray">{props.time}</div>
          </div>
        </div>

        <div className="mt-1 flex justify-center text-sm ">
          <svg
            className="h-4 w-4 mt-[0.1rem] text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          5.0
        </div>
      </div>

      {/* Titile */}
      
      <H2 text={props.title+'...'} styles={'mt-4 text-[1.2rem]'}/>
      <P text={props.desc} styles={'text-sm'}></P>
      {/*  border  */}
      <div className="w-[113.9%] mt-4  border-b-[2px] ml-[-1rem] "></div>

      {/* address  */}
      <div className="mt-2 flex justify-between">
        <div className=" ml-[-0.24rem] text-textgray flex items-center">
          <CiLocationOn className="text-2xl" />
          <p className=" ml-1   text-sm ">{props.address}</p>
        </div>

       
      </div>
    </div>
  );
};

export default RecommendedJobCard;
