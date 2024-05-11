//Ui
import CardDashBoard from "../../Ui/CardDashBoard";
import H2 from "../../Ui/Text/H2";
import BlueText from "../../Ui/Text/BlueText";
import TopCompaniesCard from "./TopCompaniesCard";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <CardDashBoard styles={"mt-5 w-full flex flex-col justify-between "}>
      <div className="mb-5 flex justify-between">
        <H2 text="Blogs"></H2>
        <BlueText text="View All" styles={""} />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-5">
        <BlogCard/>
        <BlogCard/>
        
      </div>
    </CardDashBoard>
  );
};

export default Blog;
