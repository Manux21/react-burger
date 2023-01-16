import React from 'react';
import styles from './modal.module.css'
import ModalOverlay from "./modal-overlay";
import ReactPortal from './modal-portal/react-portal';
import PropTypes from "prop-types";

const Modal = ({children, setOpenModal}) => {

  const closeHandler = (event) => (event.key === "Escape" ? setOpenModal(false) : null);
  React.useEffect(() => {
    document.addEventListener("keydown", closeHandler)
    return () => {
      document.removeEventListener("keydown", closeHandler)
    }
  },[])

  return (
    <ReactPortal>
        <div className={styles.modal}>
            {children}
         </div>
       <ModalOverlay setOpenModal={setOpenModal}/>
    </ReactPortal>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  setOpenModal: PropTypes.func.isRequired,
}

export default Modal;
