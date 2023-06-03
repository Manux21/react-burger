import {INGREDIENT_CLOSE_MODAL, INGREDIENT_OPEN_MODAL} from "../constants/constants";
import {TBurgerIngredients} from "../types/types";
import {IngredientModalActions} from "../actions";


type IngredientModalState = {
  isOpen: boolean;
  ingredient: Readonly<TBurgerIngredients> | null;
};

const initialState: IngredientModalState = {
  isOpen: false,
  ingredient: null,
}

export const ingredientModalReducer = (state = initialState, action: IngredientModalActions): IngredientModalState => {
  switch (action.type) {
    case INGREDIENT_OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
        ingredient: action.ingredient,
      }
    }

    case INGREDIENT_CLOSE_MODAL: {
      return initialState;
    }

    default:
      return state
  }
}
