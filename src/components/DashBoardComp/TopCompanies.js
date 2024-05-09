//Ui
import CardDashBoard from "../../Ui/CardDashBoard";
import H2 from "../../Ui/Text/H2";
import BlueText from "../../Ui/Text/BlueText";
import TopCompaniesCard from "./TopCompaniesCard";

// resources
import microsoft from "../../resources/microsoft.png";
import spotify from "../../resources/spotify.png";


const TopCompanies = () => {
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
        }
    ]
  return (
    <CardDashBoard styles={"mt-5 w-full flex flex-col justify-between "}>
      <div className="mb-5 flex justify-between">
        <H2 text="Top Companies"></H2>
        <BlueText text="View All" styles={""} />
      </div>
      <div className="w-full flex justify-between gap-5">
       <TopCompaniesCard/>
       <TopCompaniesCard/>
       
      </div>
    </CardDashBoard>
  )
}

export default TopCompanies