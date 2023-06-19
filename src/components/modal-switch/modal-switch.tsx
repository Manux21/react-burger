import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { ingredientCloseModal } from "../../services/actions/ingredient-modal";
import Modal from "../modal/modal";
import FeedOrderDetails from "../history-orders/feed-order-details/feed-order-details";

type ILocationState = {
  pathname: string;
  state: null | ILocationState;
};

type IModalSwitchProps = {
  background: null | ILocationState;
};

const ModalSwitch: FC<IModalSwitchProps> = ({ background }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModalClose = () => {
    dispatch(ingredientCloseModal());

    if (background) {
      navigate(background?.pathname);
    }
  };

  return (
    <>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal closeModal={handleModalClose}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal closeModal={handleModalClose}>
                <FeedOrderDetails />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <Modal closeModal={handleModalClose}>
                <FeedOrderDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default ModalSwitch;
