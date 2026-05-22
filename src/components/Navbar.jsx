import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-3xl font-bold text-purple-500 cursor-pointer hover:scale-105 transition duration-300">
          CineStream
        </h1>

        {/* NAV LINKS */}
        <div className="flex gap-8 text-sm text-gray-300 font-medium">
          
          <Link
            href="/"
            className="
              relative
              hover:text-white
              transition
              duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Home
          </Link>

          <Link
            href="/"
            className="
              relative
              hover:text-white
              transition
              duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Movies
          </Link>

          <Link
            href="/"
            className="
              relative
              hover:text-white
              transition
              duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Trending
          </Link>
        </div>
      </div>
    </nav>
  );
}