import React from "react";
import "./login.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function Login(){

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login!");
    }

    
   const handleShowHidePassword = () => {
      setShowPassword(!showPassword);
   };

    return (
        <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center login-title">Login</div>
            <div className="col-12 form-group">
              <label>Username: </label>
              <input
                type="text"
                className="form-control login-input"
                placeholder="Enter your user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-12 form-group">
              <label>Password: </label>
              <div className="login-password">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control login-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={handleShowHidePassword}>
                  {showPassword ? (
                    <VisibilityIcon className="show-password" />
                  ) : (
                    <VisibilityOffIcon className="show-password" />
                  )}
                </span>
              </div>
            </div>
            <div className="col-12">
              <button className="btn-login" onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className="col-12">
              <a href="/" className="forgot-password">Forgot your password?</a>
            </div>
            <div className="col-12 text-center login-with mt-3">
              <span className="">Or login with:</span>
            </div>
            <div className="col-12 social-login">
              <FacebookIcon className="social-icon fb" />
              <GoogleIcon className="fab fa-google-plus social-icon gg" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login;