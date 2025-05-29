import React from 'react';
import Logo from '../../components/wudgets/Logo';
import { AiFillHome , AiFillSetting , AiOutlineUsergroupAdd  } from "react-icons/ai";
import { Link } from 'react-router-dom';
import useWindowSize from '../../custom/useWindowSize';

const SideBar = ({ isClosed }) => {

 const size = useWindowSize();
  
  return (
    <>
        { !isClosed && size.width > 600 ?  (
                <div className='sidebar mt-0' >
                  <Link to="/">
                    <Logo width={120} height={120} />
                  </Link>
                    <div className='list_div'>
                        <Link to="/">
                            <div className='list_item'>
                              <AiFillHome size={20} />  <span> Home </span>
                            </div>
                        </Link>
                        <Link to="/manageusers">
                            <div className='list_item'>
                              <AiOutlineUsergroupAdd  size={20} />  <span> Manage User(s) </span>
                            </div>
                        </Link>
                        <Link to="/settings">
                            <div className='list_item'>
                                <AiFillSetting size={20} />  <span> Settings </span>
                            </div>
                        </Link>
                    </div>
                 </div>
               ) : (
                <div className='sidebar_1 mt-0' >
                  <div className='mt-3 mb-3'>
                     <Link to='/'>
                       <Logo width={40} height={40} />
                     </Link>
                  </div>
                  <div className='list_div'>
                      <div className='list_item'>
                        <AiFillHome size={30} />  
                      </div>
                      <div className='list_item'>
                        <AiOutlineUsergroupAdd  size={30} /> 
                      </div>
                      <div className='list_item'>
                        <AiFillSetting size={30} /> 
                      </div>
                  </div>
               </div>
               )
          }
    </>
  )
}

export default SideBar;
