import React, { useState } from 'react';
import '../styles.css'; // Ensure you have this CSS file for styles

function SignupPage() {
  const [userType, setUserType] = useState('jobseeker');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="tabs">
          <button className={userType === 'jobseeker' ? 'active' : ''} onClick={() => setUserType('jobseeker')}>Job Seeker Signup</button>
          <button className={userType === 'company' ? 'active' : ''} onClick={() => setUserType('company')}>Company Signup</button>
        </div>
        <form onSubmit={handleSubmit}>
          {userType === 'jobseeker' ? (
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your password" required />
              <label htmlFor="course">Course Pursued</label>
              <input type="text" id="course" placeholder="Enter your course pursued" required />
              <label htmlFor="resume">Resume</label>
              <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="Enter your city" required />
              <label htmlFor="country">Country</label>
              <input type="text" id="country" placeholder="Enter your country" required />
            </div>
          ) : (
            <div className='form-group'>
              <label htmlFor="company-name">Company Name</label>
              <input type="text" id="company-name" placeholder="Enter company name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your password" required />
              <label htmlFor="logo">Company Logo</label>
              <input type="file" id="logo" accept=".png,.jpg,.jpeg" required />
            </div>
          )}
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
