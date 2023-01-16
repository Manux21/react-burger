import React from 'react';
import styles from './ingredient-properties.module.css'
import IngredientProperty from "./ingredient-property/ingredient-property";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../../../util/prop-types";

const IngredientProperties = ({data}) => {

  return (
    <div className={styles.properties}>
      <IngredientProperty name='Калории,ккал' property={data.calories}/>
      <IngredientProperty name='Белки, г' property={data.proteins}/>
      <IngredientProperty name='Жиры, г' property={data.fat}/>
      <IngredientProperty name='Углеводы, г' property={data.carbohydrates}/>
    </div>
  );
};

IngredientProperties.propTypes = {
  data: ingredientPropTypes.isRequired
}

export default IngredientProperties;
