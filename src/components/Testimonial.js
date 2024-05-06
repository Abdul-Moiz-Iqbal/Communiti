//React-Icons
import { FaQuoteLeft } from "react-icons/fa";
import quote from "../resources/quote.png";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  return (
    <div className="mb-14 ">
      {/* heading and text  */}
      <div className="mt-14 ">
        <h1 className="text-4xl font-semibold text-center ">
          What our customer says
        </h1>
        <p className="mt-5 text-center text-gray-400 text-xl">
          when you need us for improve your business, then come with us to help
          your business <br></br> have reach it, you just sit and feel that
          goal.
        </p>
      </div>

      <div className="w-[90%] mt-10  mx-auto flex flex-col md:flex-row ">
        <div className="w-[30%] flex flex-col justify-center">
          {/* <FaQuoteLeft /> */}
          <img src={quote} className="rotate-180 w-fit" />
          <h1 className="text-[3.4rem] font-extrabold ">
            what they say <br></br> about Communiti
          </h1>
          <p className="mt-3 text-xl ">More than 3000 users have been helped by World Online Course.</p>
        </div>
        <div className="w-[70%] ">
            <TestimonialCard/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
