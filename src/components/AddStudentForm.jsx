import React, { useState } from "react";
import { UserPlus } from "lucide-react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter a valid student name.");
      return;
    }
    if (score === "" || isNaN(score) || score < 0 || score > 100) {
      setError("Please enter a valid score (0-100).");
      return;
    }
    addStudent(name.trim(), score);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <section className="form-section card-container animate-fade-in">
      <h2 className="section-title">
        <UserPlus size={20} className="text-gradient" />
        Add New Record
      </h2>
      <form className="add-form" onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}
        <div className="form-group">
          <label htmlFor="student-name">Full Name</label>
          <input
            id="student-name"
            type="text"
            className="form-input"
            placeholder="e.g. John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="student-score">Grade (0–100)</label>
          <input
            id="student-score"
            type="number"
            className="form-input"
            placeholder="e.g. 85"
            min="0"
            max="100"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add">
          Enroll Student
        </button>
      </form>
    </section>
  );
}

export default AddStudentForm;