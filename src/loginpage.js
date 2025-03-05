import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
import userIcon from "./usericon.jpeg";
import googleIcon from "./googleimage.png";
import logo from "./logo.png";

const LoginPage = () => {
  const navigate = useNavigate();
  
  // State for form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Login Successful!");
        navigate("/boardPage");  // Navigate to the dashboard
      } else {
        alert("Login Failed: " + data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="loginp-container">
      {/* Navbar */}
      <header className="navbar-loginp">
        <div className="logo">
          <img src={logo} alt="Task Nest Logo" />
          <span>Task Nest</span>
        </div>
        <nav>
          <ul className="nav-links-loginp">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutPage">About</a></li>
            <li><a href="/contactPage">Contact</a></li>
            <li><button className="login-btn-loginp" onClick={() => navigate("/signin")}>Sign In</button></li>
          </ul>
        </nav>
      </header>

      {/* Login Box */}
      <div className="login-box-loginp">
        <div className="login-header-loginp">
          <img src={userIcon} alt="User Icon" className="user-icon-loginp" />
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><p></p>

          <button type="submit" className="sign-in-btn-loginp">Login</button>

          <button className="google-signin-loginp">
            <img src={googleIcon} alt="Google Icon" className="google-icon-loginp" />
            Sign in with Google
          </button>
          
          <button className="google-signin-loginp" onClick={() => navigate("/signin")}>
           Don't have an account?
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;