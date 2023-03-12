import NetflixLogo from "../Assets/netflixlogo.png";

const Navbar = ({searchMovie, searchmovievalue}) => {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
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
              <a class="nav-link" href="/">
                Main Page
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/favoritelist">
                Favorite
              </a>
            </li>
            
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchMovie}
              value={searchmovievalue}            
            />
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
