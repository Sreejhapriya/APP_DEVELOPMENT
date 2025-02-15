import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Login Successful');
      alert("successfully logged in")
    //   navigate('/login-success');
    }
  };

  return (
      <form onSubmit={handleSubmit} className="form-container">
        
      <div>
        <h2>LOGIN</h2>
        <label>Email:</label>
        <input
       
          placeholder='Email*'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          
          placeholder='Password*'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <div className="button-container">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;