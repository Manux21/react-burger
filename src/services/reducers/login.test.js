import {loginReducer} from "./login";
import {LOGIN_REQUEST, LOGIN_REQUEST_ERROR, LOGIN_REQUEST_SUCCESS, LOGIN_STATE_RESET} from "../constants/constants";


describe('login reducer', () => {

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
    expect(loginReducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      user: null
    });
  });


  it('should handle LOGIN_REQUEST', () => {
    expect(loginReducer(
      {
        loading: false,
        error: null,
        user: null,
      },
      {
        type: LOGIN_REQUEST,
      }
    )).toEqual({
      loading: true,
      error: null,
      user: null,
    })
  })


  it('should handle LOGIN_REQUEST_SUCCESS', ()=> {
    expect(
      loginReducer(
        {
          loading: true,
          error: null,
          user: null,
        },
        {
          type: LOGIN_REQUEST_SUCCESS,
          data: data
        }
      )
    ).toEqual(
      {
        loading: false,
        user: data.user,
        error: null
      }
    )
  })


  it('should handle LOGIN_REQUEST_ERROR', () => {
    expect(
      loginReducer(
        {
          loading: false,
          error: null,
          user: null
        },
        {
          type: LOGIN_REQUEST_ERROR,
          error: 'error message'
        }
      )
    ).toEqual(
      {
        loading: false,
        user: null,
        error: 'error message'
      }
    )
  })

  it('should handle LOGIN_STATE_RESET', () => {
    expect(
      loginReducer(
        {
          loading: false,
          user: {email: 'example@example.com', login: 'example'},
          error: null,
        },
        {
          type: LOGIN_STATE_RESET,
        }
      )
    ).toEqual(
      {
        loading: false,
        error: null,
        user: null
      }
    )
  })

})