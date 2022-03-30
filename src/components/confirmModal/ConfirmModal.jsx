import "./confirmModal.css"
import Modal from "react-modal"

const ConfirmModal = ({ show,onClose,onConfirm }) => {

    const acceptModal = () => {
        onClose()
        onConfirm()
    }

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
            isOpen={show}
            style={{content,overlay}}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            ariaHideApp={false}
        >
            <h1 className="title">
                Restart Round ?
            </h1>
            <div className="buttonContainer">
                <button className="modal-btn" onClick={onClose}>No,cancel</button>
                <button className="modal-btn" onClick={acceptModal}>Yes,restart</button>
            </div>
        </Modal>
    )
}

export default ConfirmModal
