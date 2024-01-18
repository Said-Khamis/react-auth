import React from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

const SignUp = () => {
  return (
    <div className='App'>
       <div class="container app_login">
           <div className="loginForm" id="loginForm">
                <form className="formLogin">
                    <div className="p-3">
                        <div className="form-group">
                            <label for="email" class="form-label">Email</label>
                            <input type="text"  id="email" className="form-control"  placeholder="Email"  />
                        </div>
                        <div className="form-group mt-2">
                            <label for="username" class="form-label">Username</label>
                            <input type="text"  id="username" className="form-control"  placeholder="Username"  />
                        </div>
                        <div className="form-group mt-2">
                            <label for="Password" class="form-label">Password</label>
                            <input  type="password" id="Password" className="form-control"  placeholder="Password"   />  
                        </div>
                        <div className="form-group mt-3 text-end">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-2 forget_password">
               <span> <Link to="/"> <BiArrowBack /> Back to Login </Link></span>
            </div>
       </div>
       
    </div>
  )
}

export default SignUp;
