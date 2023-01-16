import React from 'react';
import styles from './burger-ingredients.module.css'
import BurgerTabs from "./burger-tabs/burger-tabs";
import Ingredients from "./ingredients/ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import PropTypes from "prop-types";
import {ingredientPropTypes} from "../util/prop-types";


const BurgerIngredients = ({data}) => {

  return (
    <div className={styles.Container}>
      <div className={styles.BurgerIngredients}>

        <p className="text text_type_main-large">
          Соберите бургер.
        </p>

        <BurgerTabs/>
        <Ingredients data={data}/>
      </div>
    </div>
  );
};


BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
}




export default BurgerIngredients;
