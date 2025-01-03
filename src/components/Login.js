import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onRoleSelect }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin('admin'); // Passing 'admin' as the role
    } else if (username === 'employee' && password === 'employee123') {
      onLogin('employee'); // Passing 'employee' as the role
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="blur-bg"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p className="login-description">Please log in to your account</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
