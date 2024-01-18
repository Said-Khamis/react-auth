import React from 'react'
import { AiOutlineUser , AiOutlineMenuFold  } from 'react-icons/ai';

const DashboardTop = ({ handleCLick }) => {
  return (
    <div className='top_home_user'>
         <div className='user_details'>
            <AiOutlineUser size={30} />
           <div className='user_infos'>
               <span>Said Khamis</span>
               <span>Admin</span>
            </div>
         </div>
         <div>
            <AiOutlineMenuFold  size={30} onClick={handleCLick}/>
         </div>
     </div>
  )
}

export default DashboardTop
