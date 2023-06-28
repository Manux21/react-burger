import {updateTokenReducer} from "./token";
import {UPDATE_TOKEN_REQUEST_ERROR, UPDATE_TOKEN_REQUEST_SUCCESS} from "../constants/constants";

describe('token reducer', () => {
  const data = {
    success: true,
    accessToken: "Bearer 321",
    refreshToken: "123",
  };
  const error = {
    success: false,
    message: "Fatal error",
  };

  it("should return the initial state", () => {
    expect(updateTokenReducer(undefined, {})).toEqual({
      error: null,
    });
  });

  it("should handle TOKEN_REQUEST_SUCCESS", () => {
    expect(
      updateTokenReducer(
        {
          error: null,
        },
        {
          type: UPDATE_TOKEN_REQUEST_SUCCESS,
          data,
        },
      ),
    ).toEqual({
      error: null,
    });
  });

  it("should handle TOKEN_REQUEST_ERROR", () => {
    expect(
      updateTokenReducer(
        {
          error: null,
        },
        {
          type: UPDATE_TOKEN_REQUEST_ERROR,
          error,
        },
      ),
    ).toEqual({
      error,
    });
  });
})