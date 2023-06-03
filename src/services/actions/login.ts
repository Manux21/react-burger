import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import {
  INGREDIENT_CLOSE_MODAL,
  INGREDIENT_OPEN_MODAL,
  LOGIN_REQUEST,
  LOGIN_REQUEST_ERROR,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_STATE_RESET,
  LOGOUT_REQUEST_ERROR,
} from "../constants/constants";

import { checkUserAuth, profileStateReset } from "./profile";
import { deleteCookie, getCookie } from "../../components/util/cookie";
import { TBurgerIngredients, TFormData, TLoginData, TRequestData } from "../types/types";
import { AppDispatch, AppThunk } from "../types";

type LoginRequestAction = {
  readonly type: typeof LOGIN_REQUEST;
};

type LoginRequestSuccessAction = {
  readonly type: typeof LOGIN_REQUEST_SUCCESS;
  data: TLoginData;
};

type LoginRequestErrorAction = {
  readonly type: typeof LOGIN_REQUEST_ERROR;
  error: TRequestData;
};

type LoginStateResetAction = {
  readonly type: typeof LOGIN_STATE_RESET;
};

type LogoutRequestErrorAction = {
  readonly type: typeof LOGOUT_REQUEST_ERROR;
  error: TRequestData;
};

export type LoginActions =
  | LoginRequestAction
  | LoginRequestSuccessAction
  | LoginRequestErrorAction
  | LoginStateResetAction
  | LogoutRequestErrorAction;

const loginRequest = (): LoginRequestAction => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginRequestSuccess = (data: TLoginData): LoginRequestSuccessAction => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    data,
  };
};

const loginRequestError = (error: TRequestData): LoginRequestErrorAction => {
  return {
    type: LOGIN_REQUEST_ERROR,
    error,
  };
};

export const loginStateReset = (): LoginStateResetAction => {
  return {
    type: LOGIN_STATE_RESET,
  };
};

const logoutRequestError = (error: TRequestData): LogoutRequestErrorAction => {
  return {
    type: LOGOUT_REQUEST_ERROR,
    error,
  };
};

export const loginRequestAsync: AppThunk =
  (form: TFormData) => async (dispatch: AppDispatch | AppThunk) => {
    dispatch(loginRequest());

    try {
      const response = await fetch(`${NORMA_API}/auth/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(form),
      });

      const data = await checkResponse(response);

      dispatch(loginRequestSuccess(data));
      dispatch(checkUserAuth());
    } catch (error: any) {
      dispatch(loginRequestError(error));
    }
  };

export const logoutRequestAsync: AppThunk = () => async (dispatch: AppDispatch | AppThunk) => {
  try {
    await fetch(`${NORMA_API}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: getCookie("refreshToken") }),
    });

    dispatch(loginStateReset());
    dispatch(profileStateReset());
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
  } catch (error: any) {
    dispatch(logoutRequestError(error));
  }
};
