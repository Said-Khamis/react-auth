import React , { useState } from 'react'
import SideBar from './wudgets/SideBar'
import DashboardTop from './DashboardTop'

const Layout = ({ children }) => {

  const [isClosed , setClosed ] = useState(false);

  function closeSideBar() {
    setClosed(!isClosed); 
  }

  return (
    <div className='layout_dashboard'>
    <div className='container_wrap'>
        <SideBar isClosed={isClosed}/>  
        <div className='content'>
            <DashboardTop handleCLick={closeSideBar}/>
            <div className='content_body'>
               {children}
            </div>
        </div>
    </div>
 </div>
  )
}

export default Layout
