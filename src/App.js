import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/mainpage/header.js";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";
import Signin from "./components/signin/singin";
import Register from "./components/register/register";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularmovies: [],
      upcomingmovies: [],
      comedymovies: [],
      romancemovies: [],
      favoriteList: [],
      searchmovie: 'Superman',
      querymovie: []

    };
    this.handleHeader = this.handleHeader.bind(this);
    this.addToFavoriteUpcoming = this.addToFavoriteUpcoming.bind(this);
    this.deleteToFavorite = this.deleteToFavorite.bind(this);
    this.addToFavoriteRomance = this.addToFavoriteRomance.bind(this);
    this.addToFavoriteComedy = this.addToFavoriteComedy.bind(this);
    this.SearchMovies = this.SearchMovies.bind(this);
  }

  handleHeader = (data) => {
    const api = "399de7528a6f7ce137d42429f7513ad0";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let movieconcat = this.state.popularmovies.concat(data);
        let filtered = movieconcat.filter((filter) => filter === data);
        this.setState({
          popularmovies: filtered,
        });
      });
    const urlupcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1&region=US`;
    fetch(urlupcoming)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          upcomingmovies: data.results,
        });
      });
    const getGen = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=35`;
    fetch(getGen)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          comedymovies: data.results,
        });
      });
    const Romance = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`;
    fetch(Romance)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          romancemovies: data.results
        });
      });
    const searchQuery =`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${data}&page=1&include_adult=false`
    fetch(searchQuery)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        querymovie: data.results
      })
    })  

  };

  // #1 Click the button and add the element into a new list with id, items etc.
  addToFavoriteUpcoming = id => {
    const upcomingmovies = this.state.upcomingmovies.find(item => item.id === id);
    this.setState({
      favoriteList: [...this.state.favoriteList, upcomingmovies]
    });
  };
  addToFavoriteComedy = id => {
    const comedy =  this.state.comedymovies.find(item => item.id === id);
      this.setState({
        favoriteList: [...this.state.favoriteList, comedy]
      });

  };
  addToFavoriteRomance = id => {
    const romance =  this.state.romancemovies.find(item => item.id === id);
    this.setState({
      favoriteList: [...this.state.favoriteList, romance]
    });
  };

  deleteToFavorite = id => {
    const hapus = this.state.favoriteList.filter(item => item.id !== id);
    this.setState({ favoriteList: hapus });
  };

  SearchMovies = (event) => {
    this.setState({
      searchmovie: event.target.value
    })
    let searchmovies = this.state.searchmovie
    this.handleHeader(searchmovies)
  }
  



  componentDidMount() {
    this.handleHeader();
  }

  render() {
  //  console.log(this.state.searchmovie)
   const {searchmovie, querymovie} = this.state;
    console.log(searchmovie)
    console.log(querymovie)
    return (
      <div className="App">
        {/*
      1.Frontend Page
        -> Main Page
        -> Login && Register Page by User Data/ID
        -> My list when you can add a move or remove from it.
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
                    searchmovievalue = {this.state.searchmovie}
                    searchMovie = {this.SearchMovies}
                  />
                  <Header 
                    movielatest={this.state.popularmovies} />
                  <Section 
                    favoriteComedy={this.addToFavoriteComedy}
                    favoriteRomance={this.addToFavoriteRomance}
                    favoriteUpcoming={this.addToFavoriteUpcoming}
                    movielatest={this.state.popularmovies}
                    futureMovies={this.state.upcomingmovies}
                    comedyMovies={this.state.comedymovies}
                    romancemovies={this.state.romancemovies}
                    moviefav={this.state.favoriteList}
                    deleteItems={this.deleteToFavorite}
                  />
                  <Footer />
                </div>
              }
            />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
