//Ui
import ButtonUi from "../../Ui/ButtonUi";
import CardDashBoard from "../../Ui/CardDashBoard";
import H2 from "../../Ui/Text/H2";
import P from "../../Ui/Text/P";

//resources
import phone3d from "../../resources/phone-3d.png";

const Subscribe = () => {
  return (
    <CardDashBoard
      styles={"h-fit w-full flex flex-col items-center justify-center"}
    >
      <img className="" src={phone3d} />
      <H2 text="Get Updates Directly On WhatsApp!" styles={"mt-4 text-lg "} />

      <P
        text="Know Instatnly When Status Of Your Job Application Changes"
        styles={"mt-5 font-[400] text-[14px] leading-[18px]"}
      ></P>
      <div className="w-full">
        <ButtonUi
          styles={"mt-5 border-transparent text-white bg-textBlue"}
          title={"Subscribe"}
        />
      </div>
    </CardDashBoard>
  );
};

export default Subscribe;
