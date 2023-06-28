import {signupReducer} from "./signup";
import {SIGN_UP_REQUEST, SIGN_UP_REQUEST_ERROR, SIGN_UP_REQUEST_SUCCESS} from "../constants/constants";
import {sign} from "crypto";

describe('signup reducer', () => {

  const data = {
    success: true,
    accessToken: "Bearer 321",
    refreshToken: "123",
    user: {
      email: "manux21@yandex.ru",
      name: "Artem Egorov",
    },
  };

  it("should return the initial state", () => {
    expect(signupReducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      user: null,
    });
  });


  it('should handle SIGN_UP_REQUEST', () => {
    expect(
      signupReducer(
        {
          loading: false,
          error: null,
          user: null,
        },
        {
          type: SIGN_UP_REQUEST,
        }
      )
    ).toEqual(
      {
        loading: true,
        error: null,
        user: null,
      }
    )
  })


  it('should handle SIGN_UP_REQUEST_SUCCESS', () => {
    expect(
      signupReducer(
        {
          loading: true,
          error: null,
          user: null,
        },
        {
          type: SIGN_UP_REQUEST_SUCCESS,
          data: data
        }
      )
    ).toEqual(
      {
        loading: false,
        user: data.user,
        error: null,
      }
    )
  })

  it('should handle SIGN_UP_REQUEST_ERROR', () => {
    expect(
      signupReducer(
        {
          loading: true,
          error: null,
          user: null,
        },
        {
          type: SIGN_UP_REQUEST_ERROR,
          error: 'error message'
        }
      )
    ).toEqual(
      {
        loading: false,
        error: 'error message',
        user: null,
      }
    )
  })

})