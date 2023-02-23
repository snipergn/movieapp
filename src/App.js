import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/mainpage/header.js';
import Section from './components/section/section';
import Footer from './components/footer/footer';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'popularmovies': [],
      'upcomingmovies': [],
      'comedymovies': [],
      "documentarymovies": []

    }
    this.handleHeader = this.handleHeader.bind(this);
  }
  

  handleHeader = () => {
    const api = '399de7528a6f7ce137d42429f7513ad0'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let movieconcat = this.state.popularmovies.concat(data)
      let filtered = movieconcat.filter(filter => filter === data)
      this.setState({
        popularmovies: filtered,
      })
    })
    const urlupcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1&region=US`
    fetch(urlupcoming)
    .then(response => response.json())
    .then(data => {
      let movieconcat = this.state.upcomingmovies.concat(data)
      let filtered = movieconcat.filter(filter => filter === data)
      this.setState({
        upcomingmovies: filtered
      })
    })
    const getGen = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=35`
    fetch(getGen)
    .then(response => response.json())
    .then(data => {
      let movieconcat = this.state.comedymovies.concat(data)
      let filtered = movieconcat.filter(filter => filter === data)
      this.setState({
        comedymovies: filtered
      })
      console.log(filtered)
    })
    const getDocumentary = `https://api.themoviedb.org/3/discover/movie?api_key=399de7528a6f7ce137d42429f7513ad0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`
    fetch(getDocumentary)
    .then(response => response.json())
    .then(data => {
      let movieconcat = this.state.documentarymovies.concat(data)
      let filtered = movieconcat.filter(filter => filter === data)
      this.setState({
        documentarymovies: filtered
      })
      console.log(filtered)
    })
  }
  

  componentDidMount() {
    this.handleHeader();
 }




  render() {
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
      <Navbar/>
      <Header movielatest={this.state.popularmovies}/>
      <Section 
        movielatest={this.state.popularmovies} 
        futureMovies={this.state.upcomingmovies} 
        comedyMovies={this.state.comedymovies}
        movieDocumentary={this.state.documentarymovies}

      />
      <Footer/>
    </div>
    );
  }
}

export default App;
