import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<h2 style={{ textAlign: 'center' }}>Explore Movies 🎬</h2>} />
            <Route path="/login" element={<h2 style={{ textAlign: 'center' }}>Login Page (Placeholder)</h2>} />
            <Route path="/register" element={<h2 style={{ textAlign: 'center' }}>Register Page (Placeholder)</h2>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
