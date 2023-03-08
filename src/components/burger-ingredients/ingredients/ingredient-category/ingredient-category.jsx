import React from 'react';
import styles from './ingredient-category.module.css'
import PropTypes from "prop-types";

const IngredientCategory = ({getIngredients, type}) => {

  const getIngredient = getIngredients(type)
  let IngredientName = '';

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
    <div className={styles.ingredientCategory}>
      <div className={styles.ingredientCategoryHeader}>
        <p className="text text_type_main-medium">
          {IngredientName}
        </p>
      </div>
      <div className={styles.ingredientCategoryCards}>
        {getIngredient}
      </div>
    </div>
  );
};


IngredientCategory.propTypes = {
  getIngredients: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default IngredientCategory;
