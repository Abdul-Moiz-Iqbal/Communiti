//components
import Register from "../components/auth/Register";
import RegisterInfo from "../components/auth/RegisterInfo";

const SignUp = () => {
  return (
    <div className="">
      <div className=" flex flex-row">
        <div className="w-full md:w-[50%] h-full ">
          <Register />
        </div>
        <div className="hidden  md:block w-[50%]  bg-slate-100">
          <RegisterInfo />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
