import React, { useEffect, useState } from 'react';
import DashboardTop from './DashboardTop';
import {  Navigate } from 'react-router-dom';
import DashboardContent from './DashboardContent';
import SideBar from './wudgets/SideBar';

const Home = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isClosed , setClosed ] = useState(false);

  function closeSideBar() {
    setClosed(!isClosed); 
  }

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
  },[isLoggedIn ]);

  

  if (!isLoggedIn) {
      return <Navigate replace to="/"/>;
  } 


  return (
    <div className='layout_dashboard'>
       <div className='container_wrap'>
           <SideBar isClosed={isClosed}/>  
           <div className='content'>
               <DashboardTop handleCLick={closeSideBar}/>
               <div className='content_body'>
                  <DashboardContent />
               </div>
           </div>
       </div>
    </div>
  );
}

export default Home;
