import React from "react";
import "./section.css";

const Section = ({
  movielatest,
  futureMovies,
  comedyMovies,
  romancemovies,
  OnActive
  
}) => {
  const romanceSlicing = romancemovies.map((item) => item);
  const slicing = romanceSlicing.slice(0, 6);
  const futureSlicing = futureMovies.map((item) => item);
  const slicingFuture = futureSlicing.slice(0, 6);
  const mapingComedy = comedyMovies.map((item) => item);
  const slicingComedy = mapingComedy.slice(0, 6);

  return (
    <div className="mt-2 ml-5 mr-5">
      {/* LATEST MOVIES SECTION*/}
      <h1 className="text-left mt-5">Popular Now</h1>
      {movielatest.map((item, index) => {
        let filterAPI = item.results.slice(0, 6);
        return (
          <div key={index} className="row row-cols-2 row-cols-md-3 g-4">
            {filterAPI.map((item) => {
              return (
                <div key={item.id} className="col-lg-2 col-md-4 col-sm-6 mt-3">
                  <div className="card h-100">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      className="img-fluid width: 100%"
                      alt="img"
                      onClick={() => OnActive(item.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      {/* UPCOMING MOVIES SECTION*/}
      <h1 className="text-left mt-5">Upcoming Movies</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {slicingFuture.map((item) => {
          return (
            <div key={item.id} className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  className="img-fluid"
                  alt="img"
                  onClick={() => OnActive(item.id)}
                />

              </div>
            </div>
          );
        })}
      </div>
      {/* ROMANCE MOVIES SECTION*/}
      <h1 className="text-left mt-5">Romance</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {slicing.map((item) => {
          return (
            <div key={item.id} className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  className="img-fluid"
                  alt="img"
                  onClick={() => OnActive(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* COMEDY MOVIES SECTION*/}
      <h1 className="text-left mt-5">Comedy</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {slicingComedy.map((item) => {
          return (
            <div key={item.id} className="col-lg-2 col-md-4 col-sm-6 mt-3">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  className="img-fluid"
                  alt="img"
                  onClick={() => OnActive(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
