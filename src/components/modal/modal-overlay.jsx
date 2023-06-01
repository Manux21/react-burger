import styles from "./modal.module.css";
import PropTypes from "prop-types";
import Modal from "./modal";
import {useDispatch} from "react-redux";
import {ingredientCloseModal} from "../../services/actions/ingredient-modal";
import {closeOrder} from "../../services/actions/order-modal";
import {useNavigate} from "react-router-dom";


function ModalOverlay({children}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(ingredientCloseModal());
    dispatch(closeOrder())
    navigate("/");
  };

  return (
    <div className={styles.overlay} onClick={handleModalClose}>
      {children}
    </div>
  );
}


Modal.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ModalOverlay;
