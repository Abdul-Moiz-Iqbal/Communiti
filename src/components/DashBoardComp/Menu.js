//Ui
import CardDashBoard from '../../Ui/CardDashBoard'

// resources
import homeIcon from "../../resources/Home-Outlined.png"
import logoIcon from "../../resources/CoLogo.png"
import userIcon from "../../resources/user-outlined.png"
import buildingIcon from "../../resources/building-outlined.png"
import bagIcon from "../../resources/bag-Outlined.png"
import P from '../../Ui/Text/P'

const Menu = () => {
  return (
    <CardDashBoard styles={"mt-5 w-full flex flex-col"}>
        {/* Navigation */}
        <div className='border-b pb-3 flex items-center'>
            <img src={homeIcon} />
            <P text='DashBoard' styles={"ml-3 font-semibold"}></P>
        </div>
        <div className='border-b py-4 flex items-center'>
            <img src={bagIcon} />
            <P text='Jobs' styles={"ml-3 font-semibold"}></P>
        </div>
        <div className='border-b py-4 flex items-center'>
            <img src={buildingIcon} />
            <P text='Company' styles={"ml-3 font-semibold"}></P>
        </div>
        <div className='border-b py-4 flex items-center'>
            <img src={userIcon} />
            <P text='Candidate' styles={"ml-3 font-semibold"}></P>
        </div>
        <div className='border-b py-4 flex items-center'>
            <img src={logoIcon} />
            <P text='Community' styles={"ml-3 font-semibold"}></P>
        </div>
    </CardDashBoard>
  )
}

export default Menu