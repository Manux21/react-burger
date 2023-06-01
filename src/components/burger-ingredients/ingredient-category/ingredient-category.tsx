import React, {FC} from 'react';
import styles from './ingredient-category.module.css'
import {forwardRef} from 'react'
import {TBurgerIngredients} from "../../../services/types/types";
import Ingredient from "../ingredient/ingredient";
import {ingredientOpenModal} from "../../../services/actions/ingredient-modal";
import {useDispatch, useSelector} from "react-redux";

type IngredientCategoryProps = {
  type: string,
}

type BurgerIngredientsState = {
  burgerIngredients: {
    ingredients: TBurgerIngredients[]
  }
}

const IngredientCategory = forwardRef<HTMLDivElement, IngredientCategoryProps>(({type},ref) => {

  const data = useSelector((store: BurgerIngredientsState) => store.burgerIngredients.ingredients)

  const dispatch = useDispatch()
  const modalHandler = (ingredientData: TBurgerIngredients) => {
    dispatch(ingredientOpenModal(ingredientData))
  }

  const getIngredients = (type: string) => {
    return data?.filter(ingredient => ingredient.type === type)
        .map(ingredient => {
          return (
              <div className={styles.ingredient} onClick={() => {
                modalHandler(ingredient)
              }
              } key={ingredient._id}>
                <Ingredient
                    ingredient={ingredient}
                />
              </div>
          )
        })
  }

  const getIngredient = getIngredients(type)
  let IngredientName: string | null = '';

  switch(type) {
    case 'bun':
      IngredientName = 'Булки'
      break;
    case 'sauce':
      IngredientName = 'Соусы'
      break;
    case 'main':
      IngredientName = 'Начинки'
      break;
    default:
      IngredientName = null
      break;
  }

  return (
    <div ref={ref} className={styles.ingredientCategory}>
      <div className={styles.ingredientCategoryHeader}>
        <p className="text text_type_main-medium">
          {IngredientName}
        </p>
      </div>
      <div className={styles.ingredientCategoryCards}>
        {getIngredient}
      </div>
    </div>
  )
})

export default IngredientCategory;
