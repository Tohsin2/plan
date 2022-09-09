import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./login.css"
import Signup from "../signup/Signup";


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showSignUp,setShowSignUp] = useState(false);

  const toogleSignup = ()=>{
    setLoading(true);
    
setTimeout(() =>{
  setLoading(false);
  setShowSignUp(true);
},2000)
   
  }
  return (
    <div className="login">
     {showSignUp ? (
      <Signup setShowSignUp={setShowSignUp}/>
     ):(
<div className="login_content">
        {loading && <div className="login_loading" />}
        <div className={'login_wrap $ {loading && "login_fade"}'}>
          <img
            className="login_img"
            src="https://th.bing.com/th/id/R.41ff70dcefa0753d56a681e93a1ac1e8?rik=yvFoxvxvXpo04w&pid=ImgRaw&r=0"
            alt="google"
          />

          <p className="login_title">Sign in</p>
          <p className="login_sub"> Continue with Gmail</p>

          <form className="login_form">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="login_text"
              type="email"
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="login_text"
              type="password"
            />
            <div className="login_info">
              Not your computer? Use guest mode to sign in privately?
              <a href="https://policies.google.com/privacy?hl=en-US">Learn More</a>
            </div>
            <div className="login_button">
              <Button className="login_btn" color="primary" onClick={toogleSignup}>
                Create Account
              </Button>

              <Button className="login_btn" color="primary" variant="contained">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
     )}
      
    </div>
  );
};

export default Login;
