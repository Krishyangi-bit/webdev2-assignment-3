import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Aarav Sharma", score: 78 },
  { id: 2, name: "Priya Mehta", score: 35 },
  { id: 3, name: "Rohan Gupta", score: 55 },
  { id: 4, name: "Sneha Patel", score: 22 },
  { id: 5, name: "Karan Verma", score: 91 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // =========================
  // Update Score
  // =========================
  const updateScore = (id, newScore) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) }
          : student
      )
    );
  };

  // =========================
  // Add Student
  // =========================
  const addStudent = (name, score) => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    const newStudent = {
      id: Date.now(),
      name: trimmedName,
      score: Number(score),
    };

    setStudents((prevStudents) => [newStudent, ...prevStudents]);
  };

  // =========================
  // Delete Student
  // =========================
  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  // =========================
  // Filter + Search Logic
  // =========================
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = student.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : filter === "pass"
          ? student.score >= 40
          : student.score < 40;

      return matchesSearch && matchesFilter;
    });
  }, [students, searchTerm, filter]);

  // =========================
  // Analytics
  // =========================
  const topper = useMemo(() => {
    return [...students].sort((a, b) => b.score - a.score)[0];
  }, [students]);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        {/* Stats */}
        <StatsCards students={students} />

        {/* Dashboard Top Section */}
        <section className="dashboard-banner card-container">
          <div>
            <p className="dashboard-label">Student Performance Tracker</p>

            <h2 className="dashboard-title">
              Keep track of marks, progress & performance.
            </h2>

            <p className="dashboard-description">
              Monitor student scores in real time with a cleaner and smarter
              dashboard experience.
            </p>
          </div>

          <div className="topper-card">
            <span className="topper-label">🏆 Top Performer</span>

            <h3>{topper?.name}</h3>

            <p>{topper?.score}% Score</p>
          </div>
        </section>

        {/* Search + Filter */}
        <section className="controls-bar card-container">
          <input
            type="text"
            placeholder="Search student..."
            className="form-input search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="form-input filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Students</option>
            <option value="pass">Passed</option>
            <option value="fail">Failed</option>
          </select>
        </section>

        {/* Student Table */}
        <StudentTable
          students={filteredStudents}
          updateScore={updateScore}
          deleteStudent={deleteStudent}
        />

        {/* Add Student */}
        <AddStudentForm addStudent={addStudent} />
      </main>
    </div>
  );
}

export default App;
