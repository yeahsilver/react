import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const moviesTitles = [
  "Matrix", 
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const moviesImages = [
    "https://ww.namu.la/s/97ed6d14776f0c6ff206f64ff447cc8b932f6c43eadd755a54a72d1ada738ba41abcab4e7c823efa25f244894fa8ca2ee44ba1b21731a1b90d181d5ad74432acb38478c22e4018986745a33415ac65839c4e93668aed70b546af9e8df77e6f4453157ba7d35165d81eda10c8e42a37ce",
    "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/ko/4/48/Old_Boy.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=960" 
]

function App() {
  return (
    <div className="App">
      <Movie title={moviesTitles[0]} poster={moviesImages[0]}/>
      <Movie title={moviesTitles[1]} poster={moviesImages[1]}/>
      <Movie title={moviesTitles[2]} poster={moviesImages[2]}/>
      <Movie title={moviesTitles[3]} poster={moviesImages[3]}/>
    </div>
  );
}

export default App;