import {
  CLOSE_ORDER,
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS, LOGOUT_REQUEST_ERROR
} from "../constants/constants";
import {ingredientsCountReset} from "./burger-ingredients";
import {constructorReset} from "./burger-constructor";
import {TRequestData} from "../types/types";
import type { AppDispatch, AppThunk } from "../types";
import {request} from '../../components/util/request'
import {getCookie} from "../../components/util/cookie";

type CloseOrderAction = {
  readonly type: typeof CLOSE_ORDER,
}

type OrderRequestAction = {
  readonly type: typeof GET_ORDER_REQUEST,
}

type GetOrderNumberSuccessAction = {
  readonly type: typeof GET_ORDER_SUCCESS,
  number: number
}

type GetOrderNumberErrorAction = {
  readonly type: typeof   GET_ORDER_ERROR,
  error: TRequestData
}


export type OrderModalActions =
    | CloseOrderAction
    | OrderRequestAction
    | GetOrderNumberSuccessAction
    | GetOrderNumberErrorAction


export const closeOrder = (): CloseOrderAction => {
  return {
    type: CLOSE_ORDER,
  }
}

const orderRequest = (): OrderRequestAction => {
  return {
    type: GET_ORDER_REQUEST,
  }
}

const getOrderNumberSuccess = (number : number): GetOrderNumberSuccessAction => {
  return {
    type: GET_ORDER_SUCCESS,
    number,
  }
}

const getOrderNumberError = (error : TRequestData): GetOrderNumberErrorAction => {
  return {
    type: GET_ORDER_ERROR,
    error
  }
}

export const orderNumberRequestAsync: AppThunk =
    (ingredientsId: string[]) => async (dispatch: AppDispatch) => {
      dispatch(orderRequest());

      try {
        const data = await request("/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("accessToken"),
          },
          body: JSON.stringify({
            ingredients: ingredientsId,
          }),
        });
        console.log('actions',data)
        dispatch(getOrderNumberSuccess(data.order.number));
        dispatch(constructorReset());
        dispatch(ingredientsCountReset());
      } catch (error: any) {
        dispatch(getOrderNumberError(error));
      }
    };

