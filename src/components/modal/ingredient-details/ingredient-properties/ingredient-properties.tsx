import React, {FC} from 'react';
import styles from './ingredient-properties.module.css'
import IngredientProperty from "./ingredient-property/ingredient-property";
import {TBurgerIngredients} from "../../../../services/types/types";

type IngredientPropertiesProps = {
    data: TBurgerIngredients
}


const IngredientProperties:FC<IngredientPropertiesProps> = ({data}) => {

  return (
    <div className={styles.properties}>
      <IngredientProperty name='Калории,ккал' property={data.calories}/>
      <IngredientProperty name='Белки, г' property={data.proteins}/>
      <IngredientProperty name='Жиры, г' property={data.fat}/>
      <IngredientProperty name='Углеводы, г' property={data.carbohydrates}/>
    </div>
  );
};


export default IngredientProperties;
