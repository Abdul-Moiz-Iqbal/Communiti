// resources
import laptop from "../../resources/laptop.png";

//Ui
import CardDashBoard from "../../Ui/CardDashBoard";
import BlueText from "../../Ui/Text/BlueText";
import P from "../../Ui/Text/P";
import H2 from "../../Ui/Text/H2";

const Courses = () => {
  return (
    <CardDashBoard styles={"px-2 mt-5"}>
      <img src={laptop} />
      <H2
        text="6 Trending Courses to Sign Up for in 2023"
        styles={"mt-4 text-[19.1px] "}
      />

      <P styles={'mt-4 text-sm'}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been t"
      />
      <BlueText styles='mt-4' text={' Know More'}/>
    </CardDashBoard>
  );
};

export default Courses;
