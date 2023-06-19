import {
  GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  INGREDIENT_COUNT_MINUS,
  INGREDIENT_COUNT_PLUS,
  INGREDIENTS_COUNT_RESET
} from "../constants/constants";
import {initialCount} from "../../components/util/initial-count";
import {TBurgerIngredients, TRequestData} from "../types/types";
import {BurgerIngredientsActions} from "../actions";


type BurgerIngredientsState = {
  ingredients: TBurgerIngredients[];
  error: TRequestData | null;
};


export const initialState: BurgerIngredientsState = {
  ingredients: [],
  error: null,
}

export const ingredientsReducer = (state = initialState, action: BurgerIngredientsActions):BurgerIngredientsState => {
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

    case INGREDIENTS_COUNT_RESET: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => ({ ...ingredient, count: 0 })),
      };
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