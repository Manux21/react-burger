import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_ERROR,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_STATE_RESET, LOGOUT_REQUEST_ERROR,
} from "../constants/constants";


import {checkUserAuth, profileStateReset} from "./profile";
import {deleteCookie, getCookie} from "../../components/util/cookie";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginRequestSuccess = (data) => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    data,
  };
};

const loginRequestError = (error) => {
  return {
    type: LOGIN_REQUEST_ERROR,
    error,
  };
};

export const loginStateReset = () => {
  return {
    type: LOGIN_STATE_RESET,
  };
};


const logoutRequestError = (error) => {
  return {
    type: LOGOUT_REQUEST_ERROR,
    error,
  };
};

export const loginRequestAsync = (form) => async (dispatch) => {
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
  } catch (error) {
    dispatch(loginRequestError(error));
  }
};


export const logoutRequestAsync = () => async (dispatch) => {
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
  } catch (error) {
    dispatch(logoutRequestError(error));
  }
};

