import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (response) => {
    try {
      // Send the Google token to the backend
      const res = await axios.post('http://localhost:5000/api/auth/google', {
        token: response.credential
      });

      // Store the JWT token in localStorage
      localStorage.setItem('token', res.data.token);

      // Redirect to admin page
      navigate('/admin');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin onSuccess={handleLogin} onError={(error) => console.log(error)} />
    </div>
  );
}

export default Login;
