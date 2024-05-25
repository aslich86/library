import React, { useState } from 'react';
import pool from './db';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await pool.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
      if (result.length > 0) {
        setLogin(true);
      } else {
        console.error('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {login ? <p>Logged in successfully!</p> : <p>Not logged in</p>}
    </div>
  );
};

export default Login;