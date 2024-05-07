// images
import { Avatar } from "flowbite-react";
import elipse1 from "../resources/Ellipse 1.png";
import elipse2 from "../resources/Ellipse 2.png";
import microsoft from "../resources/microsoft.png";
import LinkedIn from "../resources/LinkedIn_icon (1) 1.png";
import google from "../resources/google.png";
import rectangle from "../resources/Rectangle 6.png";
import amazon from "../resources/amazon.png";
import twiter from "../resources/Twitter_bird_logo_2012 1.png";
import rectangle2 from "../resources/Rectangle 7.png";

//components
import SearchBar from "./SearchBar";
const DreamJob = () => {
  return (
    <div className="bg-slate-50 pb-10 ">
      <div className="w-[90%] mx-auto">
        
        <div className="w-[85%] h-[30%]  pt-6 mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          <img src={rectangle} className="h-fit hidden md:block " />
          <div className="w-fit">
            <div className="hidden h-20 mx-auto  md:flex  justify-between">
              <img src={amazon} alt="Company" className=" h-7 w-7  ml-20  " />
              <img
                src={twiter}
                alt="Company"
                className="h-8 w-8 md:absolute md:right-0 md:mr-[25%] md:mt-10"
              />
            </div>
            <h6 className="text-2xl text-center text-blue-500 uppercase tracking-[0.2rem] font-medium">
              we have 150,500 live jobs
            </h6>
            <h1 className="mt-11 mb-5 md:mb-0 text-4xl md:text-[5.9rem] md:leading-[1.2] text-center font-bold md:font-semibold">
              The home of your<br></br> dream job
            </h1>
          </div>
          <Avatar
            img={elipse1}
            alt="avatar of Jesica"
            size={"h-40 w-40"}
            rounded
          />
        </div>
        <div className="md:px-10 pb-14 flex items-center justify-between">
          <img
            src={google}
            alt="Company"
            className=" h-6 w-6  rotate-[12deg]"
          />
          <p className="mt-5 text-center text-gray-400 text-lg">
            when you need us for improve your business, then come with us to
            help your business <br className="hidden md:block"></br> have reach it, you just sit and feel
            that goal.
          </p>
          <img src={LinkedIn} alt="Company" className=" h-8 w-8  " />
        </div>
        {/* search Bar  */}
        <SearchBar />

        {/* elipese images  */}
        <div className="md:px-32 flex justify-between items-center">
          <Avatar img={elipse2} alt="avatar of Jese" size={"xl"} rounded />
          <img
            src={microsoft}
            alt="Company"
            className=" h-6 w-6 mt-2 rotate-[65deg]"
          />
          <img
            src={rectangle2}
            // alt="Company"
            className=" h-36 w-36 "
          />
          {/* <Avatar img={elipse2} alt="avatar of Jesica" size={"xl"} rounded /> */}
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
