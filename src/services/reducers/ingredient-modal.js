import {INGREDIENT_CLOSE_MODAL, INGREDIENT_OPEN_MODAL} from "../actions/constants";

const initialState = {
  ingredient: null,
}

export const ingredientModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_OPEN_MODAL: {
      return {
        ...state,
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
