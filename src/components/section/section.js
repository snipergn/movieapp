import React from "react";
import "./section.css";

const Section = ({ movielatest }) => {
  
  return (
    <div className="mt-2 ml-5 mr-5">
    <h1 className="text-left mt-5">Latest movies</h1>
      {movielatest.map((item) => {
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
                        <button class="btn btn-primary" type="button">Add to Favorite</button>
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
