import axios from "axios";

const apiKey = "1fb26ac87aa6ff0175b0c78443858dba";
const apiUrl = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/popular?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter filmes populares:", error);
  }
};

export const getMovieDetails = async (movieId: any) => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/${movieId}?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter detalhes do filme ${movieId}:`, error);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/top_rated?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter filmes mais curtidos:", error);
  }
};

export const getMoviesByGenre = async (genreId: any) => {
  try {
    const response = await axios.get(
      `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
    );
    return response.data.results;
  } catch (error) {
    console.error(`Erro ao obter filmes do gênero ${genreId}:`, error);
  }
};

export const getMoviesRecomendationByMovieId = async (movie_id: any) => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/${movie_id}/recommendations?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error(`Erro ao obter recomendações do filme ${movie_id}:`, error);
  }
};
