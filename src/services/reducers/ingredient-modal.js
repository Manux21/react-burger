import {INGREDIENT_CLOSE_MODAL, INGREDIENT_OPEN_MODAL} from "../constants/constants";

const initialState = {
  isOpen: false,
  ingredient: null,
}

export const ingredientModalReducer = (state = initialState, action) => {
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
