//COMPONENTS
import Profile from "../components/DashBoardComp/Profile";
import Menu from "../components/DashBoardComp/Menu";
import Subscribe from "../components/DashBoardComp/Subscribe";
import Courses from "../components/DashBoardComp/Courses";
import RecommendedJobs from "../components/DashBoardComp/RecommendedJobs";
import TopCompanies from "../components/DashBoardComp/TopCompanies";
import Blog from "../components/DashBoardComp/Blog";
import Explore from "../components/DashBoardComp/Explore";

const DashBoard = () => {
  return (
    <div className=" bg-[#F7F8FA]">
      <div className="w-[85%]  py-14 mx-auto bg-transparent  grid md:grid-cols-12 gap-x-5 ">
        {/* col 1 */}
        <div className=" rounded-xl col-span-3 flex flex-row  ">
          
          <div className="w-[86vw] md:w-[100%]"> 
            {/* profile Card  */}
            <Profile />
            {/* Menu  */}
            <Menu />
          </div>
        </div>
        {/* col2 */}
        <div className="mt-5 md:mt-0 col-span-3 md:col-span-6">
            <RecommendedJobs/>  
            <Explore />
            <TopCompanies/>
            <Blog/>
        </div>
        {/* col 3 */}
        <div className="mt-5 md:mt-0 rounded-xl col-span-3 flex flex-col ">
            <Subscribe/>
            <Courses/>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
