import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST_ERROR,
  FORGOT_PASSWORD_REQUEST_SUCCESS,
  FORGOT_PASSWORD_RESET,
} from "../constants/constants";
import { TRequestData } from "../types/types"
import { ForgotPasswordActions } from "../actions";

type ForgotPasswordState = {
  loading: boolean;
  error: TRequestData | null;
  success: boolean;
};

const initialState: ForgotPasswordState = {
  loading: false,
  error: null,
  success: false,
};

export const forgotPasswordReducer = (state = initialState, action: ForgotPasswordActions): ForgotPasswordState => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FORGOT_PASSWORD_REQUEST_SUCCESS: {
      return {
        ...state,
        success: action.data.success,
        loading: false,
      };
    }
    case FORGOT_PASSWORD_REQUEST_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    // case FORGOT_PASSWORD_RESET: {
    //   return {
    //     ...state,
    //     success: initialState.success,
    //   };
    // }
    default: {
      return state;
    }
  }
};