import React , { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiOutlineUser , AiOutlineMenuFold , AiOutlineLogout  } from 'react-icons/ai';
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const DashboardTop = ({ handleCLick }) => {

   
   const [userData , setUserData] = useState({
      name: '',
      email: ''
   });

   useEffect(() => {
      setUserData({
         name: localStorage.getItem("name"),
         email: localStorage.getItem("email")
      });
   }, []);

   const handleLogout = () => {
      localStorage.clear();
   }

  return (
    <div className='top_home_user '>
         <div>
            <AiOutlineMenuFold  size={30} onClick={handleCLick}/>
         </div>
         <div className='dropdown'>
            <div className='user_details' data-bs-toggle="dropdown" aria-expanded="false">
               <AiOutlineUser size={30} />
               <div className='user_infos'>
                  <span>{userData.name}</span>
                  <span>Admin</span>
               </div>
            </div>
            <ul className="dropdown-menu">
               <li>
                  <a className="dropdown-item" href="http://">
                    <BsFillPersonFill /> Profile
                  </a>
               </li>
               <li><a className="dropdown-item" href="http://">Another action</a></li>
               <li><a className="dropdown-item" href="http://">Something else here</a></li>
               <li><hr className="dropdown-divider" /></li>
               <li>
                  <Link to="/" className='dropdown-item' onClick={handleLogout}>
                     <AiOutlineLogout /> Log Out
                  </Link>
               </li>
            </ul>
         </div>
     </div>
  );
}

export default DashboardTop;
