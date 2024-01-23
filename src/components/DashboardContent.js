import React, { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { 
  AiTwotoneShopping , 
  AiOutlineShoppingCart,
  AiOutlineUsergroupAdd   
} from 'react-icons/ai';

const DashboardContent = () => {
  const [users , setUser ] = useState([]);

  useEffect(() => {
      getUsers();
  }, []);

  const getUsers = async() => {
    await axios({
       url: "/users",
       method: "GET",
       responseType: "json",
    }).then((response) => {
      console.log("response");
      console.log(response);
      setUser(response.data);
     }).catch((error) => {
        console.log("Error");
        console.log(error);
     });
  }
 
  const userLists  = users.map((user , index) => {
    return (
       <tr>
         <td>{user.id}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.created_at}</td>
      </tr>
     );  
   });

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

      <div className='container mt-4'>
         <table className='table table-stripted'>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Order No</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
            </thead>
            <tbody>
               { userLists }
            </tbody>
         </table>
      </div>

    </div>
  );
}

export default DashboardContent;
