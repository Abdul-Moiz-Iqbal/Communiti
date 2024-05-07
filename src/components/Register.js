import React from "react";
import Input from "../Ui/Input";

const Register = () => {
  return (
    <div className="w-[50%] mx-auto my-24">
      <h1 className="text-center text-5xl tracking-wide font-semibold text-[#377DFF]">
        Let's Started
      </h1>
      <p className="mt-6 text-center text-xl">
        Sign Up and get access to all the features<br></br> of Company
      </p>

      {/* Inputs */}
      <div className="py-10">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-[400]">First Name</label>
            <Input text={"First Name"} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-[400]">Last Name</label>
            <Input text={"Last Name"} />
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
        <div className="mt-10 flex gap-5">
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-[400]">Work Status</label>
            <Input text={"Experience"} styles={"bg-[#377DFF0D]"}/>
          </div>
          <div className="flex flex-col justify-end">
            {/* <label className="mb-2 text-xl font-[400]">Last Name</label> */}
            <Input text={"Fresher"} styles={"bg-[#377DFF0D]"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
