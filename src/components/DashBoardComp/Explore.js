//resources
import community from "../../resources/community.png";
import top from "../../resources/top.png"
import bottom from "../../resources/bottom.png"
import H4 from "../../Ui/Text/H4";
import P from "../../Ui/Text/P";
import ButtonUi from "../../Ui/ButtonUi";

const Explore = () => {
  return (
    <div className="bg-white mt-5 px-5 rounded-xl flex justify-end">
      <div className="">
        <div className="flex justify-end">
            <img src={top}/>
        </div>
        <H4 text="Explore Communiti"></H4>
        <P styles={'mt-1 text-[16px] text-[#464646] font-[400]'}>Lorem Ipsum is simply dummy text of the printing.</P>
        <ButtonUi title='Explore Now' styles='mt-3 bg-textBlue text-white' />
      </div>
      <div className="flex flex-col">
        <img src={community} alt="Vector" />
        <img src={bottom} className="mb-[-0.1rem]"/>
      </div>
    </div>
  );
};

export default Explore;
