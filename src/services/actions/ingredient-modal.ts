import {
  INGREDIENT_OPEN_MODAL,
  INGREDIENT_CLOSE_MODAL,
  FORGOT_PASSWORD_REQUEST_SUCCESS,
  FORGOT_PASSWORD_REQUEST_ERROR
} from "../constants/constants";
import {TBurgerIngredients, TRequestData} from "../types/types";



type IngredientOpenModalAction = {
  readonly type: typeof INGREDIENT_OPEN_MODAL,
  ingredient: TBurgerIngredients,
}


type IngredientCloseModalAction = {
  readonly type: typeof INGREDIENT_CLOSE_MODAL,
}

export type IngredientModalActions =
    | IngredientOpenModalAction
    | IngredientCloseModalAction


export const ingredientOpenModal = (ingredient: TBurgerIngredients): IngredientOpenModalAction => {
  return {
    type: INGREDIENT_OPEN_MODAL,
    ingredient,
  }
}

export const ingredientCloseModal = (): IngredientCloseModalAction=> {
  return {
    type: INGREDIENT_CLOSE_MODAL,

  }
}