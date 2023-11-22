import React, { useEffect, useState } from "react";
import { Modal, Form, Card, Col, Row } from "react-bootstrap";
import { MovieDetails } from "../../types";
import { FaHeart } from "react-icons/fa";
import moment from "moment";

interface ModalMovieDetailsProps {
  showModal: boolean;
  handleCloseModal: () => void;
  selectedMovie: MovieDetails | null;
}

const ModalMovieDetails: React.FC<ModalMovieDetailsProps> = ({
  showModal,
  handleCloseModal,
  selectedMovie,
}) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    isFavorite(selectedMovie);
  });

  const isFavorite = (selectedMovie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    if (!favorites.length) {
      setDisabled(false);
      return false;
    }
    const movieIsFavoriteAlready = favorites
      .map((movie) => movie.imdb_id)
      .find((imdb_id) => imdb_id == selectedMovie?.imdb_id) as boolean;
    if (movieIsFavoriteAlready) {
      setDisabled(true);
      return true;
    }
    setDisabled(false);
    return false;
  };

  const addToFavorites = (selectedMovie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

    const movieIsFavoriteAlready = isFavorite(selectedMovie);
    if (movieIsFavoriteAlready) {
      return;
    }
    const newfavorites = JSON.stringify([...favorites, selectedMovie]);
    localStorage.setItem("favorites", newfavorites);
    setDisabled(true);
  };

  const renderFormItem = (
    label: string,
    value: string | number | undefined
  ) => (
    <>
      <Form.Text id="media" style={{ color: "#e5e5e5" }}>
        <strong>{label}:</strong> {value}
      </Form.Text>
      <br />
    </>
  );
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg">
      {selectedMovie && (
        <>
          <Modal.Header
            closeButton
            style={{ color: "#e5e5e5", backgroundColor: "#282A36" }}
          >
            <Modal.Title>{selectedMovie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#282A36" }}>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Card.Img
                  variant="top"
                  style={{ height: 350, width: "auto" }}
                  src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                />
              </Col>
              <Col>
                {" "}
                {renderFormItem(
                  "Média de avaliações",
                  selectedMovie.vote_average
                )}
                {renderFormItem(
                  "Número total de avaliações",
                  selectedMovie.vote_count
                )}
                {renderFormItem("Popularidade", selectedMovie.popularity)}
                {renderFormItem("Descrição", selectedMovie.overview)}
                {renderFormItem("Tagline", selectedMovie.tagline)}
                {renderFormItem(
                  "Data de Lançamento",
                  moment(selectedMovie.release_date).format("DD/MM/YYYY")
                )}
                {renderFormItem(
                  "Duração do filme",
                  selectedMovie.runtime + " min"
                )}
                {renderFormItem(
                  "Gênero",
                  selectedMovie.genres?.map((genre) => genre.name).join(", ")
                )}
                {renderFormItem(
                  "Receita gerada R$ ",
                  selectedMovie.revenue.toLocaleString("pt-BR")
                )}
                {renderFormItem("Imbd", selectedMovie.imdb_id)}
              </Col>
            </Row>
            <Row>
              <div>
                <button
                  onClick={() => addToFavorites(selectedMovie)}
                  disabled={disabled}
                >
                  <FaHeart />
                </button>
              </div>
            </Row>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default ModalMovieDetails;
