import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getMoviesRecomendationByMovieId } from "../../api";
import RenderMovie from "../../components/RenderMovie";
import Typography from "../../components/Typography";

function Recommendation() {
  const [recomendationMovies, setRecomendationMovies] = useState([]);
  const [useFavoMovie, setFavoMovie] = useState([]);

  const movieTitle = (index: any) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? '') || [];
    return favorites[index]?.title ?? "";
  };

  const fetchRecomendationMovies = async (movie_id: any) => {
    const movies = await getMoviesRecomendationByMovieId(movie_id);
    if (movies.length) {
      setRecomendationMovies((prevMovies) => [...prevMovies, movies]);
    }
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? '') || [];
    if (favorites.length > 0) {
      console.log(favorites);
      setFavoMovie(favorites);
      favorites.forEach((favorite) => {
        fetchRecomendationMovies(favorite.id);
      });
    }
  }, []);

  return (
    <Container>
      <Row style={{ marginTop: 40 }}>
        <Typography
          title={`Marcados como Favoritos`}
        />
        <RenderMovie movies={useFavoMovie} />
      </Row>
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
