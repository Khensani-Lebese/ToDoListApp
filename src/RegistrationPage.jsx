import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './api.jsx';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser({ username, email, password });
    navigate('/login');
  };

  const handleLoginNavigation = () => {
    navigate('/login');
  };

  return (
    
    <div className="register-container">
      
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <p>Registered?</p>
        <button onClick={handleLoginNavigation} className="login-button">Login</button>
      </form>
      
    </div>
  );
};

export default RegistrationPage;
