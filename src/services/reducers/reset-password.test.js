import {resetPasswordReducer} from "./reset-password";
import {RESET_PASSWORD_INITIAL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST_ERROR} from "../constants/constants";



describe('reset password reducer', () => {

  const data = {
    success: true,
    accessToken: "Bearer 321",
    refreshToken: "123",
    user: {
      email: "manux21@yandex.ru",
      name: "Artem Egorov",
    },
  };

  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      success: false,
    });
  })


  it('should handle RESET_PASSWORD_REQUEST', () => {
    expect(
      resetPasswordReducer(
        {
          loading: false,
          error: null,
          success: false,
        },
        {
          type: RESET_PASSWORD_REQUEST
        }
      )
    ).toEqual({
      loading: true,
      error: null,
      success: false,
    })
  })


  it('should handle RESET_PASSWORD_REQUEST_SUCCESS', () => {
    expect(
      resetPasswordReducer(
        {
          loading: true,
          error: null,
          success: false,
        },
        {
          type: "RESET_PASSWORD_REQUEST_SUCCESS",
          data: data
        }
      )
    ).toEqual(
      {
        loading: false,
        error: null,
        success: data.success
      }
    )
  })

  it('should handle RESET_PASSWORD_REQUEST_ERROR', () => {
    expect(
      resetPasswordReducer(
        {
          loading: true,
          error: null,
          success: false,
        },
        {
          type: RESET_PASSWORD_REQUEST_ERROR,
          error: 'error message',
        }
      )
    ).toEqual({
      loading: false,
      error: 'error message',
      success: false
    })
  })

  it('should handle RESET_PASSWORD_INITIAL', () => {
    expect(
      resetPasswordReducer(
        {
          loading: false,
          error: null,
          success: false,
        },
        {
          type: RESET_PASSWORD_INITIAL,
        }
      )
    ).toEqual(
      {
        loading: false,
        error: null,
        success: false,
      }
    )
  })

})

