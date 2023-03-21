import styles from "./modal.module.css";
import PropTypes from "prop-types";
import Modal from "./modal";
import {useDispatch} from "react-redux";
import {ingredientCloseModal} from "../../services/actions/ingredient-modal";
import {closeOrder} from "../../services/actions/order-modal";


function ModalOverlay({children}) {
  const dispatch = useDispatch()
  return (
      <div className={styles.overlay} onClick={() => {
        dispatch(ingredientCloseModal())
        dispatch(closeOrder())
      }}>
        {children}
      </div>
  );
}


Modal.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ModalOverlay;
