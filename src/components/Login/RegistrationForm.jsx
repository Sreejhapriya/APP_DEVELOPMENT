import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!email) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      formErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!password) {
      formErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Registration Successful');
      alert("Successfully registered");
    }
  };

  return (
    <div className="backg">
      <form onSubmit={handleSubmit} className='wrapper'>
        <h1>Register</h1>
        <div className="input-box">
          <input value={email} placeholder='Username'
            onChange={(e) => setEmail(e.target.value)} />
          <FaUser className='icon' />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div className="input-box">
          <input value={password} placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)} />
          <FaLock className='icon' />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div className="input-box">
          <input placeholder='Confirm Password' value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
          <FaLock className='icon' />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        </div>
        <button type='submit'>Register</button>
        <div className='register-link'>
          <p>Already have an account?<Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
