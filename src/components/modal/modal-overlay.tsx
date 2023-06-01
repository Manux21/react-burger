import styles from "./modal.module.css";
import {useDispatch} from "react-redux";
import {ingredientCloseModal} from "../../services/actions/ingredient-modal";
import {closeOrder} from "../../services/actions/order-modal";
import {useNavigate} from "react-router-dom";



const ModalOverlay = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(ingredientCloseModal());
    dispatch(closeOrder())
    navigate("/");
  };

  return (
    <div className={styles.overlay} onClick={handleModalClose}>
    </div>
  );
}


export default ModalOverlay;
