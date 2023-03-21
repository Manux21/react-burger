import {CLOSE_ORDER, GET_ORDER} from "../actions/constants";


const initialState = {
  orderNumber: null,
}

export const orderModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ORDER: {
      return {
        ...state,
        orderNumber: action.number
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