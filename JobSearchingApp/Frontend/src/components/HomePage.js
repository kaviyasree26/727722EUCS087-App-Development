import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
      <div class="hero-image">
        <img src="https://img.freepik.com/free-vector/job-vacancy-isometric-illustration-with-hr-manager-looking-laptop-screen-with-resume-applicants-vector-illustration_1284-81713.jpg?size=626&ext=jpg&ga=GA1.1.498403158.1722160667&semt=ais_hybrid"></img>
    </div>
        <div className="hero-content">
          <h1>Welcome to JobXplore !</h1>
          <p>Your dream job is just a few clicks away.</p>
          <Link to="/login" className="hero-button">
            Get Started
          </Link>
        </div>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>At JobXplore, we are committed to helping job seekers find the best job opportunities and employers find the best talent. With a vast network of companies and a wide range of job listings, we provide a platform that bridges the gap between job seekers and employers.</p>
      </div>

      <div className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <h3>1. Create an Account</h3>
            <p>Sign up and create your profile.</p>
          </div>
          <div className="step">
            <h3>2. Search for Jobs</h3>
            <p>Find jobs that match your skills and interests.</p>
          </div>
          <div className="step">
            <h3>3. Apply</h3>
            <p>Submit your application and get hired.</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature">
            <img src="data:image/png;base64,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" alt="Feature 1" />
            <h3>Advanced Search</h3>
            <p>Find jobs easily with our advanced search options.</p>
          </div>
          <div className="feature">
            <img src="data:image/png;base64,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" alt="Feature 2" />
            <h3>Profile Management</h3>
            <p>Manage your profile and keep it up to date.</p>
          </div>
          <div className="feature">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qG6F-OH_5a4BSfHKxOK_lr2020XQ7-I9eQ&s"></img>
            <h3>Job Alerts</h3>
            <p>Receive notifications about new job opportunities.</p>
          </div>
        </div>
      </div>

     
      <div className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"Job Portal helped me find my dream job. The process was simple and efficient."</p>
            <span>-Mark</span>
          </div>
          <div className="testimonial">
            <p>"Thanks to Job Portal, I was able to land a great job within a few weeks."</p>
            <span>-Charlie Wilson</span>
          </div>
          <div className="testimonial">
            <p>"The job alerts feature is fantastic. I never miss out on new opportunities."</p>
            <span>-Mary</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

