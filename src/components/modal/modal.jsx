import React from 'react';
import styles from './modal.module.css'
import ModalOverlay from "./modal-overlay";
import ReactPortal from './modal-portal/react-portal';
import PropTypes from "prop-types";
import {ingredientCloseModal} from "../../services/actions/ingredient-modal";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {closeOrder} from "../../services/actions/order-modal";

const Modal = ({children, closeModal}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeHandler = (event) => (event.key === "Escape" ? closeModal() : null);

  const handleModalClose = () => {
    dispatch(ingredientCloseModal());
    dispatch(closeOrder())
    navigate("/");
  };

  React.useEffect(() => {
    document.addEventListener("keydown", closeHandler)
    return () => {
      document.removeEventListener("keydown", closeHandler)
    }
  }, [])

  return (
    <ReactPortal>
      <div className={styles.modal}>
        <div className={styles.closeIcon} onClick={() => handleModalClose()}>
          <CloseIcon type="primary"/>
        </div>
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
