// resources
import email from "../../resources/email.png";
import mapPoint from "../../resources/mapPoint.png";
import JobHolders from "../../resources/JobHolders.png";
import MagnifyingGlass from "../../resources/MagnifyingGlass.png";
import tick from "../../resources/tick.png";
import girl from "../../resources/Rectangle 4520.png";

const RegisterInfo = () => {
  return (
    <div className="mb-20">
      {/* top Part */}
      <div className="flex">
        <div className="  md:w-[50%] px-10 pt-14">
          <div className="h-3 w-3 mx-auto rounded-full bg-[#FFCA30]"></div>
          <div className="mt-14 bg-white rounded-lg shadow w-fit p-4">
            <img src={email} />
          </div>
        </div>
        <div className="w-[50%]  pt-14 pr-5 flex justify-between">
          <div className=" bg-white rounded-lg shadow h-fit w-fit p-2 rotate-[-10deg]">
            <img src={mapPoint} />
          </div>
          <img src={JobHolders} />
          {/* <div className="h-3 w-3  rounded-full bg-[#FFCA30]"></div> */}
        </div>
      </div>

      {/* Text */}
      <div className="mt-[-2rem]">
        <h1 className="text-textBlue text-3xl tracking-wide font-semibold text-center">
          Candidate Registration
        </h1>
        <p className="mt-4 text-[1.3rem] text-center font-medium ">
          {" "}
          Solutions for companies and Recruitment Agencies
        </p>
        <div className="mt-10 flex w-[100%]  h-full mx-auto">
          {/* Left part  */}
          <div className="ml-10  flex  ">
            <div className="flex flex-col items-center">
              <div className="rounded-full p-1 border-2 border-textBlue ">
                <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-textBlue"></div>
              </div>
              <div className="border-r-2 border-textBlue border-dashed h-[8rem] w-1 "></div>
              <div className="rounded-full p-1 border-2 border-textBlue ">
                <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-textBlue"></div>
              </div>
              <div className="border-r-2 border-textBlue border-dashed h-[8rem] w-1 "></div>
              <div className="rounded-full p-1 border-2 border-textBlue ">
                <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-textBlue"></div>
              </div>
              <div className="border-r-2 border-textBlue border-dashed h-[8rem] w-1 "></div>
              <div className="rounded-full p-1 border-2 border-textBlue ">
                <div className="w-[0.7rem] h-[0.7rem] rounded-full bg-textBlue"></div>
              </div>
            </div>
            <div className="ml-8 flex flex-col justify-between">
              <h2 className="text-[1rem] font-bold">Create your profile</h2>
              <h2 className="text-[1rem] font-bold">Invite Your Community</h2>
              <h2 className="text-[1rem] font-bold">Search and Apply</h2>
              <h2 className="text-[1rem] font-bold">Group chat Rooms</h2>
            </div>
          </div>
          {/* Right part */}
          <div className="w-[60%] pl-16  text-base text-textgray flex flex-col justify-between">
            <p>
              Create a detailed profile with Meta search words for accurate
              matching. Create a short Display profile and a powerful 30s video.
            </p>
            <p>
              Invite your Social, Professional, colleagues, close friends to
              endorse you on your expertise for a better understanding by the
              companies.
            </p>
            <p>
              Single click search and apply. We list you the best possible match
              on your experience using our advanced Al.
            </p>
            <p>
              Join our Group chat rooms created for various domain and
              experience.Connect and collaborate peer peer and share
              opportunities.
            </p>
          </div>
        </div>
        <p className="w-[90%] mt-16 mx-auto text-base text-textgray">
          We dont share your confidential informations to anyone. Only your
          short profile and video profile is visible to public. Recruiters
          message you personally or they can schedule a video conferencing
          call.You have the option to share your profile, or you can choose easy
          apply directly to company.
        </p>

        {/* end graphics */}
        <div className="mt-10">
          {/* yellow dot  */}
          <div className="h-3 w-3 mx-auto  rounded-full bg-[#FFCA30]"></div>

          {/* magnifying glass   */}
          <div className="mt-1 ml-24 bg-white rounded-lg shadow w-fit p-2 rotate-[20deg]">
            <img src={MagnifyingGlass} className="rotate-[-10deg]" />
          </div>

          {/* image and green tick  */}
          <div className="mr-24 flex justify-end">
            <img src={girl}  className="mr-[17rem]"/>
            <div className=" h-6 w-6 mr-2 flex justify-center items-center rounded-full  bg-[#3DCD65] ">
              <img src={tick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterInfo;
