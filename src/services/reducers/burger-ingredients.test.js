import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  INGREDIENT_COUNT_PLUS,
  INGREDIENT_COUNT_MINUS,
  INGREDIENTS_COUNT_RESET, GET_INGREDIENTS_ERROR,
} from "../constants/constants";
import { ingredientsReducer } from "./burger-ingredients";

describe("burger-ingredients reducer", () => {
  const error = "Server error"
  const ingredient = {
    _id: "643d69a5c3f7b9001cfa0943",
    name: "Соус фирменный Space Sauce",
    type: "sauce",
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    __v: 0,
    count: 0,
  };

  it("should return the initial state", () => {
    expect(ingredientsReducer(undefined, {})).toEqual({
      error: null,
      ingredients: [],
    });
  });


  it ('should handle GET_INGREDIENT_REQUEST', () => {
    expect(
      ingredientsReducer(
        {
          error: null,
          ingredients: [],
        },
        {
          type: GET_INGREDIENTS_REQUEST,
        }
      )
    ).toEqual(        {
      error: null,
      ingredients: [],
    },)
  })


  it ('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(
      ingredientsReducer(
        {
          error: null,
          ingredients: []
        },
        {
          type: GET_INGREDIENTS_SUCCESS,
          data: [ingredient]
        }
      )
    ).toEqual({
      error: null,
      ingredients: [ingredient]
    })
  })

  it ('should handle INGREDIENT_COUNT_PLUS', ()=>{
    expect(
      ingredientsReducer(
        {
          error: null,
          ingredients: [ingredient]
        },
        {
          type: INGREDIENT_COUNT_PLUS,
          id: "643d69a5c3f7b9001cfa0943",
        }
      )
    ).toEqual(
      {
        error: null,
        ingredients: [Object.assign(ingredient, {count: 1})]
      }
    )
  })

  it ('should handle INGREDIENT_COUNT_MINUS', ()=>{
    expect(
      ingredientsReducer(
        {
          error: null,
          ingredients: [Object.assign(ingredient, {count: 1})]
        },
        {
          type: INGREDIENT_COUNT_MINUS,
          id: "643d69a5c3f7b9001cfa0943",
        }
      )
    ).toEqual(
      {
        error: null,
        ingredients: [Object.assign(ingredient, {count: 0})]
      }
    )
  })


  it ('should handle INGREDIENTS_COUNT_RESET', () => {
    expect(
      ingredientsReducer(
        {
          error: null,
          ingredients: [ingredient]
        },
        {
          type: INGREDIENTS_COUNT_RESET,
        }
      )
    ).toEqual({
      error: null,
      ingredients: [Object.assign(ingredient, {count: 0})]
    })
  })

  it ('should handle GET_INGREDIENTS_ERROR', ()=>{
    expect(
      ingredientsReducer(
        {
          error: null,
          ingredients: []
        },
        {
          type: GET_INGREDIENTS_ERROR,
          error: error
        }
      )
    ).toEqual({
      error: error,
      ingredients: []
    })
  })
});