import React, { useState } from "react";
import { Check, XCircle, RefreshCcw } from "lucide-react";

function StudentRow({ student, updateScore }) {
  const [inputScore, setInputScore] = useState(student.score);
  const isPassing = student.score >= 40;

  const handleUpdate = () => {
    if (inputScore === "" || isNaN(inputScore)) return;
    updateScore(student.id, inputScore);
  };

  return (
    <tr className="student-row">
      <td className="td-name">{student.name}</td>
      <td className="td-score">{student.score}</td>
      <td>
        <span className={`badge ${isPassing ? "badge-pass" : "badge-fail"}`}>
          {isPassing ? <Check size={14} /> : <XCircle size={14} />}
          {isPassing ? "Passed" : "Failed"}
        </span>
      </td>
      <td className="td-update">
        <input
          type="number"
          className="score-input"
          value={inputScore}
          min="0"
          max="100"
          onChange={(e) => setInputScore(e.target.value)}
        />
        <button className="btn-update" onClick={handleUpdate} title="Save Grade">
          <RefreshCcw size={14} />
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;