// pages/404.tsx
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you are looking for doesnt exist or has been moved.
      </p>
      <Link href="/" passHref>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow-lg hover:bg-blue-600 transition">
          <FaHome className="mr-2" /> Go Back Home
        </button>
      </Link>
    </div>
  );
}
