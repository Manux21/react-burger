import React from 'react';
import styles from './ingredient-details.module.css'
import IngredientProperties from "./ingredient-properties/ingredient-properties";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {TBurgerIngredients} from "../../../services/types/types";


type BurgerIngredientState = {
    burgerIngredients: {
        ingredients: TBurgerIngredients[],
        isOpen: boolean,
    }
}

const IngredientDetails = () => {

  const { id } = useParams();
  const ingredients = useSelector((state: BurgerIngredientState) => state.burgerIngredients.ingredients);

  const ingredient = React.useMemo(
    () => ingredients.find((item) => item._id === id),
    [id, ingredients],
  );

  const isModal = useSelector((state : BurgerIngredientState) => state.burgerIngredients.isOpen);

  if (!ingredient) {
    return null;
  }

  if (!ingredient) {
    return null;
  }

  return (
    <div className={`${styles.ingredientDetails} ${!isModal ? '' : styles.topMargin}`}>
      <div className={styles.detailsTittle}>
        <p className="text text_type_main-large">
          Детали ингредиента
        </p>
      </div>

      <img className={styles.image} src={ingredient.image_large} alt={'Изображение ингредиента'}/>
      <p className={`text text_type_main-medium ${styles.name}`}>
        {ingredient.name}
      </p>
      <IngredientProperties data={ingredient}/>
    </div>
  );
};


export default IngredientDetails;
