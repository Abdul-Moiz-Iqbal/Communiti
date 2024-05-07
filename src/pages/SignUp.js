import React from "react";
import Register from "../components/Register";

const SignUp = () => {
  return (
    <div>
      <div className="h-[100vh] flex flex-col md:flex-row">
        <div className="w-[50%] h-full ">
            <Register/>
        </div>
        <div className="w-[50%] h-full bg-slate-50">s</div>
        
      </div>
    </div>
  );
};

export default SignUp;
