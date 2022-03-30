
import Modal from "react-modal"
import "./resultModal.css"
import Play from "../Play/Play";

const ResultModal = ({ isOpen,winner,onQuit,onNextRound}) => {

  // Custom styles for modal
  const overlay = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .3)',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  }

  const content = {
    position: 'static',
    border: 'none',

    width: '100vw',
    height: '35vh',
    textTransform: 'uppercase',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "gray",
    padding: '2rem 0',
  }
    return (
        <Modal
            isOpen={isOpen}
            style={{content,overlay}}
            ariaHideApp={false}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={onNextRound}
        >
            <h2 className="subTitle">Game Over</h2>
            {winner ? (
                <h1 className="title">
                    <Play type={winner === "X" ? "X" : "O"}/>
                    <span>takes the round</span>
                </h1>
            ) : (
                <h1 className="title">
                    It was a tie!
                </h1>
            )}
            <div className="buttonContainer">
                <button className="modal-btn" onClick={onQuit}>
                    Quit
                </button>
                <button className="modal-btn" onClick={onNextRound}>
                    Next Round
                </button>
            </div>
        </Modal>
    )
}

export default ResultModal
