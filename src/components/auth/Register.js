// Ui
import ButtonUi from "../../Ui/ButtonUi";
import Input from "../../Ui/Input";
import H6 from "../../Ui/Text/H6";

//flow bite
import { Dropdown, Radio } from "flowbite-react";
import P from "../../Ui/Text/P";

// resources
import upload from "../../resources/upload-Outlined.png";

const Register = () => {
  return (
    <div className="w-[90%] md:w-[50%] md:px-0 mx-auto  my-24">
      <h1 className="text-center text-5xl tracking-wide font-semibold text-[#377DFF]">
        Let's Started
      </h1>
      <p className="mt-6 w-full text-center text-lg">
        Sign Up and get access to all the features<br></br> of Company
      </p>

      {/* Inputs */}
      <div className="py-10 w-full ">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-[400]">First Name</label>
            <Input text={"First Name"} styles="w-[100%]" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-[400]">Last Name</label>
            <Input text={"Last Name"} styles="w-[100%]" />
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <label className="mb-2 text-xl font-[400]">Email ID</label>
          <Input text={"JohnDoe@gmail.com"} />
        </div>
        <div className="mt-10 flex flex-col">
          <label className="mb-2 text-xl font-[400]">Password</label>
          <Input type={"number"} text={"password"} />
        </div>

        {/* //number input  */}
        <div className=" flex flex-col">
          <label className="mt-10 text-xl font-[400]">Mobile Number</label>

          <div className="mt-5 flex gap-2">
            <div className="bg-[#F5F5F5] rounded-xl flex justify-center items-center px-4 text-[#9D9D9D] font-medium">
              <Dropdown label="+91" inline dismissOnClick={false}>
                <Dropdown.Item>92</Dropdown.Item>
                <Dropdown.Item>93</Dropdown.Item>
                <Dropdown.Item>94</Dropdown.Item>
                <Dropdown.Item>85</Dropdown.Item>
              </Dropdown>
            </div>
            <Input text={"Experience"} styles={"w-full bg-[#377DFF0D] "} />
          </div>
        </div>

        <div className="mt-10 flex gap-5">
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-[400]">Work Status</label>
            <Input
              text={"Experience"}
              bg="bg-[#377DFF0D]"
              styles={"bg-[#377DFF0D] w-[100%]"}
            />
          </div>
          <div className="flex flex-col justify-end">
            <Input
              text={"Fresher"}
              bg="bg-[#377DFF0D]"
              styles={"bg-[#377DFF0D] w-[100%]"}
            />
          </div>
        </div>

        {/* radio box  */}
        <div className="mt-10">
          <label className="mb-2 text-lg font-[400]">Gender</label>
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label className="ml-3 text-lg font-[400] text-[#9D9D9D] ">Male</label>
            </div>
            <div className="flex justify-center items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label className="ml-3 text-lg font-[400] text-[#9D9D9D] ">Female</label>
            </div>
            <div className="flex justify-center items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label className="ml-3 mr-1 text-lg font-[400] text-[#9D9D9D] ">Prefer not to say</label>
            </div>
          </div>
        </div>

        {/* Upload resume  */}
        <div className="mt-10">
          <label className="mb-2 text-lg font-[400]">Attach your resume</label>
          <div className="rounded-xl bg-[#F5F5F5] border-2 border-dashed p-2 flex">
            <div className=" rounded-xl bg-textBlue p-3">
              <img src={upload} />
            </div>
            <div className="ml-2">
              <H6 styles={""}>Upload Files</H6>
              <P text="PDF, DOC, PPT, JPG, PNG" styles={"text-sm"}></P>
            </div>
          </div>
        </div>

        {/* Term and condition  */}
        <P styles={"mt-5 text-sm "}>
          By clicking Register, you agree to the{" "}
          <span className="text-textBlue">Terms and Conditions </span>& Privacy
          Policy of Community
        </P>

        {/* // button */}
        <ButtonUi
          styles={"mt-10 bg-textBlue border-white w-full text-white"}
          title="Submit"
        />
      </div>
    </div>
  );
};

export default Register;
