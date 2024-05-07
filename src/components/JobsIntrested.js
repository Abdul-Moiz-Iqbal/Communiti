// components
import JobCard from "./JobCard";

// resources
import google from '../resources/google.png'
import microsoft from '../resources/microsoft.png'
import spotify from '../resources/spotify.png'
import ButtonUi from "../Ui/ButtonUi";
const JobsIntrested = () => {
  const jobs = [
    {
      title: "Visual Design-Landing page team",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon 2 floor 253, +91 0123456789",
      company: "Google",
      time: "3 days ago",
      logo: google,
    },
    {
      title: "Visual Design-Landing page team",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon 2 floor 253, +91 0123456789",
      company: "Google",
      time: "3 days ago",
      logo: google,
    },
    {
      title: "Visual Design-Landing page team",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon 2 floor 253, +91 0123456789",
      company: "spotify",
      time: "3 days ago",
      logo: spotify,
    },
    {
      title: "Visual Design-Landing page team",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon 2 floor 253, +91 0123456789",
      company: "Microsoft",
      time: "3 days ago",
      logo: microsoft,
    },
    {
      title: "Visual Design-Landing page team",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon 2 floor 253, +91 0123456789",
      company: "Google",
      time: "3 days ago",
      logo: google,
    },
    {
      title: "Visual Design-Landing page team",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon 2 floor 253, +91 0123456789",
      company: "Spotify",
      time: "3 days ago",
      logo: spotify,
    },
  ];
  return (
    <div className="mt-10 w-[90%] md:w-[80%] mx-auto  flex flex-col md:flex-none  ">
      <h1 className="text-4xl font-semibold text-center">
        Jobs You may be intrested in
      </h1>
      {/* Job cards */}
      <div className="mt-10 grid grid-rows-1 md:grid-cols-3 gap-4">
        {jobs.map((job,index) => (
            <JobCard key={index} btn={index > 1?"bg-white border-blue-700  text-blue-700 hover:text-white ":"text-white"}  title={job.title} years={job.years} address={job.address} company={job.company} time={job.time} logo={job.logo} />
        ))}
      </div>
      <ButtonUi title={"View all jobs"} styles={'mt-14 mx-auto  md:ml-[43%] w-fit border-blue-600 bg-transparent text-blue-600 '}/>
      
      <h1 className="mt-20 text-4xl font-semibold text-center ">Top companies hiring now</h1>
      <p className="mt-6 text-center text-gray-400 text-xl">
        when you need us for improve your business, then come with us to help
        your business <br></br> have reach it, you just sit and feel that goal.
      </p>
    </div>
  );
};

export default JobsIntrested;
