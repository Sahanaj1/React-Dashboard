import React from 'react'
import LineGraph from '../pieChart/LineGraph'
import "./wallet.scss"
export const Wallet = ({percent,money}) => {
  return (
   <div className='WalletBox'>
   <div className='myWallet'>
   <div className='walletTitle'>My wallet</div>
   <div className='amount'>{money}</div>
   <div className='greenBar'><span className='Bargreen'> {percent}</span> <span className='Lastweek'>Since last week</span></div>
   </div>
   <div className='graph'>
   <LineGraph/>
   </div>
   </div>
  )
}
