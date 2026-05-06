import React from 'react';
import { FileText } from 'lucide-react';
import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <section className="table-section card-container animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">
          <FileText size={20} className="text-gradient" /> 
          Current Grades Roster
        </h2>
      </div>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Overall Score</th>
              <th>Status</th>
              <th>Modify Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                updateScore={updateScore}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentTable;