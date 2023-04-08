import NetflixLogo from "../Assets/netflixlogo.png";

const Navbar = ({searchMovie, searchmovievalue, handleMouseOver, handleMouseOut}) => {

  return (
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          <img
            src={NetflixLogo}
            width="30"
            height="30"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link active" href="/">
                Main Page
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/favoritelist">
                Favorite list
              </a>
            </li>
           
            
          </ul>
          <form 
            class="form-inline my-2 my-lg-0 inputpress d-flex justify-content-center">
            <input
              onMouseOver={handleMouseOver}
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchMovie}
              value={searchmovievalue}            
            />
            {handleMouseOver &&
            <button type="button" onClick={handleMouseOut} className="btn btn-danger mt-2 mr-4 ml-1">Exit</button>}
          </form>
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="signin">
                Sign Out 
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
