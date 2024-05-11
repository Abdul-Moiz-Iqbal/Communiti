// resources
import banner from "../resources/microsoftBanner.png";

//Components
import JobDetail from "../components/JobDetail";
import Header from "../components/Header";
import FooterNav from "../components/FooterNav";


const JobDescription = () => {
  return (
    <div className="w-full">
      <Header/>
      <img src={banner} className="w-full" alt="Microsoft" />
      <div className="w-[90%] mx-auto ">
        <JobDetail/>
      </div>
      <FooterNav/>
    </div>
  );
};

export default JobDescription;
