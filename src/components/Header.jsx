import headerPic from "../assets/pokemon-header-text.png";
import "../styles/header-styling.css";
function Header({ currentScore, bestScore }) {
  return (
    <div className="header">
      <img src={headerPic} alt="Pokemon memory game" />
      <div className="scoreBox">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Header;
