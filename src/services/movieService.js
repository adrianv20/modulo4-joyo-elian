
const API_KEY = import.meta.env.API_KEY ; // Demo key, reemplaza con tu propia key
const BASE_URL = 'https://www.omdbapi.com/';

export const movieService = {
  searchMovies: async ({ imdbID, title, type, year, plot = 'short' }) => {
    try {
      let url = `${BASE_URL}?apikey=${API_KEY}`;
      if (imdbID) {
        url += `&i=${encodeURIComponent(imdbID)}`;
        if (plot) url += `&plot=${plot}`;
      } else if (title) {
        url += `&t=${encodeURIComponent(title)}`;
        if (type) url += `&type=${type}`;
        if (year) url += `&y=${year}`;
        if (plot) url += `&plot=${plot}`;
      } else {
        throw new Error('Debes ingresar un ID o un título para buscar.');
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      const data = await response.json();
      if (data.Response === 'False') {
        throw new Error(data.Error || 'No se encontraron resultados');
      }
      // Si la búsqueda fue por ID o título, retorna un solo resultado como array
      return {
        movies: data.Search ? data.Search : [data],
        totalResults: data.totalResults ? parseInt(data.totalResults) : 1
      };
    } catch (error) {
      console.error('Error al buscar películas:', error);
      throw error;
    }
  },

  getMovieDetails: async (imdbID) => {
    try {
      const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
      );
      
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      
      const data = await response.json();
      
      if (data.Response === 'False') {
        throw new Error(data.Error || 'Película no encontrada');
      }
      
      return data;
    } catch (error) {
      console.error('Error al obtener detalles de la película:', error);
      throw error;
    }
  }
};
