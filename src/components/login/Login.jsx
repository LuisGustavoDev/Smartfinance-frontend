import React, { useState } from 'react';
import loginImage from "../../assets/background-login.jpg";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegisterClick = () => {
    console.log('Redirecting to the registration page...');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <main>
          <form onSubmit={handleSubmit} className="login-form" aria-labelledby="login-heading">
            <fieldset>
              <legend className="sr-only" id="login-heading">Login into your account</legend>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit">Login</button>
            </fieldset>
          </form>
          <fieldset>
          <div className="register-container">
            <p>OR</p>
            <button onClick={handleRegisterClick} className="register-button">
              Register
            </button>
          </div>
          </fieldset>
        </main>
      </div>
    
      {/* Image section moved outside of login-container */}
      <section className="login-image-container">
        <img src={loginImage} alt="Login screen" className="login-image" />
      </section>
    </div>
  );
};

export default Login;
