import { useState, useEffect } from "react";

export const useFavorites = () => {
  const FAVORITES_KEY = "favmovies";
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
  );

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error al guardar favoritos:", error);
    }
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(
        (fav) => fav.imdbID === movie.imdbID
      );

      if (isFavorite) {
        // Quitar de favoritos
        return prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        // Agregar a favoritos
        return [...prevFavorites, movie];
      }
    });
  };

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav.imdbID === movie.imdbID);
  };

  /*  const clearFavorites = () => {
    setFavorites([]);
  };
 */
  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};
