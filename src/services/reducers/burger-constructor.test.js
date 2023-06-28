import {
  ADD_BUN,
  ADD_INGREDIENT, CONSTRUCTOR_RESET, DELETE_INGREDIENT,
} from "../constants/constants";
import {constructorReducer} from "./burger-constructor";

describe("burger-constructor reducer", () => {
  const dragId = "431b7655-49dc-4ea7-8630-51b7f4a20d42";
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
    expect(constructorReducer(undefined, {})).toEqual({
      bun: null,
      ingredients: [],
    });
  });

  it('should handle ADD_INGREDIENT', () => {
    expect(
      constructorReducer(
        {
          ingredients: [],
          bun: null,
        },
        {
          type: ADD_INGREDIENT,
          ingredient: ingredient ,
          dragId: "431b7655-49dc-4ea7-8630-51b7f4a20d42",
        }
      )
    ).toEqual({
      ingredients: [{...ingredient, dragId}],
      bun: null,
    })
  })

  it('should handle DELETE_INGREDIENT', () => {
    expect(
      constructorReducer(
        {
          ingredients: [ingredient],
          bun: null,
        },
        {
          type: DELETE_INGREDIENT,
          dragId: "431b7655-49dc-4ea7-8630-51b7f4a20d42",
        }
      )
    ).toEqual({
      ingredients: [ingredient],
      bun: null,
    })
  })

  it('should handle ADD_BUN', () => {
    expect(
      constructorReducer(
        {
          ingredients: [],
          bun: null,
        },
        {
          type: ADD_BUN,
          bun: ingredient
        }
      )
    ).toEqual({
      ingredients: [],
      bun: ingredient
    })
  })


  it('should handle CONSTRUCTOR_RESET', () => {
    expect(
      constructorReducer(
        {
          ingredients: [ingredient],
          bun: ingredient,
        },
        {
          type: CONSTRUCTOR_RESET,
        }
      )
    ).toEqual({
      ingredients: [],
      bun: null,
    })
  })

});

