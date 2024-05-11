import React from "react";
import CardDashBoard from "../../Ui/CardDashBoard";
import RecommendedJobCard from "./RecommendedJobCard";

// resources
import microsoft from "../../resources/microsoft.png";
import spotify from "../../resources/spotify.png";
import H2 from "../../Ui/Text/H2";
import BlueText from "../../Ui/Text/BlueText";

const RecommendedJobs = () => {
  const jobs = [
    {
      title: "Visual Designer",
      desc: "Tutree India Technologies..",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon...",
      company: "Spotify",
      time: "3 days ago",
      logo: spotify,
    },
    {
      title: "Visual Designer",
      desc: "Tutree India Technologies..",
      years: "3-6 Yrs",
      address: "Harsh villa pg sector 14 Gurgaon...",
      company: "Microsoft",
      time: "3 days ago",
      logo: microsoft,
    },
  ];
  return (
    <CardDashBoard styles={"w-full flex flex-col justify-between "}>
      <div className="mb-5 flex justify-between">
        <H2 text="Recommended Jobs"></H2>
        <BlueText text="View All" styles={""} />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-5">
        {jobs.map((job) => (
          <RecommendedJobCard
            title={job.title}
            desc={job.desc}
            years={job.years}
            address={job.address}
            company={job.company}
            time={job.time}
            logo={job.logo}
          />
        ))}
      </div>
    </CardDashBoard>
  );
};

export default RecommendedJobs;
