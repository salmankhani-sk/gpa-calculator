// cgpa-calculation/page.tsx
"use client";

import { useState, FormEvent } from 'react';

export default function CGPA() {
  const [semesters, setSemesters] = useState<number[]>([0]); // Type as an array of numbers
  const [cgpa, setCgpa] = useState<string | null>(null); // Type as string or null

  const addSemester = () => setSemesters([...semesters, 0]); // Add another semester with a default value of 0

  const calculateCgpa = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const total = semesters.reduce((acc, sem) => acc + sem, 0); // Summing the semester GPAs
    const avgCgpa = total / semesters.length;
    setCgpa(avgCgpa.toFixed(2)); // Setting CGPA to two decimal points
  };

  const handleInputChange = (value: string, index: number) => {
    const newSemesters = [...semesters];
    newSemesters[index] = parseFloat(value) || 0; // Parse input as a float and handle invalid inputs
    setSemesters(newSemesters);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Calculate CGPA</h2>
      <form onSubmit={calculateCgpa} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        {semesters.map((sem, index) => (
          <div key={index} className="mb-4">
            <input
              type="number"
              value={sem || ''} // Display an empty string if value is 0 or invalid
              onChange={(e) => handleInputChange(e.target.value, index)}
              placeholder={`Semester ${index + 1} GPA`}
              min="0"
              max="4"
              step="0.01"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        ))}
        {semesters.length < 8 && (
          <button
            type="button"
            onClick={addSemester}
            className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition-colors"
          >
            Add Another Semester
          </button>
        )}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
        >
          Calculate CGPA
        </button>
      </form>
      {cgpa && <p className="mt-4 text-xl font-semibold text-gray-700">Your CGPA is: {cgpa}</p>}
    </div>
  );
}
