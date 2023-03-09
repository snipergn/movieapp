import React from "react";
import "./section.css";

const Section = ({ movielatest, futureMovies, comedyMovies, romancemovies, upcomingbutton, moviefav, deleteItems}) => {
  let romanceSlicing = romancemovies.map(item => item)
  let slicing = romanceSlicing.slice(0, 6)
  let futureSlicing = futureMovies.map(item => item)
  let slicingFuture = futureSlicing.slice(0, 6)


  return (
    <div className="mt-2 ml-5 mr-5">
    {/* LATEST MOVIES SECTION*/}
    <h1 className="text-left mt-5">Popular</h1>
      {movielatest.map((item, index) => {
        let filterAPI = item.results.slice(0, 6)
        return (
          <div key = {index} className="row row-cols-1 row-cols-md-3 g-4">
            {filterAPI.map((item, index) => {
              let results = item.overview.substr(0,60)
              return (
                  <div class="col-lg-2 col-md-4 col-sm-6 mt-3">
                    <div key={index} class="card h-100">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        class="img-fluid"
                        alt="img"
                      />
                      <div class="card-body">
                        <h6 class="card-title">{item.title}</h6>
                        <p class="card-text">
                          {results}...
                        </p>
                        <button class="btn btn-primary button" 
                        type="button"
                        onClick={() => upcomingbutton(item.id)}
                        >Add to Favorite
                        </button>
                      </div>
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
            {slicingFuture.map((item, index) => {
              let results = item.overview.substr(0,60)
              return (
                  <div class="col-lg-2 col-md-4 col-sm-6 mt-3">
                    <div key={index} class="card h-100">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        class="img-fluid"
                        alt="img"
                      />
                      <div class="card-body">
                        <h6 class="card-title">{item.title}</h6>
                        <p class="card-text">
                          {results}...
                        </p>
                        <button class="btn btn-danger button " 
                        onClick={() => upcomingbutton(item.id)}
                        type="button">Add to Favorite</button>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
      {/* ROMANCE MOVIES SECTION*/}
      <h1 className="text-left mt-5">Romance</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {slicing.map((item, index) => {
              let results = item.overview.substr(0,60)
              return (
                  <div class="col-lg-2 col-md-4 col-sm-6 mt-3">
                    <div key={index} class="card h-100">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        class="img-fluid"
                        alt="img"
                      />
                      <div class="card-body">
                        <h6 class="card-title">{item.title}</h6>
                        <p class="card-text">
                          {results}...
                        </p>
                        <button class="btn btn-primary button " 
                        onClick={() => upcomingbutton(item.id)}
                        type="button">Add to Favorite</button>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
          {/* FAVORITE MOVIES SECTION*/}
        <h1 className="text-left mt-5">Favorite List</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {moviefav.map((item, index) => {
            let results = item.overview.substr(0, 60);
            return (
              <div class="col-lg-2 col-md-4 col-sm-6 mt-3">
                <div class="card h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    class="img-fluid"
                    alt="img"
                  />
                  <div class="card-body">
                    <h6 class="card-title">{item.title}</h6>
                    <p class="card-text">{results}...</p>
                    <button
                      class="btn btn-danger"
                      type="button"
                      onClick={() => deleteItems(item.id)}
                    >
                      Remove from favorites
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Section;
