import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/mainpage/header.js";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";
import Signin from "./components/signin/singin";
import Register from "./components/register/register";
import Favorite from "./components/favorite/favorite";
import SearchMovies from "./components/searchResults/search";
// import Discover from "./components/detailsPage/details";
import Details from "./components/detailsPage/details";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularmovies: [],
      upcomingmovies: [],
      comedymovies: [],
      romancemovies: [],
      favoriteList: [],
      searchmovie: "",
      querymovie: [],
      movieDetails: [],
      isHovering: false,
      handleModal: false
    };
    this.handleClickOver = this.handleClickOver.bind(this);
    this.handleClickOut = this.handleClickOut.bind(this);
  }
  handleHeader = (data) => {
    const api = "399de7528a6f7ce137d42429f7513ad0";
    const urls = [
      `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`,
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=35`,
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
      `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${data}&page=1&include_adult=false`,
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1&region=US`
    ];
    Promise.all(
      urls.map((url) => {
        return fetch(url).then((data) => data.json());
      })
    ).then((data) => {
      let movieconcat = this.state.popularmovies.concat(data[0]);
      let filtered = movieconcat.filter((filter) => filter === data[0]);
      this.setState({
        popularmovies: filtered,
      });
      this.setState({
        comedymovies: data[1].results,
      });
      this.setState({
        romancemovies: data[2].results,
      });
      this.setState({
        querymovie: data[3].results,
      });
      this.setState({
        upcomingmovies: data[4].results,
      });
    });
  };

  handleDetailsPage = (id) => {
    const api = '399de7528a6f7ce137d42429f7513ad0';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`
    fetch(url)
    .then((response) => response.json())
    .then(data => {
      this.setState({
        movieDetails: data
      });
    })
  };

  
  addToFavoriteUpcoming = (id) => {
    const upcomingmovies = this.state.upcomingmovies.find(
      (item) => item.id === id
    );
    this.setState({
      favoriteList: [...this.state.favoriteList, upcomingmovies],
    });
    this.handleRedirect();
  };
  addToFavoriteComedy = (id) => {
    const comedy = this.state.comedymovies.find((item) => item.id === id);
    this.setState({
      favoriteList: [...this.state.favoriteList, comedy],
    });
    this.handleRedirect();
  };
  addToFavoriteRomance = (id) => {
    const romance = this.state.romancemovies.find((item) => item.id === id);
    this.setState({
      favoriteList: [...this.state.favoriteList, romance],
    });
    this.handleRedirect();
  };
  addToFavoriteLatest = (id) => {
    const latest = this.state.popularmovies.map((item) => item.results);
    const object = latest[Object.keys(latest)[0]];
    const latestmap = object.find((item) => item.id === id);

    this.setState({
      favoriteList: [...this.state.favoriteList, latestmap],
    });
    this.handleRedirect();
  };

  addToFavoriteQuery = (id) => {
    const queryItems = this.state.querymovie.find((item) => item.id === id);
    this.setState({
      favoriteList: [...this.state.favoriteList, queryItems],
    });
    this.handleRedirect();
  };

  SearchMovies = (event) => {
    this.setState({
      searchmovie: event.target.value,
    });
    let searchmovies = this.state.searchmovie;
    this.handleHeader(searchmovies);
  };

  handleRedirect = () => {
    localStorage.setItem("favorite", JSON.stringify(this.state.favoriteList));
  };

  handleClickOver = () => {
    setTimeout(() => {
      this.setState(() => ({
        isHovering: true,
      }));
    }, 2000);
  };

  handleClickOut = () => {
    this.setState(() => ({
      isHovering: false,
    }));
  };

  handleMovieModalTrue = (id) => {
    this.setState(() => ({
      handleModal: true
    }))
  }
  handleMovieModalFalse = (id) => {
    this.setState(() => ({
      handleModal: true
    }))
  }

  handleDetails = (id) => {
    this.handleHeader(...this.state.querymovie, id);
  };


  componentDidMount() {
    this.handleHeader();
    this.handleDetailsPage();
  }

  render() {
    const { isHovering, searchmovie, movieDetails } = this.state;

    return (
      <div className="App">
        {/*
      1.Frontend Page
        -> Login && Register Page by User Data/ID
        -> Navbar list + Logo
        -> Search Movie by title
        -> Sign Out Header for Account
        -> Details about Movies
        -> Review Movies.
        -> Discover Movies
        -> 
      2. Backend
        -> Crypt Data with Hash (Bycrypt)
        -> GET user details from frontend
        -> POST register details from frotnend
        -> PUT -> When My list Add an object
        -> DELETE -> When remove an item from my list of movies.

      3. Database ?? (yet)
      */}

        <BrowserRouter>
          {isHovering && searchmovie.length > 4 ? (
            <div>
              <Navbar
                searchmovievalue={this.state.searchmovie}
                searchMovie={this.SearchMovies}
                handleMouseOver={this.handleClickOver}
                handleMouseOut={this.handleClickOut}
                isHovering={this.state.isHovering}
              />
              <SearchMovies
                queryMovies={this.state.querymovie}
                addToFavoriteQuery={this.addToFavoriteQuery}
                favoriteList={this.state.favoriteList}
              />
              <Footer />
            </div>
          ) : (
            <Routes>
              <>
                {/* <Route
                  exact
                  path="/moviedetails"
                  element={
                    <div>
                      <Details handleInfoDetails={this.handleDetails} />
                    </div>
                  }
                /> */}
                <Route
                  exact
                  path={"/"}
                  element={
                    <div>
                      <Navbar
                        searchmovievalue={this.state.searchmovie}
                        searchMovie={this.SearchMovies}
                        handleMouseOver={this.handleClickOver}
                        handleMouseOut={this.handleClickOut}
                        isHovering={this.state.isHovering}
                      />
                      <Header movielatest={this.state.popularmovies} />
                      <Section
                        favoriteComedy={this.addToFavoriteComedy}
                        favoriteRomance={this.addToFavoriteRomance}
                        favoriteUpcoming={this.addToFavoriteUpcoming}
                        movielatest={this.state.popularmovies}
                        futureMovies={this.state.upcomingmovies}
                        comedyMovies={this.state.comedymovies}
                        romancemovies={this.state.romancemovies}
                        favoriteLatest={this.addToFavoriteLatest}
                        handleDetailsPage={this.handleDetailsPage}
                      />
                      { movieDetails ==! null
                      ? <Details
                      showData = {this.state.movieDetails}
                      />
                      : console.log('error')
                      }
                      <Footer />
                    </div>
                  }
                />
                <Route
                  exact
                  path="/favoritelist"
                  element={
                    <div>
                      <Navbar
                        searchmovievalue={this.state.searchmovie}
                        searchMovie={this.SearchMovies}
                        handleMouseOver={this.handleClickOver}
                        handleMouseOut={this.handleClickOut}
                        isHovering={this.state.isHovering}
                      />
                      <Favorite />
                      <Footer />
                    </div>
                  }
                />
              </>
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
