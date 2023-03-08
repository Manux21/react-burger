import styles from "./modal.module.css";
import PropTypes from "prop-types";
import Modal from "./modal";

function ModalOverlay({children,setOpenModal}) {
  return (
      <div className={styles.overlay} onClick={() => setOpenModal(false)}>
        {children}
      </div>
  );
}
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  setOpenModal: PropTypes.func.isRequired,
}

export default ModalOverlay;
