import React from "react";
import "./section.css";

const Section = ({ movielatest, futureMovies, comedyMovies, movieDocumentary, upcomingbutton}) => {



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
                    <div class="card h-100">
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
      <h1 className="text-left mt-5">Upcoming</h1>
      {futureMovies.map((item) => {
        let filterAPI = item.results.slice(0, 6)
        return (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filterAPI.map((item, index) => {
              let results = item.overview.substr(0,60)
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
                        <p class="card-text">
                          {results}...
                        </p>
                        <p>Release Date: <br/>
                          <strong>{item.release_date}</strong>
                        </p>
                        <button class="btn btn-danger button" 
                        type="button"
                        onClick={upcomingbutton}
                        >Add to Favorite</button>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        );
      })}
      {/* COMEDY MOVIES SECTION*/}
      <h1 className="text-left mt-5">Comedy</h1>
      {comedyMovies.map((item) => {
        let filterAPI = item.results.slice(0, 6)
        return (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filterAPI.map((item, index) => {
              let results = item.overview.substr(0,60)
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
                        <p class="card-text">
                          {results}...
                        </p>
                        <button class="btn btn-warning button" type="button">Add to Favorite</button>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>         
        );
      })}
      {/* ROMANCE MOVIES SECTION*/}
      <h1 className="text-left mt-5">Romance</h1>
      {movieDocumentary.map((item) => {
        let filterAPI = item.results.slice(0, 6)
        return (
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {filterAPI.map((item, index) => {
              let results = item.overview.substr(0,60)
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
                        <p class="card-text">
                          {results}...
                        </p>
                        <button class="btn btn-primary button " type="button">Add to Favorite</button>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Section;
