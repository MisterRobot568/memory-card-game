import { useState } from "react";
import Card from "./Card.jsx";
import Board from "./Board.jsx";
import Header from "./Header.jsx";
// import "./App.css"

// app should be responsible for
// 1) shuffling the cards(reordering the list of cards/names)
function App() {
  const [pokemonList, setPokemonList] = useState([
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "bulbasaur",
    "ivysaur",
    "venusaur",
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
      <div className="page">
        <Header currentScore={points} bestScore={bestScore} />
        <p className="description">
          Get points by clicking on an image, but don't click on any more than
          once!
        </p>
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
