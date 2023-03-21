import React from 'react';
import styles from './ingredients.module.css'
import Ingredient from "./ingredient/ingredient";
import ModalOverlay from "../../modal/modal-overlay";
import Modal from "../../modal/modal";
import IngredientDetails from "../../modal/ingredient-details/ingredient-details";

import IngredientCategory from "./ingredient-category/ingredient-category";
import {useDispatch, useSelector} from "react-redux";

import {ingredientCloseModal, ingredientOpenModal} from "../../../services/actions/ingredient-modal";

const Ingredients = ({refSauce, refBun, refMain, handleScroll}) => {


  const data = useSelector(store => store.burgerIngredients.ingredients)
  const modalIngredient = useSelector(store => store.ingredientModal.ingredient)
  const dispatch = useDispatch()

  const modalHandler = (ingredientData) => {
    dispatch(ingredientOpenModal(ingredientData))
  }

  const closeModal = () => {
    dispatch(ingredientCloseModal())
  }

  const getIngredients = (type) => {
    return data?.filter(ingredient => ingredient.type === type)
      .map(ingredient => {
        return (
          <div className={styles.ingredient} onClick= {() => {
              modalHandler(ingredient)
            }
          } key={ingredient._id}>
            <Ingredient
              ingredient={ingredient}
            />
          </div>
        )
      })
  }

  return (
    <div onScroll={handleScroll} className={styles.ingredients}>
      {modalIngredient &&
        <Modal closeModal={closeModal}>
          <IngredientDetails/>
        </Modal>
      }
      <IngredientCategory getIngredients={getIngredients} ref={refBun} type='bun'/>
      <IngredientCategory getIngredients={getIngredients} ref={refSauce} type='sauce'/>
      <IngredientCategory getIngredients={getIngredients} ref={refMain} type='main'/>
    </div>
  );
};


export default Ingredients;
