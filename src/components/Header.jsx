import headerPic from "../assets/pokemon-header-text.png";
import currentScorePic from "../assets/current-score-pic.png";
import bestScorePic from "../assets/best-score.png";

import "../styles/header-styling.css";
function Header({ currentScore, bestScore }) {
  return (
    <div className="header">
      <img src={headerPic} alt="Pokemon memory game" />
      <div className="scoreBox">
        <div className="score-and-label">
          <img
            className="score-label"
            src={currentScorePic}
            alt="score label"
          />
          <p>{currentScore}</p>
        </div>
        <div className="score-and-label">
          <img
            className="score-label"
            src={bestScorePic}
            alt="best score label"
          />
          <p>{bestScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
