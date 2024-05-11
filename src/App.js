
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import JobDescription from './pages/JobDescription';
import FooterNav from './components/FooterNav';
import SignUp from './pages/SignUp';
import DashBoard from './pages/DashBoard';
import DashBoardHeader from './components/DashBoardComp/DashBoardHeader'
function App() {
  return (
    <div className="font-DMSans overflow-x-hidden">
      {/* <Header/> */}
     {/* <Home/> */}
    {/* <JobDescription/> */}
    {/* <SignUp/> */}
    <DashBoardHeader/>
    <DashBoard/>
    <FooterNav/>
    </div>
  );
}

export default App;
