import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

import '../Login/index.css'

const RegistrationForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    showFirstNameError: false,
    showLastNameError: false,
    showEmailError: false,
    showPasswordError: false,
    isFormSubmitted: false,
  });

  const { firstName, lastName, email, password, showFirstNameError, showLastNameError, showEmailError, showPasswordError, isFormSubmitted } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateField = (fieldName) => {
    return formData[fieldName].trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidFirstName = validateField('firstName');
    const isValidLastName = validateField('lastName');
    const isValidEmail = validateField('email');
    const isValidPassword = validateField('password');

    if (isValidFirstName && isValidLastName && isValidEmail && isValidPassword) {
        navigate('/home');
    } else {
      setFormData({
        ...formData,
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showEmailError: !isValidEmail,
        showPasswordError: !isValidPassword,
        isFormSubmitted: false,
      });
    }
  };

  const renderField = (fieldName, label, placeholder, showError) => {
    const className = showError ? 'name-input-field error-field' : 'name-input-field';

    return (
      <div className="input-container">
        <label className="input-label" htmlFor={fieldName}>
          {label}
        </label>
        <input
          type="text"
          id={fieldName}
          name={fieldName}
          className={className}
          value={formData[fieldName]}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={() => setFormData({ ...formData, [`show${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}Error`]: !validateField(fieldName) })}
        />
        {showError && <p className="error-message">Required</p>}
      </div>
    );

  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="registration-form-container">
        <img
        src="https://res.cloudinary.com/dyivs1j8u/image/upload/v1709120242/download-removebg-preview_1_fotw06.png"
        className="login-website-logo-mobile-img1"
        alt="website logo"
      />
      <h1 className="form-title">Registration</h1>
      <div className="view-container">
        
          <form className="form-container" onSubmit={handleSubmit}>
            {renderField('firstName', 'FIRST NAME', 'First name', showFirstNameError)}
            {renderField('lastName', 'LAST NAME', 'Last name', showLastNameError)}
            {renderField('email', 'EMAIL', 'Email', showEmailError)}
            {renderField('password', 'PASSWORD', 'Password', showPasswordError)}
            <button type="submit" className="submit-button">Submit</button>
          </form>
          <p className="login-link" onClick={handleLoginRedirect}>Already have an account? Click here to login.</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
