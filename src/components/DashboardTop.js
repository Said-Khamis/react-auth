import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineUser , AiOutlineMenuFold , AiOutlineLogout  } from 'react-icons/ai';



const DashboardTop = ({ handleCLick }) => {
  return (
   // <div className=" top_home_user">
   //    <div className="dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   //       <div className='top_home_user'>
   //          <div className='user_details'>
   //          <AiOutlineUser size={30} />
   //          <div className='user_infos'>
   //                <span>Said Khamis</span>
   //                <span>Admin</span>
   //             </div>
   //          </div>
   //          <div>
   //             <AiOutlineMenuFold  size={30} onClick={handleCLick}/>
   //          </div>
   //       </div>
   //    </div>
   //    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   //       <li><a class="dropdown-item" href="http://">Action</a></li>
   //       <li><a class="dropdown-item" href="http://">Another action</a></li>
   //       <li><a class="dropdown-item" href="http://">Something else here</a></li>
   //    </ul>
   // </div>
    <div className='top_home_user '>
         <div>
            <AiOutlineMenuFold  size={30} onClick={handleCLick}/>
         </div>
         <div className='dropdown'>
            <div className='user_details dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
               <AiOutlineUser size={30} />
               <div className='user_infos'>
                  <span>Said Khamis</span>
                  <span>Admin</span>
               </div>
            </div>
            <ul className="dropdown-menu">
               <li><a className="dropdown-item" href="http://">Profile</a></li>
               <li><a className="dropdown-item" href="http://">Another action</a></li>
               <li><a className="dropdown-item" href="http://">Something else here</a></li>
               <li><hr className="dropdown-divider" /></li>
               <li><a className="dropdown-item" href="http://">
                    <AiOutlineLogout /> Log Out
                  </a></li>
            </ul>
         </div>
     </div>
  )
}

export default DashboardTop
