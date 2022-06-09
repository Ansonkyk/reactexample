import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfo></MyInfo>
        <MyInfoComponent />
        <p>I am {23} years old</p>
      </header>
    </div>
  );
}

function MyInfo() {
  const myName = "Anson";
  const Favcolor="Blue"
  const Movie=JSON.stringify(['Movie1','Movie2','Guess what?movie3'])
  return (
    <div>
      <p>My name :{myName}</p>
      <p>Favourite color :{Favcolor}</p>
      <p>Favourite Movie :{Movie}</p>
    </div>
  );
}


const MyInfoComponent = () => {
  const [myName, setMyName] = useState("Anson");
  const [myFavoriteColor, setMyFavoriteColor] = useState("Blue");
  const [favoriteMovies, setFavoriteMovies] = useState(['Movie1','Movie2','Guess what?movie3']);

  return (
    <div>
      <h4>Name: </h4>
      <p>{myName}</p>
      <input
        type="text"
        value={myName}
        onChange={(e) => {
          console.log(e.target.value)
          setMyName(e.target.value);
        }}
      ></input>
      <h4>Favorite Color: </h4>
      <p style={{ backgroundColor: myFavoriteColor }}>{myFavoriteColor}</p>
      <input
        type="text"
        onChange={(e) => {
          setMyFavoriteColor(e.target.value);
        }}
      ></input>
      <h4>Favorite Movies: </h4>
      <ul>
        {favoriteMovies.map((element, index) => {
          return <li key={`favorite-movie-${index}`}>{element}</li>;
        })}
      </ul>
      <ul>
        {favoriteMovies.map((element, index) => {
          return (
            <li key={`favorite-movie-input-${index}`}>
              <label>Movie {index + 1}: </label>
              <input type="text" value={favoriteMovies[index]} onChange={(e)=>{
                console.log(e.target.value)
                const updatedMovies = [favoriteMovies[0], favoriteMovies[1], favoriteMovies[2]]
                updatedMovies[index] = e.target.value
                setFavoriteMovies(updatedMovies)
              }}>
              </input>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
};
export default App;