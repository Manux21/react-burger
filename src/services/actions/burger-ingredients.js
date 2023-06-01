import axios from "axios";
import {GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST} from "../constants/constants";
import {NORMA_API} from "../../components/util/burger-api";

const getIngredientsSuccess = (data) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    data,
  }
}

const getIngredientsError = (error) => {
  return {
    type: GET_INGREDIENTS_ERROR,
    error

  }
}

const getIngredientRequest = () => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  }
}

export const getIngredientsRequest = () => (dispatch) => {
  dispatch(getIngredientRequest())
  axios.get(`${NORMA_API}/ingredients`)
    .then(data => {
      dispatch(getIngredientsSuccess(data.data.data))
    })
    .catch(error => {
      dispatch(getIngredientsError(error))
    })
}

