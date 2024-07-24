import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />}
    </div>
  );
};

export default App;