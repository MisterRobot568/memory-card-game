import Card from "./Card.jsx";
import "../styles/board-styling.css";
//Board component should
// 1) place cards on board
// 2) shuffle cards on board when cards are clicked
// 3) should it create cards to begin with?
function Board({ pokemonList, shuffleFunction, pointsFunction }) {
  return (
    <div className="board">
      {pokemonList.map((name, index) => (
        <Card
          key={name}
          pokemonName={name}
          shuffleFunction={shuffleFunction}
          pointsFunction={pointsFunction}
        />
      ))}
    </div>
  );
}

export default Board;
