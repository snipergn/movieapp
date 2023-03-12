import React from "react";

class Favorite extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            favoriteList: []
        }
    }
    componentWillMount(){
        let favorite = [];
        if (localStorage && localStorage.getItem('favorite')) {
           favorite = JSON.parse(localStorage.getItem('favorite'));
          }
         this.setState({favoriteList: favorite})
      }

    render() {
        console.log(this.state.favoriteList)
        const {favoriteList} = this.state
    return (
      <div>
        {/* FAVORITE MOVIES SECTION */}
        <h1 className="text-left mt-5">Favorite List</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favoriteList.map((item, index) => {
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
}
  }


export default Favorite;
