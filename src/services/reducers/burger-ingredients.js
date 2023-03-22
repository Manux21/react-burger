import {
  GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  INGREDIENT_COUNT_MINUS,
  INGREDIENT_COUNT_PLUS
} from "../actions/constants";
import {initialCount} from "../../components/util/initial-count";


export const initialState = {
  ingredients: [],
  error: null,
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state
      }
    }

    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: initialCount(action.data),
      }
    }

    case INGREDIENT_COUNT_PLUS: {
      return {
        ...state,
        ingredients: state.ingredients.map(ingredient => ingredient._id === action.id ? {
          ...ingredient,
          count: ingredient.count + 1
        } : ingredient)
      }
    }

    case INGREDIENT_COUNT_MINUS: {
      return {
        ...state,
        ingredients: state.ingredients.map(ingredient => ingredient._id === action.id ? {
          ...ingredient,
          count: ingredient.count - 1
        } : ingredient)
      }
    }


    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state
  }
}