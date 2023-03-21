import axios from "axios";
import { GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR } from "./constants";
import { NORMA_API } from "../../components/util/burger-api";

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

export const getIngredientsRequest = () => (dispatch) => {
  axios.get(`${NORMA_API}/ingredients`)
    .then(data => {
      dispatch(getIngredientsSuccess(data.data.data))
    })
      .catch(error => {
        dispatch(getIngredientsError(error))
      })
}
