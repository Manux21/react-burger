import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import {
  RESET_PASSWORD_INITIAL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST_ERROR,
  RESET_PASSWORD_REQUEST_SUCCESS,
} from "../constants/constants";
import {TForm, TProfile, TRequestData} from "../types/types";
import {AppDispatch, AppThunk} from "../types";

type ResetPasswordRequestAction = {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};
type ResetPasswordRequestSuccessAction = {
  readonly type: typeof RESET_PASSWORD_REQUEST_SUCCESS;
  readonly data: TRequestData;
};
type ResetPasswordRequestErrorAction = {
  readonly type: typeof RESET_PASSWORD_REQUEST_ERROR;
  readonly error: TRequestData;
};
type ResetPasswordInitialAction = {
  readonly type: typeof RESET_PASSWORD_INITIAL;
};

export type ResetPasswordActions =
    | ResetPasswordRequestAction
    | ResetPasswordRequestSuccessAction
    | ResetPasswordRequestErrorAction
    | ResetPasswordInitialAction;

const resetPasswordRequest = (): ResetPasswordRequestAction => {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};

const resetPasswordRequestSuccess = (data: TRequestData): ResetPasswordRequestSuccessAction => {
  return {
    type: RESET_PASSWORD_REQUEST_SUCCESS,
    data,
  };
};

const resetPasswordRequestError = (error: TRequestData): ResetPasswordRequestErrorAction => {
  return {
    type: RESET_PASSWORD_REQUEST_ERROR,
    error,
  };
};

export const resetPasswordInitial = (): ResetPasswordInitialAction => {
  return {
    type: RESET_PASSWORD_INITIAL,
  };
};

export const resetPasswordRequestAsync: AppThunk = (form: TForm) => async (dispatch: AppDispatch) => {
  dispatch(resetPasswordRequest());

  try {
    const response = await fetch(`${NORMA_API}/password-reset/reset`, {
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

    dispatch(resetPasswordRequestSuccess(data));
  } catch (error: any) {
    dispatch(resetPasswordRequestError(error));
  }
};