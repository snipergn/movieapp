import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./details.css";

const Details = ({ showModal, OnHide, MovieDetails, favorite, videoAddress }) => {
  return (
    <div>
      {showModal &&
        MovieDetails?.map((item) => {
          const itemRound = Math.round(item.popularity);
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
                <h4>
                  <strong>Title: </strong>
                  {item.title}
                </h4>
                <p>
                  <strong>Overview:</strong> {item.overview}
                </p>
                <p>
                  <strong>Popularity:</strong> {itemRound}
                </p>
                <p>
                  <strong>Release Date: </strong> {item.release_date}
                </p>
                <p>
                  <strong>Website:</strong> {item.homepage}
                </p>
                <div>
                { videoAddress.map(item => {
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${item.results[0].id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  
                })
                  
                  }
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className={"btn btn-primary button"}
                  onClick={() => favorite(item.id)}
                >
                  Add to Favorite
                </Button>
                <Button className={"btn btn-secondary button"} onClick={OnHide}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          );
        })}
    </div>
  );
};

export default Details;
