import React from 'react';
import { Users, CheckCircle, BarChart3 } from 'lucide-react';

function StatsCards({ students }) {
  const total = students.length;
  
  // Calculate how many students passed (score >= 40)
  let passed = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 40) {
      passed++;
    }
  }

  // Calculate average score
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
  }
  const average = total === 0 ? 0 : (totalScore / total).toFixed(1);

  return (
    <div className="stats-grid">
      
      {/* Total Enrolled Card */}
      <div className="stat-card animate-fade-in stat-blue">
        <div className="stat-icon-box">
          <Users size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-value">{total}</span>
          <span className="stat-label">Total Enrolled</span>
        </div>
      </div>

      {/* Passing Grades Card */}
      <div className="stat-card animate-fade-in stat-green">
        <div className="stat-icon-box">
          <CheckCircle size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-value">{passed}</span>
          <span className="stat-label">Passing Grades</span>
        </div>
      </div>

      {/* Average Score Card */}
      <div className="stat-card animate-fade-in stat-purple">
        <div className="stat-icon-box">
          <BarChart3 size={24} />
        </div>
        <div className="stat-info">
          <span className="stat-value">{average}</span>
          <span className="stat-label">Average Score</span>
        </div>
      </div>

    </div>
  );
}

export default StatsCards;