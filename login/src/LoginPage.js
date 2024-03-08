// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login clicked with username:', username, 'and password:', password);
  };

  return (
    <div id="login-form">
      <form onSubmit={handleLogin}>
        <h1>Welcome to Visiting Angels</h1>
        <label>
          <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <input placeholder="Passwrod" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
