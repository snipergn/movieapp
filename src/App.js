import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/mainpage/header.js';
import Section from './components/section/section';
import Footer from './components/footer/footer';
class App extends React.Component {

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
