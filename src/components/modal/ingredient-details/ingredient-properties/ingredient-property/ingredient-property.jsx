import React from 'react';
import styles from './ingredient-property.module.css'
import PropTypes from "prop-types";

const IngredientProperty = ({name, property}) => {
  return (
    <div className={styles.property}>
      <p className="text text_type_main-default text_color_inactive">
        {name}
      </p>
      <p className="text text_type_digits-default text_color_inactive">{property}</p>
    </div>
  );
};

IngredientProperty.propTypes = {
  name: PropTypes.string.isRequired,
  property: PropTypes.number.isRequired
}

export default IngredientProperty;
