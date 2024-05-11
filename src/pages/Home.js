import Trending from "../components/Trending";
import JobsIntrested from "../components/JobsIntrested";
import CompanyJobSwiper from "../components/CompanyJobSwiper";
import Testimonial from "../components/Testimonial";

import DreamJob from "../components/DreamJob";
import GetJobs from "../components/GetJobs";
import Header from "../components/Header";
import FooterNav from "../components/FooterNav";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <DreamJob />
      <Trending />
      <JobsIntrested />
      <CompanyJobSwiper />
      <GetJobs/>
      <Testimonial />
      <FooterNav/>
    </div>
  );
};

export default Home;
