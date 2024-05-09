//Ui
import clock from "../../resources/clock-Outlined.png"
import conference from "../../resources/conference.png";

// Ui
import CardDashBoard from "../../Ui/CardDashBoard";
import H6 from "../../Ui/Text/H6";
import P from "../../Ui/Text/P";

const BlogCard = () => {
  return (
    <CardDashBoard styles={"border"}>
      <img src={conference} alt="blog Image" />
      <H6 styles={'mt-3 font-semibold'}>6 Trending Courses to Sign Up for in 2023</H6>
      <div className="mt-3 flex">
        <img src={clock}/>
        <P styles={'ml-3 text-sm'} text="5 March 2023"></P>
      </div>
    </CardDashBoard>
  );
};

export default BlogCard;
