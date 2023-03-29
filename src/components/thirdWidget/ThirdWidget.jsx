import React from 'react'
import "./thirdWidget.scss"
import BarChart from "../newChart/NewChart"
import CircleChart from '../pieChart/PieChart'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
export const ThirdWidget = () => {
  return (
    <div className='ThirdWidgetContainer'>
    <div className='LeftBox'>

    <div className='TitleBox'>
    <div className='PermitBox'>
        <span className='TotalPermits'>Total Permits Made</span>
        <span className='PemritNum'>89 10% <ArrowCircleUpIcon/></span>
        </div>
        <div className='PermitBox'>
        <span className='TotalPermits'>Avg PTW Downtime</span>
        <span className='PemritNum'>25min 18% <ArrowCircleUpIcon/></span>
        </div>
    </div>
   
    <BarChart/>

    </div>
<div className='RightBox'>
<CircleChart/>
</div>
    </div>
  )
}
