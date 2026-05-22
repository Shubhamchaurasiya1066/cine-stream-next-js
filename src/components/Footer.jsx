import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Logo Section */}
          <div>
            <h1 className="text-3xl font-black text-purple-500 mb-4">
              CineStream
            </h1>

            <p className="text-gray-700 leading-7">
              Premium movie discovery platform built with
              Next.js 15, Server Side Rendering, and
              modern cinematic UI experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-purple-400 transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-purple-700 transition cursor-pointer">
                Popular Movies
              </li>

              <li className="hover:text-purple-700 transition cursor-pointer">
                Trending
              </li>

              <li className="hover:text-purple-700 transition cursor-pointer">
                Top Rated
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-bold mb-5">
              Connect
            </h2>

            <div className="flex gap-5">
              
              <a
                href="#"
                className="
                  bg-white/5
                  border
                  border-white/10
                  p-4
                  rounded-2xl
                  hover:bg-purple-600
                  transition
                "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="
                  bg-white/5
                  border
                  border-white/10
                  p-4
                  rounded-2xl
                  hover:bg-pink-600
                  transition
                "
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="
                  bg-white/5
                  border
                  border-white/10
                  p-4
                  rounded-2xl
                  hover:bg-blue-600
                  transition
                "
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-700 text-sm">
          © 2026 CineStream . Built with Next.js 15.
        </div>
      </div>
    </footer>
  );
}