import React, { useEffect, useState } from 'react';
import Logo from './wudgets/Logo';
import { AiFillHome , AiFillSetting , AiOutlineUsergroupAdd  } from "react-icons/ai";
import DashboardTop from './DashboardTop';
import { Link, Navigate } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import useWindowSize from '../custom/useWindowSize';
import SideBar from './wudgets/SideBar';

const Home = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
      const token = localStorage.getItem("token");
      console.log("token");
      console.log(token);
      console.log("Status");
      console.log(isLoggedIn);
       if (token && token.length > 0) {
         setIsLoggedIn(true);
       } else {
         setIsLoggedIn(false);
       }

  },[isLoggedIn]);

 

  if (!isLoggedIn) {
      return <Navigate replace to="/"/>;
  } 

  return (
    <div className='layout_dashboard'>
       <div className='container_wrap'>
           <SideBar />
           <div className='content'>
               <DashboardTop handleCLick={closeSideBar}/>
               <DashboardContent />
           </div>
       </div>
    </div>
  );
}

export default Home;
