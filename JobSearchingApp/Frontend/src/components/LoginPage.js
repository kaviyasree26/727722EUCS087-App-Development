import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; 

function LoginPage() {
  const [loginType, setLoginType] = useState('jobSeeker');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let response;

      if (loginType === 'jobSeeker') {
        response = await axios.post('/api/jobseeker/login', { email, password });
      } else if (loginType === 'company') {
        response = await axios.post('/api/company/login', { email, password });
      } else if (loginType === 'admin') {
        response = await axios.post('/api/admin/login', { email, password });
      }

      if (response.data.success) {
        if (loginType === 'jobSeeker') {
          navigate('/jobs');
        } else if (loginType === 'admin') {
          navigate('/admin-dashboard');
        } else if (loginType === 'company') {
          const companyRoutes = {
            'techcorp@gmail.com': '/techcorp-dashboard',
            'innovate@gmail.com': '/innovate-dashboard',
            'creativemind@gmail.com': '/creativemind-dashboard',
            'cryptex@gmail.com': '/cryptex-dashboard',
            'cloudteam@gmail.com': '/cloudteam-dashboard',
            'devshand@gmail.com': '/devshand-dashboard',
            'nextgen@gmail.com': '/nextgen-dashboard',
            'teamcode@gmail.com': '/teamcode-dashboard'
          };

          if (companyRoutes[email]) {
            navigate(companyRoutes[email]);
          } else {
            alert('Invalid email or password');
          }
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div className="tabs">
          <button
            className={loginType === 'jobSeeker' ? 'active' : ''}
            onClick={() => setLoginType('jobSeeker')}
          >
            Job Seeker Login
          </button>
          <button
            className={loginType === 'company' ? 'active' : ''}
            onClick={() => setLoginType('company')}
          >
            Company Login
          </button>
          <button
            className={loginType === 'admin' ? 'active' : ''}
            onClick={() => setLoginType('admin')}
          >
            Admin Login
          </button>
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
