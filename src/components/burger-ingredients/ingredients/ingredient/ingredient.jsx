import React from 'react';
import styles from './ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";
import {ingredientPropTypes} from "../../../util/prop-types";


const Ingredient = ({ingredient}) => {

  const { name, image, count, price, type } = ingredient

  const DNDTypes = {
    BUN: "bun",
    INGREDIENT: "ingredient",
    COMPONENT: "component",
  };

  const [,dragRef] = useDrag({
    type: type === DNDTypes.BUN ? type : DNDTypes.INGREDIENT,
    item: ingredient,
  });

  return (
    <div ref={dragRef} className={styles.ingredient}>
      {count? <Counter count={count} size="default"/>
      : null
      }
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
  ingredient: ingredientPropTypes.isRequired
}

export default Ingredient;
