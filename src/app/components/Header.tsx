// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800">GPA Calculator</h1>
        <nav className="space-x-6">
          <Link href="/semester-gpa">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all">
              Calculate Semester GPA
            </button>
          </Link>
          <Link href="/cgpa-calculation">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all">
              Calculate CGPA
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
