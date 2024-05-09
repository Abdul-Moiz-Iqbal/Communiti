import { Avatar, Button, Navbar } from "flowbite-react";
// import logo from "../../resources/logoTransparent.png";
import ButtonUi from "../../Ui/ButtonUi";
import { BsMenuButton, BsMenuUp } from "react-icons/bs";

//resource
import elipse from "../../resources/Ellipse 1.png";
import bell from "../../resources/bell.png";
import logo from "../../resources/CoBackgroundLogo.png";

const Header = () => {
  return (
    <div className="bg-white">
      <Navbar fluid rounded className=" w-[87%] bg-inherit  mx-auto py-8 ">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Communiti" />
        </Navbar.Brand>
        <div className="w-[40%] hidden md:flex md:items-center md:justify-between gap-5 md:order-2">
          <input
            className="w-[70%] rounded-full py-3 px-5 bg-[#F5F5F5]"
            placeholder="Search here..."
          />
          <img src={bell} className="w-[24px] h-[24px]" />
          {/* <Avatar img={elipse} size={"md"} rounded /> */}
          <img src={elipse} className="w-[48px] h-[48px]"/>
        </div>
        <div className=" hidden  md:flex text-xl   gap-14">
          <div href="#" className="font-bold">
            Jobs
          </div>
          <div href="#">Companies</div>
          <div href="#">Services</div>
          <div href="#">Pricing</div>
        </div>
        <BsMenuUp className="md:hidden" />
      </Navbar>
    </div>
  );
};

export default Header;
