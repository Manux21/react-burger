import React from 'react';
import styles from './modal.module.css'
import ModalOverlay from "./modal-overlay";
import ReactPortal from './modal-portal/react-portal';
import PropTypes from "prop-types";

const Modal = ({children, closeModal}) => {


  const closeHandler = (event) => (event.key === "Escape" ? closeModal() : null);

  React.useEffect(() => {
    document.addEventListener("keydown", closeHandler)
    return () => {
      document.removeEventListener("keydown", closeHandler)
    }
  }, [])

  return (
    <ReactPortal>
      <div className={styles.modal}>
        {children}
      </div>
      <ModalOverlay/>
    </ReactPortal>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Modal;
