import { setCookie } from "../../components/util/cookie";
import { UPDATE_TOKEN_REQUEST_ERROR, UPDATE_TOKEN_REQUEST_SUCCESS } from "../constants/constants";

const initialState = {
  accessToken: null,
  refreshToken: null,
  error: "",
};

export const updateTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN_REQUEST_SUCCESS: {
      console.log("New Tokens:", action.data.accessToken, action.data.refreshToken);

      const accessToken = action.data.accessToken.split("Bearer ")[1];
      const refreshToken = action.data.refreshToken;

      setCookie("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);

      return {
        ...state,
        accessToken: accessToken,
        refreshToken: refreshToken,
        error: "",
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
