import Link from "next/link";
import { FaFacebook,  FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  

  return (
    <footer className="bg-gradient-to-br from-blue-100 to-purple-200 text-black py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        <div className="md:w-1/3 space-y-4">
          <p className="text-sm">
            Explore the latest insights and updates on technology, development,
            and innovation.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaFacebook size={24} />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaLinkedin size={24} />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaGithub size={24} />
            </Link>
          </div>
        </div>

        <nav className="md:w-1/3 text-center">
          <ul className="flex justify-center space-x-6 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

  
        <div className="md:w-1/3 text-right">
          <p className="text-sm">Contact us at:</p>
          <Link
            href="bintearshada@gmail.com"
            className="text-purple-700 hover:text-blue-500"
          >
            bintearshada@gmail.com
          </Link>
        </div>
      </div>
      <div className="mt-8 p-3 bg-purple-400 text-center text-sm text-blue-600">
        © Neha Arshad. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
