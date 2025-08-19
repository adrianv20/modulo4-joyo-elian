import MovieCard from "./MovieCard";

const MovieList = ({
  movies,
  onToggleFavorite,
  favorites,
  title = "Resultados de búsqueda",
}) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="w-full py-8 text-center text-slate-400">
        <p>No se encontraron películas</p>
      </div>
    );
  }

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav.imdbID === movie.imdbID);
  };

  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-center text-indigo-400">
        {title}
      </h2>
      <div className="grid grid-cols-5 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
