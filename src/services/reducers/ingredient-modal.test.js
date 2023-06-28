

import {ingredientModalReducer} from "./ingredient-modal";
import {INGREDIENT_CLOSE_MODAL, INGREDIENT_OPEN_MODAL} from "../constants/constants";

describe('ingredient modal reducer', ()=>{

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
    expect(ingredientModalReducer(undefined, {})).toEqual({
      isOpen: false,
      ingredient: null,
    });
  });

  it('should handle INGREDIENT_OPEN_MODAL', ()=>{
    expect(
      ingredientModalReducer(
        {
          isOpen: false,
          ingredient: null
        },
        {
          type: INGREDIENT_OPEN_MODAL,
          ingredient: [ingredient]
        }
      )
    ).toEqual(
      {
        isOpen: true,
        ingredient: [ingredient]
      }
    )
  })

  it('should handle INGREDIENT_CLOSE_MODAL', () => {
    expect(
      ingredientModalReducer(
        {
          isOpen: true,
          ingredient: [ingredient]
        },
        {
          type: INGREDIENT_CLOSE_MODAL,
        }
      )
    ).toEqual(
      {
        isOpen: false,
        ingredient: null
      }
    )
  })

})