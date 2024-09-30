import Link from "next/link";

export default function Home() {
  return ( <div className="flex flex-col min-h-screen bg-gray-100">
     <main className="flex-grow flex flex-col items-center justify-center text-center py-10">
        <h2 className="text-3xl font-bold mb-6">Welcome to the GPA Calculator</h2>
        <p className="text-lg mb-4">
          Easily calculate your Semester GPA and CGPA with our user-friendly tools.
        </p>
        <p className="text-lg mb-8">
          Whether you are a student looking to track your academic progress or someone helping a friend, you are in the right place!
        </p>
        <div className="space-y-4">
          <Link href="/semester-gpa">
            <button className="block w-64 bg-blue-500 text-white py-2 text-center rounded-lg shadow-lg hover:bg-blue-600">
              Calculate Semester GPA
            </button>
          </Link>
          <Link href="/cgpa-calculation">
            <button className="block w-64 bg-green-500 text-white py-2 text-center rounded-lg shadow-lg hover:bg-green-600">
              Calculate CGPA
            </button>
          </Link>
        </div>
      </main>
  </div>
  );
}
