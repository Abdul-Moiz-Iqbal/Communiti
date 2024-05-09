//Ui
import CardDashBoard from '../../Ui/CardDashBoard'
import H4 from '../../Ui/Text/H4'
import ButtonUi from '../../Ui/ButtonUi'

// resources 
import GreenSoul from "../../resources/company-5 1.png"
import Astha from "../../resources/company-2 1.png"

const TopCompaniesCard = () => {
  return (
    <CardDashBoard styles={'border w-full flex flex-col justify-center items-center'}>
        {/* company logo  */}
        <img src={GreenSoul} alt='Company' />
        {/* company name  */}
        <H4 text={'Company'} styles={'mt-3'}></H4>
        {/* reviews  */}
        <div className="mt-1 flex justify-center text-sm ">
          <svg
            className="h-4 w-4 mt-[0.1rem] text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          5.0 <span className='mx-1'>|</span> 426 Reviews
        </div>

        <ButtonUi title='View Jobs' styles='text-textBlue px-12 py-2 border-textBlue mt-5'/>

    </CardDashBoard>
  )
}

export default TopCompaniesCard