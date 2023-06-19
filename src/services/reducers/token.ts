import { setCookie } from "../../components/util/cookie";
import { UPDATE_TOKEN_REQUEST_ERROR, UPDATE_TOKEN_REQUEST_SUCCESS } from "../constants/constants";
import { TRequestData } from "../types/types";
import { TokenActions } from "../actions";

type TokenState = {
  error: Readonly<TRequestData> | null;
};

const initialState: TokenState = {
  error: null,
};

export const updateTokenReducer = (state = initialState, action: TokenActions): TokenState => {
  switch (action.type) {
    case UPDATE_TOKEN_REQUEST_SUCCESS: {
      const accessToken = action.data.accessToken.split("Bearer ")[1];
      const refreshToken = action.data.refreshToken;

      setCookie("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);

      return {
        ...state,
        error: null,
      };
    }
    case UPDATE_TOKEN_REQUEST_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
