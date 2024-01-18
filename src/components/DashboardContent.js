import React from 'react'
import { AiTwotoneShopping  } from 'react-icons/ai';

const DashboardContent = () => {
  return (
    <div className='container-fluid mt-3'>
        <div className='row g-1 box_dash_parent'>
            <div className='col-sm-3'>
              <div className='box_dash'>
                <AiTwotoneShopping size={60}  color='white'/>
                <div className='order_item'>
                  <span> Order (s)</span>
                    <h2>20000</h2>
                  </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='box_dash'>
              <AiTwotoneShopping size={60}  color='white'/>
               <div className='order_item'>
                 <span> Order (s)</span>
                  <h2>20000</h2>
                </div>
              </div>
            </div>

            <div className='col-sm-3'>
              <div className='box_dash'>
              <AiTwotoneShopping size={60}  color='white'/>
               <div className='order_item'>
                 <span> Order (s)</span>
                  <h2>20000</h2>
                </div>
              </div>
            </div>

            <div className='col-sm-3'>
              <div className='box_dash'>
              <AiTwotoneShopping size={60}  color='white'/>
               <div className='order_item'>
                 <span> Order (s)</span>
                  <h2>20000</h2>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardContent;
