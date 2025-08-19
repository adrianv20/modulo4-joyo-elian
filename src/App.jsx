import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";
import { movieService } from "./services/movieService";
import { useFavorites } from "./hooks/useFavorites";
const recommendedTitles = [
  "Avengers",
  "Batman",
  "Matrix",
  "Inception",
  "Interstellar",
  "Star Wars",
  "Harry Potter",
  "Jurassic Park",
  "Toy Story",
  "Forrest Gump",
  "Hercules",
];

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const { favorites, toggleFavorite, clearFavorites } = useFavorites();

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const promises = recommendedTitles.map((title) =>
          movieService.searchMovies({ title })
        );
        const results = await Promise.all(promises);
        setRecommended(results.map((r) => r.movies[0]).filter(Boolean));
      } catch {
        setRecommended([]);
      }
    })();
  }, []);

  const handleSearch = async (params) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const result = await movieService.searchMovies(params);
      setMovies(result.movies);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-slate-900 via-violet-900 to-slate-800">
      <header className="pt-10 mb-2 text-center">
        <h1 className="flex items-center justify-center gap-2 mb-8 text-4xl font-bold md:text-5xl">
          <span role="img" aria-label="pelicula">
            🎬
          </span>{" "}
          Buscador de Películas
        </h1>
        <SearchBar onSearch={handleSearch} isLoading={loading} />
      </header>

      <main className="max-w-7xl px-4 mx-auto md:px-0">
        {loading && (
          <div className="flex items-center justify-center py-8">
            <span className="w-8 h-8 mr-3 border-t-2 border-b-2 border-indigo-400 rounded-full animate-spin"></span>
            <p className="text-lg text-indigo-300">Buscando películas...</p>
          </div>
        )}

        {error && (
          <div className="p-4 my-4 text-center text-red-800 bg-red-100 border border-red-300 rounded-lg">
            <p>❌ {error}</p>
          </div>
        )}

        {hasSearched && !loading && !error && (
          <MovieList
            movies={movies}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        )}
        <Favorites
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onClearFavorites={clearFavorites}
        />

        {/* Películas recomendadas */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-center text-indigo-400">
            Películas recomendadas
          </h2>
          <MovieList
            movies={recommended}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
            title=""
          />
        </section>
      </main>
    </div>
  );
}

export default App;
