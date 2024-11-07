import { useState } from "react";
import Card from "./Card.jsx";
import Board from "./Board.jsx";
// import "./App.css"

// app should be responsible for
// 1) shuffling the cards(reordering the list of cards/names)
function App() {
  const [pokemonList, setPokemonList] = useState([
    "charmander",
    "charizard",
    "pichu",
    "pikachu",
    "raichu",
  ]);

  const [points, setPoints] = useState(0);
  const [clickedList, setClickedList] = useState([]);
  const [bestScore, setBestScore] = useState([0]);

  function shuffle(array = pokemonList) {
    //Fisher-Yates Shuffle algorithm, to shuffle the pokemon cards
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    setPokemonList([...array]);
  }

  function calculatePoints(clickedPokemon, array = clickedList) {
    if (array.includes(clickedPokemon)) {
      if (points >= bestScore) {
        setBestScore(points);
      }
      setPoints(0);
      setClickedList([]);
    } else {
      setPoints(points + 1);
      setClickedList([...array, clickedPokemon]);
    }
    console.log(points);
  }

  return (
    <>
      <div>
        <h1>Hello, world.</h1>
        <p>Current Points:{points}</p>
        <p>Best Score:{bestScore}</p>
        <Board
          pokemonList={pokemonList}
          shuffleFunction={shuffle}
          pointsFunction={calculatePoints}
        />
      </div>
    </>
  );
}

export default App;
