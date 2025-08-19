import MovieList from "./MovieList";

const Favorites = ({ favorites, onToggleFavorite }) => {
  return (
    <section className="pt-10 mt-16">
      {favorites.length > 0 ? (
        <MovieList
          movies={favorites}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          title="Mis Películas Favoritas ❤️"
        />
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
