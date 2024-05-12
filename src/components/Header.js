//flowbite
import { Button, Navbar } from "flowbite-react";

//resources
import logo from "../resources/logoTransparent.png";

//Ui
import ButtonUi from "../Ui/ButtonUi";

//react router dom
import { Link } from "react-router-dom";

//react 
import { useState } from "react";

//react-icon
import { FaBarsStaggered } from "react-icons/fa6";

//component
import SideMenu from "./Headers/SideMenu";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const isMenuOpen = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="bg-white">
      <Navbar fluid rounded className=" w-[90%] bg-inherit  mx-auto py-8 ">
        <Link to={"/"}>
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Communiti" />
        </Link>
        <div className="hidden md:flex gap-5 md:order-2">
          <Link to={'/login'}>
          <ButtonUi
            title={"Log In"}
            styles={` border-blue-600 bg-transparent text-blue-600`}
          />
          </Link>

          <Link to={"/login"}>
            <ButtonUi title={"Register"} styles={` bg-blue-600 text-white  `} />
          </Link>
        </div>
        <div className=" hidden  md:flex text-xl   gap-14">
          <div href="#" className="font-bold">
            Jobs
          </div>
          <div href="#">Companies</div>
          <div href="#">Services</div>
          <div href="#">Pricing</div>
        </div>

        <FaBarsStaggered onClick={isMenuOpen} className="md:hidden" />
      </Navbar>
      {menuToggle ? <SideMenu filterMenuToggle={isMenuOpen} /> : ""}
    </div>
  );
};

export default Header;
