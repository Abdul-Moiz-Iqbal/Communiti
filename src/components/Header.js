
import { Button, Navbar } from "flowbite-react";
import logo from "../resources/logoTransparent.png"
import ButtonUi from "../Ui/ButtonUi";
import { BsMenuButton, BsMenuUp } from "react-icons/bs";
const Header = () => {
  return (
    <div className="bg-slate-50">
    <Navbar fluid rounded className=" w-[90%] bg-inherit  mx-auto py-8 ">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Communiti" />
        
      </Navbar.Brand>
      <div className="hidden md:flex gap-5 md:order-2">
        <ButtonUi title={'Log In'} styles={` border-blue-600 bg-transparent text-blue-600`}/>
        <ButtonUi title={'Register'} styles={` bg-blue-600 text-white  `}/>
        
      </div>
      <div className=" hidden  md:flex text-xl   gap-14">
        <div href="#" className="font-bold">Jobs</div>
        <div href="#">Companies</div>
        <div href="#">Services</div>
        <div href="#">Pricing</div>
      </div>
      <BsMenuUp className="md:hidden"/>
    </Navbar>
    </div>
  );
};

export default Header;
