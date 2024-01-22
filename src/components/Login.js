import React, { useState } from "react";
import Logo from "./wudgets/Logo";
import { Link } from "react-router-dom";
import axios from "axios";

const Login  = () => {

    const [userName , setUserName] = useState('');
    const [passWord, setpassWord] = useState('');
    
    const handleUsernameChanged = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChanged = (event) => {
        setpassWord(event.target.value);
    }

    const  login = (event) => {
          event.preventDefault();
           
          console.log("Credentilas");
          console.log({
            "username" : userName,
            "password" : passWord 
          });


        //   axios({
        //      method: 'get',
        //      url: "http://localhost:8000/ap1/posts/10/comments",
        //      responseType: "json",
        //      headers: {
        //         "Content-Type": 'application/json'
        //      }
        //   }
        //   ).then(function(response) {
        //       console.log("Responses");
        //       console.log(response);
        //   }).catch(function(error){
        //      console.log("Responses- Error");
        //      console.log(JSON.stringify(error));
        //   });

        axios({
            method: 'POST',
            url: "http://127.0.0.1:8000/ap1/login",
            responseType: "json",
            data: {
                username: userName,
                password: passWord,
            },
            withCredentials: false,
             headers: {
                 "Access-Control-Allow-Origin": "http://localhost:8000",
                 "Content-Type" : "application/json",
                 'Accept' : 'application/json',
                //  'Access-Control-Request-Headers' : 'access-control-allow-origin,content-type'
            }
         }
         ).then(function(response) {
             console.log("Responses");
             console.log(response);
         }).catch(function(error){
            console.log("Responses- Error");
            console.log(error);
         });

          
    }

   return (
     <div className="App">
        <div className="container app_login" >
            <Logo />
            <div className="loginForm" id="loginForm">
                <form className="formLogin">
                    <div className="p-3">
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" name="username" id="username" className="form-control"  
                             value={userName} 
                             onChange={handleUsernameChanged}
                             placeholder="Username or Email"  />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input  type="password" name="password" id="Password" 
                            value={passWord}
                            onChange={handlePasswordChanged}
                            className="form-control"  placeholder="Password"   />  
                        </div>
                        <div className="form-group mt-3 text-end">
                            <button className="btn btn-primary" onClick={
                                (e) =>  login(e)
                            }>Login</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-2 forget_password">
               Don't have account ? <span> <Link to="/signup"> Sign Up </Link></span>
            </div>
        </div>
     </div>
   );
}
        
export default Login;