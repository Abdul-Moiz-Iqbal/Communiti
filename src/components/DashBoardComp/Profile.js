import CardDashBoard from "../../Ui/CardDashBoard";
import P from "../../Ui/Text/P";
import H6 from "../../Ui/Text/H6";
import H2 from "../../Ui/Text/H2";


//resources
import elipse from "../../resources/Ellipse 58.png";
import editPencil from "../../resources/edit-pencil.png";

const Profile = () => {
  return (
    <CardDashBoard styles={"w-full flex flex-col items-center justify-center "}>
        
      <img src={elipse} className="w-[100px] h-[100px] rounded-full" />
      <H2 styles={"mt-5 text-center"} text="Andrew Salesman" />
      <P styles={"text-center mt-1"} text="Junior UI Designer" />
      {/* // progress Bar  */}
      <div class="h-6 w-full mt-7 px-1 flex items-center rounded-xl bg-[#377DFF1A] dark:bg-neutral-600">
        <div class="h-4 w-[35%] rounded-xl bg-textBlue"></div>
      </div>

      <p className="mt-2 w-full text-[17px] font-medium leading-[24px] text-[#767676]">
        Your profile is <span className="font-bold">25%</span> get complete!
      </p>
      <button
        className={`mt-8 py-[0.7rem] w-full flex items-center justify-center rounded-3xl  font-medium text-[1rem] leading-6 text-textBlue  border border-blue-700 hover:bg-blue-700 hover:text-white`}
      >
        <img src={editPencil} />
        <span className="ml-3">Edit Profile</span>
      </button>
    </CardDashBoard>
  );
};

export default Profile;
