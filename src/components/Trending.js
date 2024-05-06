import React from "react";

import JobsT from "./JobsT";

const Trending = () => {
  return (
    <div className=" py-8">
      <h1 className="text-4xl font-semibold text-center ">Trending search</h1>
      <p className="mt-5 text-center text-gray-400 text-xl">
        when you need us for improve your business, then come with us to help
        your business <br></br> have reach it, you just sit and feel that goal.
      </p>

      <div className="grid grid-row-5">
        <JobsT/>
      </div>
    </div>
  );
};

export default Trending;
