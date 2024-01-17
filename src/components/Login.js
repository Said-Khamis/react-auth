import React from "react";

const Login  = () => {
   return (
     <div className="container app_login" >
        <img src="/logo192.png" alt="" className="mb-1"/>
         <div className="loginForm" id="loginForm">
            <form className="formLogin">
                <div className="p-3">
                    <div className="form-group">
                        <label for="username" class="form-label">Username</label>
                        <input type="text"  id="username" className="form-control"  placeholder="Username or Email"  />
                    </div>
                    <div className="form-group mt-2">
                        <label for="Password" class="form-label">Password</label>
                        <input  type="password" id="Password" className="form-control"  placeholder="Password"   />  
                    </div>
                    <div className="form-group mt-3 text-end">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="mt-2 forget_password">
          Forgot password ? <a href="htt"> Sign Up</a>
        </div>
     </div>
   );
}
        
export default Login;