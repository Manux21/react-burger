import {CLOSE_ORDER, GET_ORDER} from "./constants";


export const getOrder = (number) => {
  return {
    type: GET_ORDER,
    number,
  }
}

export const closeOrder = () => {
  return {
    type: CLOSE_ORDER,
  }
}