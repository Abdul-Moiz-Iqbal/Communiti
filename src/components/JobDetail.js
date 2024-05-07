// react-icoons
import { CiHeart } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiBuildingApartment } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { IoFlagOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

//Ui
import ButtonUi from "../Ui/ButtonUi";
import Card from "../Ui/Card";
import { SlLocationPin } from "react-icons/sl";

//component
import JobCard from "./JobCard";

//resources
import google from '../resources/google.png'
import microsoft from '../resources/microsoft.png'

const JobDetail = () => {
  const detail = [
    {
      title: "Experience",
      description: "Minimum 1 Year",
    },
    {
      title: "Employee type",
      description: "Full Time",
    },
    {
      title: "Position",
      description: "Mid Senior Level",
    },
    {
      title: "Offer Salary",
      description: "$2150/ Month",
    },
  ];

  const overView = [
    { title: "Job Title", desc: "Product Designer", icon: <BsPerson /> },
    { title: "Location", desc: "Gurgaon Haryana", icon: <BsPerson /> },
    {
      title: "Qualification",
      desc: "Bacherlor Degree",
      icon: <RiGraduationCapLine />,
    },
    {
      title: "Industry",
      desc: "Private Limited",
      icon: <PiBuildingApartment />,
    },
    {
      title: "Date Posted",
      desc: "Posted 2hrs ago",
      icon: <PiBuildingApartment />,
    },
  ];
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
      company: "Microsoft",
      time: "3 days ago",
      logo: microsoft,
    }
  ];
  const aboutCompany = [
    { title: "Comapny Size", desc: "5001-1000", icon: <LuUsers /> },
    { title: "Founded in", desc: "2011", icon: <IoFlagOutline /> },
    {
      title: "Phone",
      desc: "0123456789",
      icon: <FiPhoneCall />,
    },
    {
      title: "Email",
      desc: "loremipsum123@gmail.com",
      icon: <MdOutlineEmail />,
    },
    {
      title: "Website",
      desc: "www.communiti.com",
      icon: <CiGlobe />,
    },
  ];
  return (
    <div className="py-10 md:py-16 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-3xl font-bold md:text-[2.75rem] md:font-semibold md:tracking-wider">
            Senior Product Designer
          </h1>
          <div className="mt-2 md:mt-0 flex items-center">
            <IoMdPerson className="md:text-3xl text-gray-400" />
            <p className="ml-2 md:text-lg text-gray-400">8 Vacancy</p>
            <div className="ml-1 md:ml-8 px-1 py-[0]  md:text-lg md:tracking-wider font-semibold rounded  text-white bg-[#F8C546]">
              4.5
            </div>
            <div className="ml-1 flex">
              <svg
                className="h-6 w-6  text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-6 w-6  text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-6 w-6  text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-6 w-6  text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-6 w-6  text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex items-center">
          <ButtonUi
            title="Apply Now"
            styles={
              "px-28 py-5  h-fit text-white text-lg rounded-full bg-blue-500"
            }
          />

          <CiHeart className="ml-5 rounded-full   p-2  text-gray-400 text-5xl border-2 border-gray-100 hover:text-pink-800 hover:border-pink-800" />
        </div>
      </div>
      {/* Requiremenst */}
      <div className="py-14 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {detail.map((d) => (
          <Card title={d.title} description={d.description} />
        ))}
      </div>

      {/* job details */}
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-[60%]">
          <div className="md:w-[80%]">
            <h1 className="text-[1.25rem] md:text-3xl font-bold">Full Job Description</h1>
            <p className="mt-[0.5rem] md:mt-7 md:text-xl text-gray-400">
              As a Product Designer,you will wrok within a Product Delivery Team
              fused within Ux,engineering, product and data talent. You will
              help the team design beautiful interfaces that solve business
              challenges for oyr clients. We work with a number of Tier 1 banks
              on building web-based applications for AML, KYC and Sanctions List
              Managemnet workflows. This role is ideal if you are looking to
              segue your career into Fintech or Big Data arenas
            </p>
          </div>
          <div className="md:w-[80%] mt-5 md:mt-14 ">
            <h1 className="text-[1.25rem] md:text-3xl font-bold">Responsibilities</h1>
            <p className="mt-[0.5rem] md:mt-7 md:text-xl text-gray-400">
              As a Product Designer,you will wrok within a Product Delivery Team
              fused within Ux,engineering, product and data talent.
            </p>
            <div className="m-3 md:mt-6 flex flex-col md:gap-6 text-gray-400 ">
              <li className="">
                Have sound knowledge of commercial activities.
              </li>
              <li>
                Build next-generation web applications with a focus on the
                client side
              </li>
              <li>
                Work on multiple projects at once, and consistently meet draft
                deadlines
              </li>
              <li>
                have already graduated or are currently in any year of study
              </li>
              <li>
                Revise the work of previous designers to create a unified
                aesthetic for our brand materials.
              </li>
            </div>
            <ul></ul>
          </div>
          <div className="md:w-[80%] mt-5 md:mt-14 ">
            <h1 className="text-[1.25rem] md:text-3xl font-bold">Education</h1>

            <div className="mt-[0.5rem] md:mt-7 md:text-xl text-gray-400 flex flex-col md:gap-6  ">
              <li className="">
                B.C.A / M.C.A under National University course complete
              </li>
              <li>3 or more years of professional design experience</li>
              <li>Have already graduated or are currently in any year</li>

              <li>
                Advanced degree or equivalent experience in graphic and web
                design
              </li>
            </div>
            <ul></ul>
          </div>
          <div className="md:w-[80%] mt-5 md:mt-14 ">
            <h1 className="text-[1.25rem] md:text-3xl font-bold">Skills & Experience</h1>

            <div className="mt-[0.5rem] md:mt-7 md:text-xl text-gray-400 flex flex-col md:gap-6 ">
              <li className="">UnderStanding of key Desgin Principal</li>
              <li>Proeficiency With Html, Css,Bootstrap</li>
              <li>Wordpress: 1 year (Required)</li>
              <li>
                Experience designing and developing responsive design websites
              </li>
              <li>web design: 1 year (Preffered)</li>
            </div>
            <ul></ul>
          </div>
        </div>

        {/* Job overview */}
        <div className="mt-10 md:mt-0 md:w-[40%]">

          <div className="w-full px-6 py-8 rounded-2xl border-2 border-gray-300  ">
            <h1 className="text-3xl font-semibold">Job Overview</h1>
            <div>
              {overView.map((data) => (
                <div className="mt-12 flex">
                  <div className=" rounded border px-3 py-3 text-3xl text-gray-400">
                    {data.icon}
                  </div>
                  <div>
                    <div className=" ml-5 text-xl font-semibold ">
                      <div>{data.title}</div>
                      <div className="text-lg font-normal text-gray-500 ">
                        {data.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
          {/* about company  */}
          <div className="w-full mt-14 px-6 py-8 rounded-2xl border-2 border-gray-300  ">
            <h1 className="text-3xl font-semibold">About Company </h1>
            <div>
              {aboutCompany.map((data) => (
                <div className="mt-12 flex">
                  <div className=" rounded border px-3 py-3 text-3xl text-gray-400">
                    {data.icon}
                  </div>
                  <div>
                    <div className=" ml-5 text-xl font-semibold ">
                      <div>{data.title}</div>
                      <div className="text-lg font-normal text-gray-500 ">
                        {data.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* Similar Jobs  */}

      <div className="mt-14 ">
        <h1 className="text-3xl text-center md:text-left font-semibold">Similar Jobs</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-medium">
        {jobs.map((job,index) => (
            <JobCard key={index} btn={"border-blue-600 bg-transparent text-blue-600 hover:text-white"}  title={job.title} years={job.years} address={job.address} company={job.company} time={job.time} logo={job.logo} />
        ))}
        
        </div>
        <ButtonUi title={"View all jobs"} styles={'mt-16 mb-14 ml-[28%]  md:ml-[43%] w-fit border-blue-600 bg-transparent text-blue-600 '}/>
      </div>
      

    </div>
  );
};

export default JobDetail;
