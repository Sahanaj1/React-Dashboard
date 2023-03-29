import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ProgressBar from "../ProgressiveBar/ProgressiveBar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Widget = ({ type ,name,position,text,percentage}) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  return (
    <div className="widgetText">
    <div className="widget">
    {percentage ?     <ProgressBar percentage={percentage}/> :
     <div className="overSection">
    <div className="overCard">over</div>
    <div className="NumofTimes">
    <div className="number">19</div>
    <div className="times">times</div>
    </div>
    </div>}

    <div className="NameAndPos">
      <div className="username">
      {name}
      </div>
      <div className="position">{position}</div>

      </div>
      <ArrowForwardIosIcon/>
    </div>
    <div className="textBelowCard">
    {text}</div>
    </div>
  );
};

export default Widget;
