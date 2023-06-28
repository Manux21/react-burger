




import {forgotPasswordReducer} from "./forgot-password";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_REQUEST_ERROR,
  FORGOT_PASSWORD_REQUEST_SUCCESS
} from "../constants/constants";
describe('forgot password reducer', () => {


  it("should return the initial state", () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      success: false,
    });
  });


  it('should handle FORGOT_PASSWORD_REQEUST', () => {
    expect(
      forgotPasswordReducer(
        {
        loading: false,
        error: null,
        success: false
      },
        {
          type: FORGOT_PASSWORD_REQUEST,
        }
      )
    ).toEqual(
      {
        loading: true,
        error: null,
        success: false
      }
    )
  })


  it('should handle FORGOT_PASSWORD_REQUEST_SUCCESS', () => {
    expect(
      forgotPasswordReducer({
        loading: true,
        error: null,
        success: false
      },
        {
          type: FORGOT_PASSWORD_REQUEST_SUCCESS,
          data: {success: true, message: 'success message'},
        }
      )
    ).toEqual(
      {
        loading: false,
        success: true,
        error: null,
      }
    )
  })

  it('should handle FORGOT_PASSWORD_REQUEST_ERROR', () => {
    expect(
      forgotPasswordReducer(
        {
          loading: true,
          success: false,
          error: null
        },
        {
          type: FORGOT_PASSWORD_REQUEST_ERROR,
          error: 'error message'
        }
      )
    ).toEqual({
      loading: false,
      error: 'error message',
      success: false,
    })
  })

})