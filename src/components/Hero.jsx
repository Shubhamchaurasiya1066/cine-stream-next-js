export default function Hero() {
  return (
    <section className="h-[80vh] flex items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-black"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-6xl font-black leading-tight mb-6">
          Stream Movies
          <br />
          In Ultra Experience
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Discover trending movies with server-side rendering,
          blazing performance, and cinematic design.
        </p>

        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition">
          Explore Movies
        </button>
      </div>
    </section>
  );
}