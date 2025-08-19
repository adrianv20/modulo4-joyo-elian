import MovieList from "./MovieList";

const Favorites = ({ favorites, onToggleFavorite, onClearFavorites }) => {
  return (
    <section className="pt-10 mt-16">
      {favorites.length > 0 ? (
        <>
          <div className="flex justify-end mb-4">
            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition"
              onClick={onClearFavorites}
            >
              Limpiar todos los favoritos
            </button>
          </div>
          <MovieList
            movies={favorites}
            onToggleFavorite={onToggleFavorite}
            favorites={favorites}
            title="Mis Películas Favoritas ❤️"
          />
        </>
      ) : (
        <div className="w-full py-12 text-center rounded-xl">
          <h2 className="mb-2 text-2xl font-bold text-indigo-400">
            Mis Películas Favoritas ❤️
          </h2>
          <p className="mb-2 text-slate-400">
            No tienes películas favoritas aún.
          </p>
          <p className="text-slate-500">
            ¡Busca películas y agrégalas a tu lista!
          </p>
        </div>
      )}
    </section>
  );
};

export default Favorites;
