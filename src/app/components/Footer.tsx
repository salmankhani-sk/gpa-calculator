// components/Footer.tsx
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/salman-khan-84924b24a/"
            className="hover:text-blue-400 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://instagram.com/salmankhani_sk"
            className="hover:text-pink-400 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="mr-2" /> Instagram
          </a>
          <a
            href="https://twitter.com/salmankhani_sk"
            className="hover:text-blue-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} className="mr-2" /> Twitter/X
          </a>
          <a
            href="https://github.com/salmankhani-sk"
            className="hover:text-gray-400 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="mr-2" /> GitHub
          </a>
        </div>
        <div className="mt-6">
          <a
            href="https://salmankhani.vercel.app/"
            className="hover:text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Portfolio
          </a>
        </div>
        <p className="mt-6 text-gray-400">
          &copy; {new Date().getFullYear()} Salman Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
