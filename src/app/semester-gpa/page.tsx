// semester-gpa/page.tsx
"use client";

import { useState, FormEvent } from 'react';

const gradeMapping: Record<string, number> = {
  "A+": 4.00,
  "A": 3.67,
  "B+": 3.33,
  "B": 3.00,
  "C+": 2.50,
  "C": 2.00,
  "E": 0.00,
};

interface Subject {
  name: string;
  credit: string;
  score: string;
}

export default function SemesterGPA() {
  const [subjects, setSubjects] = useState<Subject[]>([{ name: "", credit: "", score: "" }]);
  const [gpa, setGpa] = useState<string | null>(null);

  const addSubject = () => {
    setSubjects([...subjects, { name: "", credit: "", score: "" }]);
  };

  const calculateGpa = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(subject => {
      const credit = parseFloat(subject.credit);
      const score = parseFloat(subject.score);
      let grade = "";

      if (score >= 90) grade = "A+";
      else if (score >= 80) grade = "A";
      else if (score >= 70) grade = "B+";
      else if (score >= 65) grade = "B";
      else if (score >= 56) grade = "C+";
      else if (score >= 50) grade = "C";
      else grade = "E";

      totalCredits += credit;
      totalPoints += credit * gradeMapping[grade];
    });

    const finalGpa = totalPoints / totalCredits;
    setGpa(finalGpa.toFixed(2)); // Show GPA up to 2 decimal places
  };

  const handleInputChange = (index: number, field: keyof Subject, value: string) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Calculate Semester GPA</h2>
      <form onSubmit={calculateGpa} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {subjects.map((subject, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={subject.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              placeholder="Subject Name"
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="number"
              value={subject.credit}
              onChange={(e) => handleInputChange(index, "credit", e.target.value)}
              placeholder="Credit Hours"
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              min="0"
              step="0.1"
              required
            />
            <input
              type="number"
              value={subject.score}
              onChange={(e) => handleInputChange(index, "score", e.target.value)}
              placeholder="Score"
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              min="0"
              max="100"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSubject}
          className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition-colors"
        >
          Add Another Subject
        </button>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
        >
          Calculate GPA
        </button>
      </form>
      {gpa && <p className="mt-4 text-xl font-semibold text-gray-700">Your GPA is: {gpa}</p>}
    </div>
  );
}
