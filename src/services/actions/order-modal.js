import {
  CLOSE_ORDER,
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS
} from "../constants/constants";
import axios from "axios";
import {NORMA_API} from "../../components/util/burger-api";

export const closeOrder = () => {
  return {
    type: CLOSE_ORDER,
  }
}

const orderRequest = () => {
  return {
    type: GET_ORDER_REQUEST,
  }
}

const getOrderNumberSuccess = (number) => {
  return {
    type: GET_ORDER_SUCCESS,
    number,
  }
}

const getOrderNumberError = (error) => {
  return {
    type: GET_ORDER_ERROR,
    error
  }
}

export const getIngredientsRequest = (array) => (dispatch) => {
  dispatch(orderRequest())
  axios.post(`${NORMA_API}/orders`, {
    "ingredients": array
  })
    .then(data => {
      dispatch(getOrderNumberSuccess(data.data.order.number))
    })
    .catch(error => {
      dispatch(getOrderNumberError(error))
    })
}
