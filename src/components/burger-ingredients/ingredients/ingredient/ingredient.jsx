import React from 'react';
import styles from './ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Ingredient = ({image, price, name}) => {
  return (
    <div className={styles.ingredient}>
      <Counter count={1} size="default"/>
      <img src={image} alt='Ingredient image' className={styles.image}/>
      <div className={styles.price}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary"/>
      </div>

      <p className="text text_type_main-default">
        {name}
      </p>

    </div>
  );
};

Ingredient.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default Ingredient;
