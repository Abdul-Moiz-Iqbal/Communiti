// images
import playStore from "../resources/playstore.svg";
import appleStore from "../resources/appleaStore.svg";
import logo from "../resources/logo.png";

// react icons
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

const FooterNav = () => {
  return (
    <div>
      <div className=" bg-blue-600 ">
        <div className="w-[90%] py-20 mx-auto flex flex-col md:flex-row ">
          <div>
            <img src={logo} />
            <p className="my-8 md:w-[58%] text-lg text-white">
              It is a long established fact that a reader will be of a page
              reader will be of at its layout.
            </p>
            {/* store images */}
            <div className="flex w-30 h-10 ">
              <div>
                <img src={playStore} className=" h-full w-full " />
              </div>
              <div className="ml-5">
                <img src={appleStore} className="h-full w-full" />
              </div>
            </div>
            {/* social icons  */}
            <div className="mt-10 flex items-center text-white text-xl">
              <h1>Connect with us:</h1>
              <div className="ml-3 text-2xl flex gap-4">
                <TiSocialFacebook />
                <TiSocialTwitter />
                <TiSocialLinkedin />
                <TiSocialInstagram />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white text-xl">
            <h1>About Us</h1>
            <h1>Careers</h1>
            <h1>Employer home</h1>
            <h1>Sitemap</h1>
          </div>
          <div className=" md:ml-32 flex flex-col gap-4 text-white text-xl">
            <h1>Help center </h1>
            <h1>Summons/Notices </h1>
            <h1>Grievances</h1>
            <h1>Report issue</h1>
          </div>
          <div className="md:ml-32 flex flex-col gap-4 text-white text-xl">
            <h1>Privacy policy</h1>
            <h1>Terms & conditions</h1>
            <h1>Fraud alert</h1>
            <h1>Trust & safety</h1>
          </div>
        </div>
      </div>
      <div className="py-4  bg-black text-lg text-center text-blue-100">
        Copyright: 2023 Term & Codition Apply
      </div>
    </div>
  );
};

export default FooterNav;
