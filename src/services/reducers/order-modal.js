import {CLOSE_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS} from "../actions/constants";


const initialState = {
  orderNumber: null,
  error: null,
}

export const orderModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.number
      }
    }

    case GET_ORDER_ERROR: {
      return {
        orderNumber: initialState.orderNumber,
        error: action.error
      }
    }

    case CLOSE_ORDER: {
      return initialState
    }
    default: {
      return state
    }
  }
}