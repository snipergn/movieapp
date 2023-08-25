import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./details.css";

const Details = ({
  showModal,
  OnHide,
  MovieDetails,
  favorite,
  videoAddress,
}) => {
  const itemResultsOne = videoAddress[0];
  const itemResultsTwo = videoAddress[1];
  const itemResultsTree = videoAddress[2];
  return (
    <div>
      {showModal &&
        MovieDetails?.map((item) => {
          const itemRound = Math.round(item.popularity / 100);
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
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
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
                {item.homepage ? (
                  <p>
                    <strong>Website:</strong> {item.homepage}
                  </p>
                ) : (
                  <p>
                    <strong>Website:</strong> Not Found
                  </p>
                )}
                <div>
                  <hr />
                  <div className="FirstVideo mt-1">
                    <h3 className="mb-3 videosOut">Videos 1</h3>
                    {itemResultsOne ? (
                      <iframe
                        title="Youtube video"
                        width="100%"
                        height="480"
                        src={`https://www.youtube.com/embed/${itemResultsOne.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <h1>Loading</h1>
                    )}
                  </div>
                  <hr />
                  <div className="FirstVideo mt-4">
                    <h3 className="mb-3 videosOut">Video 2</h3>
                    {itemResultsTwo ? (
                      <iframe
                        title="Youtube video"
                        width="100%"
                        height="480"
                        src={`https://www.youtube.com/embed/${itemResultsTwo.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <h1>Loading</h1>
                    )}
                  </div>
                  <hr />
                  <div className="FirstVideo mt-4">
                    <h3 className="mb-3 videosOut">Video 3</h3>
                    {itemResultsTree ? (
                      <iframe
                        title="Youtube video"
                        width="100%"
                        height="480"
                        src={`https://www.youtube.com/embed/${itemResultsTree.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <h1>Loading</h1>
                    )}
                  </div>
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
