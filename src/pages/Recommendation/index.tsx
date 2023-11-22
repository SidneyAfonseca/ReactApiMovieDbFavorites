import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getMoviesRecomendationByMovieId } from "../../api";
import RenderMovie from "../../components/RenderMovie";
import Typography from "../../components/Typography";

function Recommendation() {
  const [recomendationMovies, setRecomendationMovies] = useState([]);

  const movieTitle = (index) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites[index]?.title ?? "";
  };

  const fetchRecomendationMovies = async (movie_id) => {
    const movies = await getMoviesRecomendationByMovieId(movie_id);
    if (movies.length) {
      setRecomendationMovies((prevMovies) => [...prevMovies, movies]);
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.length > 0) {
      favorites.forEach((favorite, index) => {
        fetchRecomendationMovies(favorite.imdb_id);
      });
    }
  }, []);

  return (
    <Container>
      {recomendationMovies.length &&
        recomendationMovies.map((movies, index) => (
          <Row key={index} style={{ marginTop: 40 }}>
            <Typography
              title={`Filmes Recomendados para quem gostou de ${movieTitle(
                index
              )}`}
            />
            <RenderMovie movies={movies} />
          </Row>
        ))}
      {recomendationMovies.length == 0 && (
        <Row style={{ marginTop: 40 }}>
          <Typography title="Não há filmes para recomendar..." />
        </Row>
      )}
    </Container>
  );
}

export default Recommendation;
