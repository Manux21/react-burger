import {ADD_BUN, ADD_INGREDIENT, CONSTRUCTOR_MOVE, DELETE_BUN, DELETE_INGREDIENT} from "../actions/constants";

export const initialState = {
  ingredients: [],
  bun: null,
}


export const constructorReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, {dragId: action.dragId, ...action.ingredient}]
      }
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.filter(ingredient => ingredient.dragId !== action.dragId)
      }
    }

    case ADD_BUN: {
      return {
        ...state,
        bun: action.bun
      }
    }

    case DELETE_BUN: {
      return {
        ...state,
        bun: null
      }
    }

    case CONSTRUCTOR_MOVE: {
      return {
        ...state,
        ingredients: action.newLists
      }
    }
    default:
      return state
  }
}
