import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST_ERROR,
  FORGOT_PASSWORD_REQUEST_SUCCESS,
  FORGOT_PASSWORD_RESET, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS,
} from "../constants/constants";
import {TBurgerIngredients, TFormData, TRequestData} from "../types/types";
import {AppDispatch, AppThunk} from "../types";




type ForgotPasswordRequestAction =  {
  readonly type: typeof FORGOT_PASSWORD_REQUEST,
}


type ForgotPasswordRequestSuccessAction = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST_SUCCESS,
  data: TRequestData,
}


type ForgotPasswordRequestErrorAction = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST_ERROR,
  error: TRequestData
}

export type ForgotPasswordActions =
  | ForgotPasswordRequestAction
  | ForgotPasswordRequestSuccessAction
  | ForgotPasswordRequestErrorAction




const forgotPasswordRequest = (): ForgotPasswordRequestAction => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

const forgotPasswordRequestSuccess = (data: TRequestData) : ForgotPasswordRequestSuccessAction => {
  return {
    type: FORGOT_PASSWORD_REQUEST_SUCCESS,
    data,
  };
};

const forgotPasswordRequestError = (error: TRequestData) :ForgotPasswordActions => {
  return {
    type: FORGOT_PASSWORD_REQUEST_ERROR,
    error,
  };
};

// export const forgotPasswordReset = () => {
//   return {
//     type: FORGOT_PASSWORD_RESET,
//   };
// };

export const forgotPasswordRequestAsync: AppThunk = (form: TFormData ) => async (dispatch: AppDispatch) => {
  dispatch(forgotPasswordRequest());

  try {
    const response = await fetch(`${NORMA_API}/password-reset`, {
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

    dispatch(forgotPasswordRequestSuccess(data));
  } catch (error: any) {
    dispatch(forgotPasswordRequestError(error));
  }
};