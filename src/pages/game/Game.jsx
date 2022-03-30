import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";
import Play from "../../components/Play/Play";
import ResultModal from "../../components/resultModal/ResultModal";
import Tile from "../../components/Tiles/Tile";
import { GameContext } from "../../contexts/gameContext";
import "./game.css";
const Game = () => {
  const {
    currentPlayer,
    plays,
    points,
    winningIndexes,
    handlePlay,
    resetGame,
    winner,
    gameFinished,
    resetRound,
    playMode
  } = useContext(GameContext);

  //console.log({plays})
  console.log({playMode})

  const [confirming,setConfirming] = useState(false)
  const navigate = useNavigate()
  const handleRestart = () => {
      setConfirming(true)
    //   resetRound()
    
    }

    useEffect(resetGame,[])
  return (
    <div className="game">
        <ConfirmModal show={confirming} onClose={() => setConfirming(false)} onConfirm={resetRound}/>
        <ResultModal isOpen={gameFinished} winner={winner} onQuit={() => navigate("/")} onNextRound={resetRound}/>
      <main className="game-container">
        <header className="header">
        <div className="turn" style={{background:"transparent",boxShadow:"none"}}>
          <Play type={"X"} />
          <Play type={"O"} />
        </div>
          <div className="turn">
            <Play type={currentPlayer} size={20} /> <p>turn</p>
          </div>
          <button className="backButton" onClick={handleRestart}>
              Back
          </button>
        </header>
        <div className="grid">
            {plays.map((play,index) => {
                const highlight = winningIndexes.includes(index)
                //console.log({play})
                return (
                    <Tile
                        key={index}
                        highlight={highlight}
                        color={play === "X" ? "gray": "red"}
                        play={play}
                        handlePlay={() => handlePlay(index)}
                    />
                )
            })}
        </div>
        <ul className="info">
            <li className="info-item">
                <p>X</p>
                <span>{points["X"]}</span>
            </li>
            <li className="info-item">
                <p>Ties</p>
                <span>{points.ties}</span>
            </li>
            <li className="info-item">
                <p>O</p>
                <span>{points["O"]}</span>
            </li>
        </ul>
      </main>
    </div>
  );
};

export default Game;
