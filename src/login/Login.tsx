import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import "./login.css";
import { useForm } from "react-hook-form";
import { api } from "../api";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [load, setLoading] = useState(false);

  const handleEmailCheck = async () => {
    try {
      setLoading(true);

      // Simulate an asynchronous operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Perform your email validation and password matching logic here
      const isValidUser = validateUser(email, password);

      if (isValidUser) {
        setSuccessMessage('Login successful!'); // Set success message
        setErrorMessage(''); // Clear any previous error message
        navigate("/home"); // Navigate to the home page after successful login
      } else {
        setSuccessMessage(''); // Clear success message
      }
    } catch (error) {
      console.error('Error checking email:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const validateUser = (email, password) => {
    // Simulated database with email and password pairs
    const usersDatabase = [
      { email: '204g1a0591@srit.ac.in', password: '123456' },
      { email: 'user2@example.com', password: 'password2' },
      
      // Add more users as needed
    ];

    const user = usersDatabase.find(user => user.email === email);

    if (user) {
      // Email is in the database, check if the password matches
      if (user.password === password) {
        return true; // Email and password match
      } else {
        setErrorMessage('Wrong password');
        return false; // Password doesn't match
      }
    } else {
      setErrorMessage('Invalid email');
      return false; // Email not found in the database
    }
  };

  return (
    <div className="bigc">
      <div className='container'>
        <div className='header'>
          <div className='text'>Welcome!</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className="input">
            <input type="email" placeholder='email id' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="forgotpassword">
          forgot password?
          <Link to="/forgotpassword"> Click Here!</Link> {/* Link to the appropriate page */}
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="submitcontainer">
          <div className="submit" onClick={handleEmailCheck}>
            {load ? 'Wait....' : 'Log in'}
          </div>
          <div className="submit">
            <Link to="/signup">Sign Up</Link> {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
