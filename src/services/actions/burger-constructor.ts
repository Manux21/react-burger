import {
  ADD_BUN,
  ADD_INGREDIENT,
  CONSTRUCTOR_MOVE,
  DELETE_INGREDIENT,
  INGREDIENT_COUNT_MINUS,
  INGREDIENT_COUNT_PLUS,
  CONSTRUCTOR_RESET,
} from "../constants/constants";
import { v4 as uuid } from "uuid";

import type { AppDispatch } from "../types";

import { TBurgerIngredients } from "../types/types";

type AddIngredientAction = {
  readonly type: typeof ADD_INGREDIENT;
  readonly ingredient: TBurgerIngredients;
  readonly dragId: string;
};

type DeleteIngredientAction = {
  readonly type: typeof DELETE_INGREDIENT;
  readonly dragId: string;
};

type AddBunAction = {
  readonly type: typeof ADD_BUN;
  readonly bun: TBurgerIngredients;
};
type IngredientCountPlusAction = {
  readonly type: typeof INGREDIENT_COUNT_PLUS;
  readonly id: string;
};

type IngredientCountMinusAction = {
  readonly type: typeof INGREDIENT_COUNT_MINUS;
  readonly id: string;
};

type ConstructorMoveAction = {
  readonly type: typeof CONSTRUCTOR_MOVE;
  readonly newLists: TBurgerIngredients[];
};

type ConstructorResetAction = {
  readonly type: typeof CONSTRUCTOR_RESET;
};

export type BurgerConstructorActions =
  | AddIngredientAction
  | DeleteIngredientAction
  | AddBunAction
  | IngredientCountPlusAction
  | IngredientCountMinusAction
  | ConstructorMoveAction
  | ConstructorResetAction

export const addIngredient = (ingredient: TBurgerIngredients) => (dispatch: AppDispatch) => {
  dispatch({
    type: ADD_INGREDIENT,
    ingredient,
    dragId: uuid(),
  });

  dispatch(ingredientCountPlus(ingredient._id));
};

export const deleteIngredient = (dragId: string, id: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: DELETE_INGREDIENT,
    dragId,
  });

  dispatch(ingredientCountMinus(id));
};

export const addBun = (bun: TBurgerIngredients): AddBunAction => {
  return {
    type: ADD_BUN,
    bun,
  };
};

export const ingredientCountPlus = (id: string): IngredientCountPlusAction => {
  return {
    type: INGREDIENT_COUNT_PLUS,
    id,
  };
};

export const ingredientCountMinus = (id: string): IngredientCountMinusAction => {
  return {
    type: INGREDIENT_COUNT_MINUS,
    id,
  };
};

export const constructorReset = (): ConstructorResetAction => {
  return {
    type: CONSTRUCTOR_RESET,
  };
};


export const constructorMove = (newLists: TBurgerIngredients[]): ConstructorMoveAction => {
  return {
    type: CONSTRUCTOR_MOVE,
    newLists,
  };
};
