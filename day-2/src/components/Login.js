import React, { useState } from 'react';

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[loginSuccess,setLoginSuccess]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    console.log('Logging in with', { email, password });
    // Reset form

    setEmail('');
    setPassword('');
    setLoginSuccess(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => onFormSwitch('signup')}>Don't have an account? Sign up</button>
      {loginSuccess && <p className="success-message">Login Successfully</p>}
    </div>
  );
};

export default Login;