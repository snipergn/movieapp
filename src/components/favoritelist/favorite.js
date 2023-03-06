import React from "react";

const Favoritelist = ({ futureMovies, favoriteList, removefavorite }) => {
  return (
    <div>
      <div className="mt-2 ml-5 mr-5">
        {/* LATEST MOVIES SECTION*/}
        <h1 className="text-left mt-5">Popular</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {futureMovies.map((item, index) => {
            let resultsfilter = item.results
            let objectkeys = resultsfilter[Object.keys(resultsfilter)[0]];
            let findfavorite;
            if (objectkeys) {
              findfavorite = objectkeys.filter((item) =>
                favoriteList.includes(item.id)
              );
            }
            console.log(findfavorite);
            {findfavorite.map(item => console.log(item))}
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
                      onClick={() => removefavorite(item.id)}
                      type="button"
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
    </div>
  );
};

export default Favoritelist;
