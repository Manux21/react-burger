import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import { getCookie } from "../../components/util/cookie";
import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR,
  PROFILE_STATE_RESET,
  PROFILE_REQUEST_SUCCESS,
  GET_PROFILE,
  UPDATE_PROFILE, GET_ORDER_ERROR,
} from "../constants/constants";
import { updateTokenRequestAsync } from "./token";
import {TForm, TProfile, TRequestData} from "../types/types";
import {AppDispatch, AppThunk} from "../types";



type ProfileRequestAction = {
  readonly type: typeof PROFILE_REQUEST,
}

type ProfileRequestSuccessAction = {
  readonly type: typeof PROFILE_REQUEST_SUCCESS,
  data: Readonly<TProfile>
}

type ProfileRequestErrorAction = {
  readonly type: typeof PROFILE_REQUEST_ERROR;
  readonly error: TRequestData;
};
type ProfileStateResetAction = {
  readonly type: typeof PROFILE_STATE_RESET;
};


export type ProfileActions =
    | ProfileRequestAction
    | ProfileRequestSuccessAction
    | ProfileRequestErrorAction
    | ProfileStateResetAction;



export const profileRequest = (): ProfileRequestAction => {
  return {
    type: PROFILE_REQUEST,
  };
};

export const profileRequestSuccess = (data: Readonly<TProfile>): ProfileRequestSuccessAction => {
  return {
    type: PROFILE_REQUEST_SUCCESS,
    data,
  };
};

export const profileRequestError = (error: TRequestData): ProfileRequestErrorAction => {
  return {
    type: PROFILE_REQUEST_ERROR,
    error,
  };
};


export const profileStateReset = (): ProfileStateResetAction => {
  return {
    type: PROFILE_STATE_RESET,
  };
};


export const profileRequestAsync: AppThunk = () => async (dispatch: AppDispatch | AppThunk) => {
  dispatch(profileRequest());

  try {
    const response = await fetch(`${NORMA_API}/auth/user`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    const data = await checkResponse(response);

    dispatch(profileRequestSuccess(data));
  } catch (error: any) {
    dispatch(profileRequestError(error));

    if (error.message === "jwt expired") {
      dispatch(updateTokenRequestAsync({ type: GET_PROFILE }));
    }
  }
};

export const profileRequestUpdate: AppThunk = (form: TForm) => async (dispatch: AppDispatch | AppThunk) => {
  dispatch(profileRequest());

  try {
    const response = await fetch(`${NORMA_API}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
      body: JSON.stringify(form),
    });

    const data = await checkResponse(response);

    dispatch(profileRequestSuccess(data));
  } catch (error: any) {
    dispatch(profileRequestError(error));

    if (error.message === "jwt expired") {
      dispatch(updateTokenRequestAsync({ type: UPDATE_PROFILE, form }));
    }
  }
};

export const checkUserAuth: AppThunk = () => (dispatch: AppDispatch | AppThunk) => {
  if (getCookie("accessToken")) {
    dispatch(profileRequestAsync());
  }
};