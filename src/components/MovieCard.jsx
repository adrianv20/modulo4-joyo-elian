import { useState } from "react";

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 150;
  const handleToggleFavorite = () => {
    onToggleFavorite(movie);
  };

  console.log("MovieCard rendered:", movie);
  const posterUrl =
    movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.png";

  return (
    <div className="rounded-xl shadow-lg overflow-hidden flex flex-col h-full hover:scale-[1.03] transition-transform bg-slate-800">
      <div className="flex items-center justify-center w-full h-72 mt-8">
        <img
          src={posterUrl}
          alt={`${movie.Title} poster`}
          className="object-contain aspect-[1/1]"
          onError={(e) => {
            e.target.src = "/placeholder-movie.png";
          }}
        />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="mb-1 text-lg font-bold text-center text-white truncate">
          {movie.Title}
        </h3>
        <p className="mb-2 text-sm text-slate-400">
          {expanded ? movie.Plot : `${movie.Plot.substring(0, limit)}... `}
          {movie.Plot.length > limit && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-400 hover:underline ml-1"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </p>
        <p className="mb-1 text-sm text-violet-400">
          Ranking:
          <span className="ml-2 text-white bg-violet-800 rounded px-2">
            {movie.imdbRating}
          </span>
        </p>
        <p className="mb-1 text-sm text-slate-400">Genero: {movie.Genre}</p>
        <p className="mb-1 text-sm text-slate-400">Fecha: {movie.Year}</p>
        <p className="mb-2 text-xs text-indigo-400 capitalize">
          Tipo: {movie.Type}
        </p>
        <p className="mb-1 text-sm text-slate-400">Duración: {movie.Runtime}</p>
        <p className="mb-1 text-sm text-slate-400">Idioma: {movie.Language}</p>
        <button
          className={`mt-auto px-4 py-2 rounded-lg font-semibold transition border ${
            isFavorite
              ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
              : "bg-slate-800 text-indigo-400 border-indigo-600 hover:bg-indigo-700 hover:text-white"
          }`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? "❤️ Quitar de favoritos" : "🤍 Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
