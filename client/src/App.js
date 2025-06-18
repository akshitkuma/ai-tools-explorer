// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllTools from './pages/AllTools';
import MyFavorites from './pages/MyFavorites';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Router>
      <nav style={{ padding: '10px', background: darkMode ? '#222' : '#eee' }}>
        <Link to="/">All Tools</Link> | <Link to="/favorites">My Favorites</Link>
        <button onClick={() => setDarkMode(prev => !prev)} style={{ float: 'right' }}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<AllTools />} />
        <Route path="/favorites" element={<MyFavorites />} />
      </Routes>
    </Router>
  );
}

export default App;
