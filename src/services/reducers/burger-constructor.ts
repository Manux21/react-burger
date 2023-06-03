import {
  ADD_BUN,
  ADD_INGREDIENT,
  CONSTRUCTOR_MOVE,
  DELETE_BUN,
  DELETE_INGREDIENT,
  CONSTRUCTOR_RESET
} from "../constants/constants";
import { TBurgerIngredients, TRequestData } from "../types/types";
import { BurgerConstructorActions, BurgerIngredientsActions } from "../actions";

type BurgerConstructorState = {
  ingredients: TBurgerIngredients[];
  bun: TBurgerIngredients | null;
};

export const initialState: BurgerConstructorState = {
  ingredients: [],
  bun: null,
};

export const constructorReducer = (
  state = initialState,
  action: BurgerConstructorActions,
): BurgerConstructorState => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, { ...action.ingredient, dragId: action.dragId }],
      };
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.filter((ingredient) => ingredient.dragId !== action.dragId),
      };
    }

    case ADD_BUN: {
      return {
        ...state,
        bun: action.bun,
      };
    }

    // case DELETE_BUN: {
    //   return {
    //     ...state,
    //     bun: null,
    //   };
    // }

    case CONSTRUCTOR_MOVE: {
      return {
        ...state,
        ingredients: action.newLists,
      };
    }
    case CONSTRUCTOR_RESET: {
      return initialState;
    }
    default:
      return state;
  }
};
