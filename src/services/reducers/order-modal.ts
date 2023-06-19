import {CLOSE_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS, GET_ORDER_REQUEST} from "../constants/constants";
import {TOrder, TRequestData} from "../types/types";
import {OrderModalActions} from "../actions";


type OrderModalState = {
  orderNumber: number | null;
  error: Readonly<TRequestData> | null;
  status: boolean;
};


const initialState: OrderModalState = {
  orderNumber: null,
  error: null,
  status: false,
}

export const orderModalReducer = (state = initialState, action: OrderModalActions): OrderModalState => {
  switch (action.type) {

    case GET_ORDER_REQUEST: {
      return {
        ...state,
        status: true,
      }
    }

    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.number,
      }
    }

    case GET_ORDER_ERROR: {
      return {
        orderNumber: initialState.orderNumber,
        error: action.error,
        status: false,
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