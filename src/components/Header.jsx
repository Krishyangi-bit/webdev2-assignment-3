import React from 'react';
import { GraduationCap } from 'lucide-react';

function Header() {
  return (
    <header className="header animate-fade-in">
      <div className="navbar-wrapper">
        <div className="header-icon-container">
          <GraduationCap size={32} strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="header-title">Student Scoreboard</h1>
          <p className="header-subtitle">Academic Performance Tracking System</p>
        </div>
      </div>
    </header>
  );
}

export default Header;