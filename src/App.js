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
      'movielatest': [],
      'moviegenes': [],
      'poster_path': []

    }
    this.handleHeader = this.handleHeader.bind(this)
    console.log(this.state.poster_path.map(item => item))

  }
  

  handleHeader = () => {
    const api = '399de7528a6f7ce137d42429f7513ad0'
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=ro-RO&page=1`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let movieconcat = this.state.movielatest.concat(data)
      let filtered = movieconcat.filter(filter => filter === data)
      let objectkey = filtered[Object.keys(filtered )[0]]
      this.setState({
        movielatest: filtered,
        poster_path: objectkey
      })
    })
  }
  handleMovieGenes = () => {
    const api = '399de7528a6f7ce137d42429f7513ad0'
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=ro-RO&page=1`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let movieconcat = this.state.movielatest.concat(data)
      let filtered = movieconcat.filter(filter => filter === data)
      this.setState({moviegene: filtered})
    })
  }

  componentDidMount() {
    this.handleHeader();
    this.handleMovieGenes()
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
        -> Search Movie by genre, title or name author
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
      <Header movielatest={this.state.movielatest}/>
      <Section movielatest={this.state.movielatest}/>
      <Footer/>
    </div>
    );
  }
}

export default App;
