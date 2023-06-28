import {orderModalReducer} from "./order-modal";
import {CLOSE_ORDER, GET_ORDER_ERROR, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../constants/constants";


describe('order modal reducer', () => {

  it('should return the initial state', () => {
    expect(orderModalReducer(undefined, {})).toEqual({
      orderNumber: null,
      error: null,
      status: false,
    });
  })


  it('should handle GET_ORDER_REQUEST', () => {
    expect(
      orderModalReducer(
        {
          orderNumber: null,
          error: null,
          status: false,
        },
        {
          type: GET_ORDER_REQUEST,
        }
      )
    ).toEqual({
      orderNumber: null,
      error: null,
      status: true
    })
  })

  it('should handle GET_ORDER_SUCCESS', () => {
    expect(
      orderModalReducer(
        {
          orderNumber: null,
          error: null,
          status: true,
        },
        {
          type: GET_ORDER_SUCCESS,
          number: 12,
        }
      )
    ).toEqual(
      {
        orderNumber: 12,
        error: null,
        status: true
      }
    )
  })

  it('should handle GET_ORDER_ERROR', () => {
    expect(
      orderModalReducer(
        {
          orderNumber: null,
          error: null,
          status: true
        },
        {
          type: GET_ORDER_ERROR,
          error: 'error message'
        }
      )
    ).toEqual({
      orderNumber: null,
      error: 'error message',
      status: false,
    })
  })


  it('should handle CLOSE_ORDER', () => {
    expect(
      orderModalReducer(
        {
          orderNumber: 12,
          error: null,
          status: true
        },
        {
          type: CLOSE_ORDER,
        }
      )
    ).toEqual(
      {
        orderNumber: null,
        error: null,
        status: false,
      }
    )
  })

})