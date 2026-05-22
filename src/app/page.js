import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MovieSearch from "@/components/MovieSearch";

import { getPopularMovies } from "@/lib/tmdb";

export default async function HomePage() {
  const data = await getPopularMovies();

  return (
    <main className="bg-[#050816] min-h-screen text-white">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto py-16">
        <h2 className="text-4xl font-bold px-6 mb-10">
          Popular Movies
        </h2>

        <MovieSearch movies={data.results} />
      </section>

      <Footer />
    </main>
  );
}