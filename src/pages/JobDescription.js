// resources
import banner from "../resources/microsoftBanner.png";

//Components
import JobDetail from "../components/JobDetail";


const JobDescription = () => {
  return (
    <div className="w-full">
      <img src={banner} className="w-full" alt="Microsoft" />
      <div className="w-[90%] mx-auto ">
        <JobDetail/>
      </div>
    </div>
  );
};

export default JobDescription;
