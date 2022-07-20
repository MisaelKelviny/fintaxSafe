import Modal from 'react-modal';
import styles from './styles.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgb(46 46 45 / 57%)'
  }
};

Modal.setAppElement('body');

export default function ModalSimple({ children, open, setOpen }: ModalProp) {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
      >
        <div className={styles.closeContainer}>
          <button onClick={handleClose} className={styles.closeButton}>X</button>
        </div>
        <div>
          {children}
        </div>
      </Modal>
    </div>
  )
}