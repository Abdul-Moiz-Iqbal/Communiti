import vector from "../resources/Secure login.png"
const GetJobs = () => {
  return (
    <div className="py-14 ">
      <h6 className="text-xl text-center text-blue-500 uppercase tracking-[0.2rem] font-medium">
        How it works
      </h6>
      <h1 className="mt-11 text-5xl  text-center font-semibold">
        Simple steps to get you next job
      </h1>

      <div className="w-[90%]  mt-20  mx-auto flex flex-col md:flex-row">
        <div className="w-[50%]  flex">
          {/* Image here  */}
          <div></div>
          <div className="px-16 flex flex-col justify-between">
            <div>
              <h1 className="text-[2rem] font-semibold">Register your account</h1>
              <p className="mt-5 text-xl text-gray-400 font-medium">Due to its widespread use as filler test for layouts,<br></br>non-readability is of great importance</p>
            </div>
            <div>
              <h1 className="text-[2rem] font-semibold">Upload Resume</h1>
              <p className="mt-5 text-xl text-gray-400 font-medium">Due to its widespread use as filler test for layouts,<br></br>non-readability is of great importance</p>
            </div>
            <div>
              <h1 className="text-[2rem] font-semibold">Apply for new jobs</h1>
              <p className="mt-5 text-xl text-gray-400 font-medium">Due to its widespread use as filler test for layouts,<br></br>non-readability is of great importance</p>
            </div>
          </div>
        </div>
        {/* person sitting Vecter */}
        <div className="w-[50%]  ">
            <img src={vector}/>
        </div>
      </div>
    </div>
  );
};

export default GetJobs;
