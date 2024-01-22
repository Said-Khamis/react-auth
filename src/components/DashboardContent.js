import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  AiTwotoneShopping , 
  AiOutlineShoppingCart,
  AiOutlineUsergroupAdd   
} from 'react-icons/ai';

const DashboardContent = () => {
  return (
    <div className='container-fluid mt-3'>
      <div className='row g-1 box_dash_parent'>

        <div className='col-sm-3'>
          <div className='box_dash box_dash_orders'>
            <AiTwotoneShopping size={60} color='white' />
            <div className='order_item'>
              <span> Orders</span>
              <h2>20,000</h2>
            </div>
          </div>
        </div>

        <div className='col-sm-3'>
          <div className='box_dash box_dash_users'>
            <AiOutlineShoppingCart size={60} color='white' />
            <div className='order_item'>
              <span> Items</span>
              <h2>20,000</h2>
            </div>
          </div>
        </div>

        <div className='col-sm-3'>
          <div className='box_dash box_dash_items'>
            <AiTwotoneShopping size={60} color='white' />
            <div className='order_item '>
              <span> Orders</span>
              <h2>20,000</h2>
            </div>
          </div>
        </div>

        <div className='col-sm-3'>
          <div className='box_dash box_dash_clients'>
            <AiOutlineUsergroupAdd size={60} color='white' />
            <div className='order_item '>
              <span> Clients</span>
              <h2>20,000</h2>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default DashboardContent;
