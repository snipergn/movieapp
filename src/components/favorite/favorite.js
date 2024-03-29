import React from "react";
import Noimage from './Assets/notfound.png'


class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
    };
  }
  componentWillMount() {
    let favorite = [];
    if (localStorage && localStorage.getItem("favorite")) {
      favorite = JSON.parse(localStorage.getItem("favorite"));
    };
    this.setState({ favoriteList: favorite });
  }

  handleRedirect = () => {
    localStorage.setItem(
      "favoriteItem",
      JSON.stringify(this.state.favoriteList)
    );
  };

  deleteToFavorite = (id) => {
    const hapus = this.state.favoriteList.filter((item) => item.id !== id);
    this.setState({ favoriteList: hapus });
  };

  render() {
    
    const { favoriteList } = this.state;
    console.log(favoriteList)
    return (
      
      <div>
        <div className="mt-2 ml-5 mr-5">
        {/* FAVORITE MOVIES SECTION */}
        <h1 className="text-left mt-5">Favorite List</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favoriteList.map((item) => {
            return (
              <div key={item.id} class="col-lg-2 col-md-4 col-sm-6 mt-3 mb-5">
                <div class="card h-100">
                {item.poster_path
                     ? <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      className="img-fluid"
                      alt="img"
                    />
                      : <img
                      src={Noimage}
                      className="img-fluid"
                      alt="img"   
                    />
                    }
                  <button type="button" 
                  onClick={() => this.deleteToFavorite(item.id)} 
                  class="btn btn-danger mt-2">Remove from Favorites</button>
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

export default Favorite;
