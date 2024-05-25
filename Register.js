import React, { useState } from 'react';
import pool from './db';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await pool.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
      setRegister(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
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
        <button type="submit">Register</button>
      </form>
      {register ? <p>Registered successfully!</p> : <p>Not registered</p>}
    </div>
  );
};

export default Register;