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
    };
  }
  handleHeader = (data) => {
    const api = "399de7528a6f7ce137d42429f7513ad0";
    const urls = [
        `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=35`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
        `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${data}&page=1&include_adult=false`,
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1&region=US`

      ]
      Promise.all(urls.map(url => {
        return fetch(url).then(data=> data.json())
      }))
      
      .then(data => {
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
      })
   
  };

  // #1 Click the button and add the element into a new list with id, items etc.
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

  SearchMovies = (event) => {
    this.setState({
      searchmovie: event.target.value,
    });
    let searchmovies = this.state.searchmovie;
    this.handleHeader(searchmovies);
  };

  handleRedirect = () => {
    localStorage.setItem('favorite',
    JSON.stringify(this.state.favoriteList));
  }


  componentDidMount() {
    this.handleHeader();
  }

  render() {
    console.log(this.state.romancemovies)    
    return (
      <div className="App">
        {/*
      1.Frontend Page
        -> Login && Register Page by User Data/ID
        -> Navbar list + Logo
        -> Search Movie by title
        -> Sign Out Header for Account
      2. Backend
        -> Crypt Data with Hash (Bycrypt)
        -> GET user details from frontend
        -> POST register details from frotnend
        -> PUT -> When My list Add an object
        -> DELETE -> When remove an item from my list of movies.

      3. Database ?? (yet)
      */}

        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Navbar
                    searchmovievalue={this.state.searchmovie}
                    searchMovie={this.SearchMovies}
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
                  />
                  <Footer />
                </div>
              }
            />
            <Route exact path="/signin" element={<Signin />} />
            <Route
              exact
              path="/favoritelist"
              element={
                <div>
                  <Navbar
                  searchmovievalue = {this.state.searchmovie}
                  searchMovie = {this.SearchMovies}
                  />
                  <Favorite 
                   />
                  <Footer />
                </div>
              }
            />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
