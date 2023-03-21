import {
  ADD_BUN,
  ADD_INGREDIENT,
  CONSTRUCTOR_MOVE,
  DELETE_INGREDIENT,
  INGREDIENT_COUNT_MINUS,
  INGREDIENT_COUNT_PLUS
} from "./constants";
import { v4 as uuid } from "uuid";


export const addIngredient = (ingredient) => (dispatch) => {
    dispatch({
      type: ADD_INGREDIENT,
      ingredient,
      dragId: uuid(),
    })

    dispatch(ingredientCountPlus(ingredient._id))
}

export const deleteIngredient = (dragId, id) => (dispatch) => {
  dispatch({
    type: DELETE_INGREDIENT,
    dragId,
  })

  dispatch(ingredientCountMinus(id))
}

export const addBun = (bun) => {
  return {
    type: ADD_BUN,
    bun,

  }
}

export const ingredientCountPlus = (id) => {
  return {
    type: INGREDIENT_COUNT_PLUS,
    id
  }
}

export const ingredientCountMinus = (id) => {
  return {
    type: INGREDIENT_COUNT_MINUS,
    id
  }
}

export const constructorMove = (newLists) => {
  return {
    type: CONSTRUCTOR_MOVE,
    newLists,
  }
}