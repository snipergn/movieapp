import React from "react";
import Noimage from './Assets/notfound.png'
import './search.css'


const SearchMovies = ({queryMovies, OnSearching}) => {
    return (
      <div>
        <div className="mt-2 ml-5 mr-5">
        {/* SEARCH MOVIES SECTION */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { queryMovies.map((item, index) => {
            return (
              <div key={index} class="col-lg-2 col-md-4 col-sm-6 mt-3">
              <div class="card h-100">
                {item.poster_path
                     ? <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      className="img-fluid"
                      alt="img"
                      onClick={() => OnSearching(item.id)}
                    />
                      : <img
                      src={Noimage}
                      className="img-fluid"
                      alt="img"
                      onClick={() => OnSearching(item.id)}
                    />
                    }
                  
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    );
  }


export default SearchMovies;
