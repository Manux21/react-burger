import { NORMA_API, checkResponse } from "../../components/util/burger-api";
import { getCookie } from "../../components/util/cookie";
import {
  GET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_TOKEN_REQUEST_ERROR,
  UPDATE_TOKEN_REQUEST_SUCCESS,
} from "../constants/constants";
import { profileRequestAsync, profileRequestUpdate } from "./profile";
import { TRequestData, TToken, TOptions } from "../types/types";
import { AppDispatch, AppThunk } from "../types";

type TokenRequestSuccessAction = {
  readonly type: typeof UPDATE_TOKEN_REQUEST_SUCCESS;
  readonly data: Readonly<TToken>;
};
type TokenRequestErrorAction = {
  readonly type: typeof UPDATE_TOKEN_REQUEST_ERROR;
  readonly error: Readonly<TRequestData>;
};

export type TokenActions = TokenRequestSuccessAction | TokenRequestErrorAction;

export const updateTokenRequestSuccess = (data: Readonly<TToken>): TokenRequestSuccessAction => {
  return {
    type: UPDATE_TOKEN_REQUEST_SUCCESS,
    data,
  };
};

export const updateTokenRequestError = (error: Readonly<TRequestData>): TokenRequestErrorAction => {
  return {
    type: UPDATE_TOKEN_REQUEST_ERROR,
    error,
  };
};

export const updateTokenRequestAsync: AppThunk =
  (options: TOptions) => async (dispatch: AppDispatch | AppThunk) => {
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

      switch (options.type) {
        case GET_PROFILE: {
          dispatch(profileRequestAsync());
          break;
        }
        case UPDATE_PROFILE: {
          dispatch(profileRequestUpdate(options.form));
          break;
        }
        default: {
          break;
        }
      }
    } catch (error: any) {
      dispatch(updateTokenRequestError(error));
    }
  };
