//resourcse
import vector from "../resources/Secure login.png";
import applyJob from "../resources/ApplyJob.png";
import resume from "../resources/uploadResume.png";
import Document from "../resources/Document Add.png";

const GetJobs = () => {
  return (
    <div className="py-14 ">
      <h6 className="text-xl text-center text-blue-500 uppercase tracking-[0.2rem] font-medium">
        How it works
      </h6>
      <h1 className="mt-11 text-5xl  text-center font-semibold">
        Simple steps to get you next job
      </h1>

      <div className="w-[90%]  mt-20  mx-auto flex flex-col  lg:flex-row">
        <div className="lg:w-[50%]  flex ">
          {/* Image here  */}
          <div className="flex flex-col items-center">
            <img src={Document} className="rounded-full p-2   lg:p-[26%] bg-[#EBDDFE]" />
            <div className="border-r-2 border-dashed h-[28%] w-1 "></div>
            <img src={resume} className="rounded-full p-2 lg:p-[26%]  h-15 bg-[#FFF1CE]" />
            <div className="border-r-2 border-dashed h-[28%] w-1 "></div>
            <img src={applyJob} className="rounded-full p-2 lg:p-[26%] bg-[#FFE8E0]" />
            <div src={applyJob} className="rounded-full p-6   "></div>
          </div>
          <div className="px-5 md:px-16 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-[2rem] font-semibold">
                Register your account
              </h1>
              <p className="md:mt-5 md:text-xl text-gray-400 font-medium">
                Due to its widespread use as filler test for layouts,
                <br className="hidden md:block"></br>non-readability is of great
                importance
              </p>
            </div>
            <div>
              <div>
                <h1 className="mt-10 text-2xl md:text-[2rem] font-semibold">
                  Upload your resume 
                </h1>
                <p className="md:mt-5 md:text-xl text-gray-400 font-medium">
                  Due to its widespread use as filler test for layouts,
                  <br className="hidden md:block"></br>non-readability is of
                  great importance
                </p>
              </div>
            </div>
            <div>
            <h1 className="mt-10 text-2xl md:text-[2rem] font-semibold">
                  Apply for new jobs 
                </h1>
                <p className="md:mt-5 md:text-xl text-gray-400 font-medium">
                  Due to its widespread use as filler test for layouts,
                  <br className="hidden md:block"></br>non-readability is of
                  great importance
                </p>
            </div>
          </div>
        </div>
        {/* person sitting Vecter */}
        <div className="mt-16 lg:mt-0 lg:w-[50%]  ">
          <img src={vector} />
        </div>
      </div>
    </div>
  );
};

export default GetJobs;
