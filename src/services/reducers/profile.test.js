import {profileReducer} from "./profile";
import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_ERROR,
  PROFILE_REQUEST_SUCCESS,
  PROFILE_STATE_RESET
} from "../constants/constants";

describe('profile reducer', () => {

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
    expect(profileReducer(undefined, {})).toEqual({
      loading: false,
      error: null,
      user: null,
    });
  })

  it('should handle PROFILE_REQUEST', () => {
    expect(profileReducer(
      {
        loading: false,
        error: null,
        user: null,
      },
      {
        type: PROFILE_REQUEST
      }
    )).toEqual(
      {
        loading: true,
        error: null,
        user: null,
      }
    )
  })


  it('should handle PROFILE_REQUEST_SUCCESS', () => {
    expect(profileReducer(
      {
        loading: true,
        error: null,
        user: null,
      },
      {
        type: PROFILE_REQUEST_SUCCESS,
        data: data
      }
    )).toEqual({
      loading: false,
      error: null,
      user: data.user
    })
  })


  it('should handle PROFILE_REQUEST_ERROR', () => {
    expect(profileReducer(
      {
        loading: true,
        error: null,
        user: null,
      },
      {
        type: PROFILE_REQUEST_ERROR,
        error: 'error message',
      }
    )).toEqual(
      {
        loading: false,
        error: 'error message',
        user: null
      }
    )
  })

  it('should handle PROFILE_STATE_RESET', () => {
    expect(profileReducer(
      {
        loading: false,
        error: null,
        user: data.user
      },
      {
        type: PROFILE_STATE_RESET,
      }
    )).toEqual(
      {
        loading: false,
        error: null,
        user: null,
      }
    )
  })

})