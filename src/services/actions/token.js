import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import { getCookie } from "../../components/util/cookie";
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_TOKEN_REQUEST_ERROR,
  UPDATE_TOKEN_REQUEST_SUCCESS,
} from "../constants/constants";
import { profileRequestAsync, profileRequestUpdate } from "./profile";

export const updateTokenRequestSuccess = (data) => {
  return {
    type: UPDATE_TOKEN_REQUEST_SUCCESS,
    data,
  };
};

export const updateTokenRequestError = (error) => {
  return {
    type: UPDATE_TOKEN_REQUEST_ERROR,
    error,
  };
};

export const updateTokenRequestAsync = (request) => async (dispatch) => {
  try {
    const response = await fetch(`${NORMA_API}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    });

    const data = await checkResponse(response);

    dispatch(updateTokenRequestSuccess(data));

    switch (request.type) {
      case GET_PROFILE: {
        dispatch(profileRequestAsync());
        break;
      }
      case UPDATE_PROFILE: {
        dispatch(profileRequestUpdate(request.form));
        break;
      }
      default: {
        break;
      }
    }
  } catch (error) {
    dispatch(updateTokenRequestError(error));
  }
};