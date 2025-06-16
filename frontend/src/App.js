import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="main-container">
      <div className="content-box">
        <h1>My React + Node App</h1>
        <p>{message || 'Loading...'}</p>
      </div>
    </div>
  );
}

export default App;
