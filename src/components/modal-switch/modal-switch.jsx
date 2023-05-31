import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { ingredientCloseModal } from "../../services/actions/ingredient-modal";
import Modal from "../modal/modal";

const ModalSwitch = ({ background }) => {
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

ModalSwitch.propTypes = {
  background: PropTypes.bool.isRequired,
};

export default ModalSwitch;