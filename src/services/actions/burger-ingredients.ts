import axios from "axios";
import {
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_REQUEST,
  INGREDIENT_COUNT_PLUS, INGREDIENT_COUNT_MINUS,
  INGREDIENTS_COUNT_RESET,
} from "../constants/constants";
import {NORMA_API} from "../../components/util/burger-api";

import {TBurgerIngredients, TRequestData} from "../types/types";
import {AppDispatch, AppThunk} from "../types";


type GetIngredientsSuccessAction = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS,
  data: TBurgerIngredients[],
}


type GetIngredientsErrorAction = {
  readonly type: typeof GET_INGREDIENTS_ERROR,
  error: TRequestData,
}


type GetIngredientRequestAction = {
  readonly type: typeof GET_INGREDIENTS_REQUEST,
}

type IngredientCountPlusAction = {
  readonly type: typeof INGREDIENT_COUNT_PLUS;
  readonly id: string;
};

type IngredientCountMinusAction = {
  readonly type: typeof INGREDIENT_COUNT_MINUS;
  readonly id: string;
};

type IngredientsCountResetAction = {
  readonly type: typeof INGREDIENTS_COUNT_RESET;
};

export type BurgerIngredientsActions =
  | GetIngredientsSuccessAction
  | GetIngredientsErrorAction
  | GetIngredientRequestAction
  | IngredientCountPlusAction
  | IngredientCountMinusAction
  | IngredientsCountResetAction



const getIngredientsSuccess = (data: TBurgerIngredients[]) : GetIngredientsSuccessAction => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    data,
  }
}

const getIngredientsError = (error: TRequestData) : GetIngredientsErrorAction => {
  return {
    type: GET_INGREDIENTS_ERROR,
    error

  }
}

const getIngredientRequest = (): GetIngredientRequestAction => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  }
}

export const ingredientCountPlus = (id: string): IngredientCountPlusAction => {
  return {
    type: INGREDIENT_COUNT_PLUS,
    id
  }
}

export const ingredientCountMinus = (id :string) :IngredientCountMinusAction => {
  return {
    type: INGREDIENT_COUNT_MINUS,
    id
  }
}

export const ingredientsCountReset = (): IngredientsCountResetAction => {
  return {
    type: INGREDIENTS_COUNT_RESET,
  };
};

export const getIngredientsRequest: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getIngredientRequest())
  axios.get(`${NORMA_API}/ingredients`)
    .then(data => {
      dispatch(getIngredientsSuccess(data.data.data))
    })
    .catch(error => {
      dispatch(getIngredientsError(error))
    })
}

