import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./details.css";

const Details = ({
  showModal,
  OnHide,
  MovieDetails,
  favorite,
}) => {
  console.log(MovieDetails, favorite);
  return (
    <div>
      {showModal &&
        MovieDetails?.map((item) => {
          return (
            <Modal
              show={showModal}
              onHide={OnHide}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              key={item.id}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    className="img-fluid width: 100% modal-header-image"
                    alt="header-thumbnail"
                  />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{item.title}</h4>
                <p>{item.overview}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className={"btn btn-primary button"}
                  onClick={() => favorite(item.id)}
                >
                  Add to Favorite
                </Button>
                <Button className={"btn btn-secondary button"} onClick={OnHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
        })}
    </div>
  );
};

export default Details;
