import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#1a1a1a',
      color: '#fff'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#e50914' }}>
        <h2 style={{ margin: 0 }}>CineVerse 🎬</h2>
      </Link>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Explore</Link>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      </nav>
    </header>
  );
}

export default Header;
