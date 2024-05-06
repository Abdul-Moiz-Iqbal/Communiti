import React from "react";
import ButtonUi from "../Ui/ButtonUi";

const JobsT = () => {
  const jobs = [
    "Remote job",
    "UI/UX Design",
    "Product Design",
    "Development",
    "Work From Home",
    "UI/UX Design",
    "Product Design",
    "Development",
  ];

  const lastjobs = jobs.slice(5)
  return (
    <div className="w-[70%] mx-auto mt-16 flex flex-wrap justify-center gap-7 ">
      {jobs.slice(0,-3).map((job) => (
        <div
          key={job}
          class="px-8  py-[0.58rem] rounded-3xl font-[600] text-center text-[1rem] border-2 border-slate-200 bg-transparent text-stone-600"
        >
          {job}
        </div>
      ))}

      {lastjobs.map((job)=> (
        <div
        key={job}
        class="px-8  py-[0.58rem] rounded-3xl font-medium text-center text-[1rem] border-2 border-slate-200 bg-transparent text-stone-600"
      >
        {job}
      </div>
      ))}
    </div>
  );
};

export default JobsT;
