import React from "react";

class SearchMovies extends React.Component {
  
  render() {
    const {queryMovies, addToFavoriteQuery, favoriteList} = this.props
    console.log(favoriteList)
    return (
      <div>
        <div className="mt-2 ml-5 mr-5">
        {/* SEARCH MOVIES SECTION */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { queryMovies.map((item, index) => {
            let results = item.overview.substr(0, 60);
            return (
              <div key={index} class="col-lg-2 col-md-4 col-sm-6 mt-3">
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
                      class="btn btn-primary"
                      type="button"
                      onClick={() => addToFavoriteQuery(item.id)}
                    >
                      Add from favorites
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
        </div>
      </div>
    );
  }
}

export default SearchMovies;
