import {INGREDIENT_OPEN_MODAL, INGREDIENT_CLOSE_MODAL} from "../constants/constants";


export const ingredientOpenModal = (ingredient) => {
  return {
    type: INGREDIENT_OPEN_MODAL,
    ingredient,
  }
}


export const ingredientCloseModal = () => {
  return {
    type: INGREDIENT_CLOSE_MODAL,

  }
}