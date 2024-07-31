
import React,{useState} from 'react';
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[errors,setErrors]=useState('');
    const navigate=useNavigate();

    const validateEmail=(email)=>{
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const validationForm=()=>{
        let formErrors={};
        let valid=true;

        if(!email){
            formErrors.email='Email is required';
            valid=false;
        }
        else if(!validateEmail(email)){
            formErrors.email='Invalid email format';
            valid=false
        }

        if(!password)
        {
            formErrors.password = 'Password is required';
            valid = false;
        }
        setErrors(formErrors);
    return valid;

    };
    const handleSubmitt = (event) => {
        event.preventDefault();
        if (validationForm()) {
          console.log('Login Successful');
          alert("successfully logged in")
          navigate('/home');
        }
      };


  return (
    <div className="backg">
    <form onSubmit={handleSubmitt} className="wrapper">
    <div>
        {/* <img src={lgimg} alt='loginimage'/> */}
        
            <h1>Login</h1>
            <div className="input-box">
                <input placeholder='Email*' value={email}
                onChange={(e)=>setEmail(e.target.value)} />

                <FaUser className='icon' />
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div className="input-box">
                <input  placeholder='Password*' value={password}
                 onChange={(e)=>setPassword(e.target.value)} />
                <FaLock className='icon'/>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>

            <div className='register-link'>
                <p>Don't have an account?<Link to={"/register"}>Register</Link></p>
            </div>
            </div>  
        </form>
        </div>
  )
}

export default LoginForm;