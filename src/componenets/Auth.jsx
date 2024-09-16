// src/components/Auth.jsx
import React, { useState } from 'react';
import { login, signup } from '../services/apiService';
import styles from './Auth.module.css'

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLogin) {
      const result = await login(username, password);
      console.log('Login Result:', result);
    } else {
      const result = await signup(username, password);
      console.log('Signup Result:', result);
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className={styles.inputField}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className={styles.submitButton} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button className={styles.submitButton} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Go to Sign Up' : 'Go to Login'}
      </button>
    </div>
  );
};

export default Auth;