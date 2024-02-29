import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './index.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();



  const onChangeUsername = event => {
    setShowSubmitError(false);
    setUsername(event.target.value);
  };

  const onChangePassword = event => {
    setShowSubmitError(false);
    setPassword(event.target.value);
  };

  const onSubmitFailure = errorMsg => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const submitForm = event => {
    event.preventDefault();

    if (!username && !password) {
      onSubmitFailure('Please enter both username and password.');
    } else if (!username) {
      onSubmitFailure('Please enter a username.');
    } else if (!password) {
      onSubmitFailure('Please enter a password.');
    } else {
        navigate('/home');
    }
  };

  const handleRegisterRedirect = () => {
    
    navigate('/registration');
  };


  return (
    <div className="login-form-container">
      <img
        src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1709120242/download-removebg-preview_1_fotw06.png"
        className="login-website-logo-mobile-img"
        alt="website logo"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1709120242/download-removebg-preview_1_fotw06.png"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={onChangeUsername}
            placeholder="Type your username"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={onChangePassword}
            placeholder="Type your password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        <p className="login-link" onClick={handleRegisterRedirect}>Not registered? Click here to register.</p>
      </form>
    </div>
  );
}

export default LoginForm;
