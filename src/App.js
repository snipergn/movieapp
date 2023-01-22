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
      'moviedata': []
    }
    this.handledata = this.handledata.bind(this)
  }


  handledata = () => {
    const api = '399de7528a6f7ce137d42429f7513ad0'
    fetch(`http://api.themoviedb.org/3/movie/50689?api_key=${api}&language=ro-RO&page=1`)  
    .then(response => response.json())
    .then(response => console.log(response))
    
  }

  componentDidMount() {
    this.handledata()
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
      <Header/>
      <Section/>
      <Footer/>
    </div>
    );
  }
}

export default App;
