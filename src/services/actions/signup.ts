import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import {
  SIGN_UP_REQUEST,
  SIGN_UP_REQUEST_ERROR,
  SIGN_UP_REQUEST_SUCCESS,
} from "../constants/constants";
import { TForm, TRequestData, TRegister } from "../types/types";
import { AppDispatch, AppThunk } from "../types";
import { checkUserAuth } from "./profile";

type SignupRequestAction = {
  readonly type: typeof SIGN_UP_REQUEST;
};
type SignupRequestSuccessAction = {
  readonly type: typeof SIGN_UP_REQUEST_SUCCESS;
  readonly data: Readonly<TRegister>;
};
type SignupRequestErrorAction = {
  readonly type: typeof SIGN_UP_REQUEST_ERROR;
  readonly error: Readonly<TRequestData>;
};

export type SignupActions =
  | SignupRequestAction
  | SignupRequestSuccessAction
  | SignupRequestErrorAction;

const signupRequest = (): SignupRequestAction => {
  return {
    type: SIGN_UP_REQUEST,
  };
};

const signupRequestSuccess = (data: Readonly<TRegister>): SignupRequestSuccessAction => {
  return {
    type: SIGN_UP_REQUEST_SUCCESS,
    data,
  };
};

const signupRequestError = (error: Readonly<TRequestData>): SignupRequestErrorAction => {
  return {
    type: SIGN_UP_REQUEST_ERROR,
    error,
  };
};

export const signupRequestAsync: AppThunk =
  (form: TForm) => async (dispatch: AppDispatch | AppThunk) => {
    dispatch(signupRequest());

    try {
      const response = await fetch(`${NORMA_API}/auth/register`, {
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

      dispatch(signupRequestSuccess(data));
      dispatch(checkUserAuth());
      return data;
    } catch (error: any) {
      dispatch(signupRequestError(error));
    }
  };
