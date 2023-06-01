import React, {FC} from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { ingredientCloseModal } from "../../services/actions/ingredient-modal";
import Modal from "../modal/modal";


type ILocationState = {
  pathname: string;
  state: null | ILocationState;
}

type IModalSwitchProps = {
  background: null | ILocationState;
}

const ModalSwitch: FC<IModalSwitchProps> = ({ background }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(ingredientCloseModal());
    navigate("/");
  };

  return (
    <>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal closeModal={handleModalClose}>
                <IngredientDetails/>
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};


export default ModalSwitch;