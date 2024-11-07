import React, { useState, useEffect } from "react";
import "../styles/card-styling.css";

// Card should accept a prop that lets it know which pokemon
// that instance of the card should be
// API
function Card({ pokemonName, shuffleFunction, pointsFunction }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleClick() {
    // this function will handle when a card is clicked
    shuffleFunction();
    console.log(name);
    pointsFunction(name);
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(
            "API call in the card component can't find the pokemon! That Poke-sucks!"
          );

        const data = await response.json();
        const pokeName = data.forms[0].name;
        setName(pokeName);
        setImageUrl(data.sprites.other["official-artwork"].front_default);
      } catch (error) {
        console.error("Error fetching the Pokemon:", error);
      }
    };
    fetchPokemon();
  }, [url]);

  return (
    <div className="pokemon-card" onClick={handleClick}>
      {imageUrl && <img src={imageUrl} alt={name} />}
      <p>{name}</p>
    </div>
    // the html part of the code
  );
}

export default Card;
