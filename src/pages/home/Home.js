import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import CalendarComponent from "../../components/BigCalendar/BigCalendar"
import { SecondWidget } from "../../components/SecondWidget/SecondWidget";
import { Wallet } from "../../components/wallet/Wallet";
import { ThirdWidget } from "../../components/thirdWidget/ThirdWidget";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <div className="firstCard"> <Widget type="user" percentage={'50'} name={'Ankita Jha'} position={'Mechanical Maintenance'} text={'Maximum permits created in last month'}/></div>
         
        <div className="firstCard"> <Widget type="order"  name={'Rahul Yadav'} position={'Electrical Maintenance'} text={'Maximum LOTO done last month'}/></div>
        <div className="CalendarComp1"> <CalendarComponent/> </div> 
       
        </div>
       <div className="bottomWidget">
       <SecondWidget/>
       <div className="walletContainer">
       <Wallet money={'200$'} percent={'80%'}/>
       <Wallet money={'215$'} percent={'10%'}/>
       <Wallet money={'100$'} percent={'8%'}/>
       <Wallet money={'50$'} percent={'54%'}/>
       </div>
       <ThirdWidget/>
       </div>
       
      </div>
    </div>
  );
};

export default Home;
