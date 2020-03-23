import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
  
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    
    return (
      <nav className="navbar">
        <h1>Women's World Cup Players</h1>
        <div className="lights">
          <h6>Light Mode</h6>
          <div className="dark-mode-toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
          </div>
          <h6>Dark Mode</h6>
        </div>
      </nav>
    );
  };

export default Nav;