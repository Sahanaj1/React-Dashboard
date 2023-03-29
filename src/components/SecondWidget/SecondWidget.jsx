import React from 'react'
import ProgressBar from '../ProgressiveBar/ProgressiveBar';
import "./secondWidget.scss";
export const SecondWidget = () => {
  return (
    <div className='SecondWidgetContainer'>
    <div className='firstWidget'>
      <div className='progressBar1'>
        <ProgressBar percentage={100}/>
       </div>
      <div className='OperationalDiv1'>
        <div className='operational'><div className='operationalBox'></div> <div className='operationalText'>Operational</div></div>
         <div className='electrical'><div className='electricalBox'></div><div className='operationalText'>electrical</div></div>
        <div className='mechanical'><div className='mechanicalBox'></div><div className='operationalText'>mechanical</div></div>
        </div>
    </div>
    <div className='secondWidget'>
    <div className='progressBar2'>
    <ProgressBar percentage={100}/>
    </div>
    <div className='OperationalDiv2'>
    <div className='hotWork'><div className='hotWorkBox'></div> <div className='operationalText'>Hot work: 07%</div></div>
    <div className='workAtHeight'><div className='workAtHeightBox'></div><div className='operationalText'>work at height: 67%</div></div>
    <div className='confinedText'><div className='confinedBox'></div><div className='operationalText'>confined space: 26%</div></div>

    </div>
    </div>
    <div className='thirdWidget'>
    <div className='progressBar3'>
    <ProgressBar percentage={100}/>
    </div>
    <div className='OperationalDiv3'>
    <div className='createdText'><div className='createdBox'></div> <div className='operationalText'>Created: 07%</div></div>
    <div className='isolatedText'><div className='isolatedBox'></div><div className='operationalText'>Isolated: 67%</div></div>
    <div className='WipText'><div className='WipBox'></div><div className='operationalText'>WIP: 26%</div></div>

    </div>
    </div>
    </div>
  )
}
