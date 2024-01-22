import React, { useState , useEffect } from "react";
import Logo from "./wudgets/Logo";
import { Link , Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login  = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    const [userName , setUserName] = useState('');
    const [passWord, setpassWord] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
         if (token && token.length > 0) {
           setIsLoggedIn(true);
         } else {
           setIsLoggedIn(false);
         }
  
    },[isLoggedIn]);

    const handleUsernameChanged = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChanged = (event) => {
        setpassWord(event.target.value);
    }

    const login = async (event) => {
          event.preventDefault();
           
          setIsLoading(true);

          console.log("Credentilas");
          console.log({
            "username" : userName,
            "password" : passWord 
          });
   
        await axios({
            method: 'POST',
            url: "/login",
            responseType: "json",
            data: {
               username: userName,
               password: passWord,
            },
            withCredentials: false,
         }).then( function(response) {
             console.log("Responses");
             console.log(response.data);
             setIsLoading(false);
             if(response.data.status === true ){
                 localStorage.setItem("token", response.data.user.token);
                 localStorage.setItem("name", response.data.user.name);
                 localStorage.setItem("email", response.data.user.email);
                 //window.location.href = "/home";
                 navigate("/home");
             }
             setMessage(response.data.message);
         }).catch( function(error){
            console.log("Responses- Error");
            console.log(error);
            setIsLoading(false);
         });

    }

   if(isLoggedIn){
     return <Navigate to= "/home" />;
   }

   return (
    <div className="App">
       <div className="container app_login" >
           <Logo />
           <div className="loginForm" id="loginForm">
               <form className="formLogin">
                   <div className="p-3">
                      { message.length > 0 && (
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                             { message }
                         </div>
                      )}
                       <div className="form-group">
                           <label htmlFor="username" className="form-label">Email</label>
                           <input type="text" name="username" id="username" className="form-control"  
                               value={userName} 
                               onChange={handleUsernameChanged}
                               placeholder="Email"  />
                        </div>
                       <div className="form-group mt-2">
                           <label htmlFor="Password" className="form-label">Password</label>
                           <input  type="password" name="password" id="Password" 
                              value={passWord}
                              onChange={handlePasswordChanged}
                              className="form-control"  placeholder="Password"   />  
                       </div>
                       { isLoading ? (
                           <div className="form-group mt-3 text-end">
                               <button className="btn btn-primary text-end" type="button" disabled>
                               <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                   Loading...
                               </button>
                           </div>
                       ) : (
                          <div className="form-group mt-3 text-end">
                            <button className="btn btn-primary" onClick={ (e) =>  login(e) }>Login</button>
                          </div>
                       )}
                       
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